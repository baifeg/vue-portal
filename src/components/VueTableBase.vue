<script>

    import axios from 'axios';
    import qs from 'qs';
    import lodashorderby from 'lodash.orderby';
    import lodashincludes from 'lodash.includes';
    import lodashfindindex from 'lodash.findindex';
    import VueListBase from './VueListBase.vue';
    import Vue from 'vue';

    export default {
        name: "VueTableBase",
        mixins: [VueListBase],
        props: {
            /**
             * The column titles, required
             */
            columns: {
                type: Array,
                required: true,
            },
            /**
             * Function to handle row clicks
             */
            rowClickHandler: {
                type: Function,
                required: false,
                default: function () {}
            },
            checkable: {
            	type: Boolean,
            	required: false,
            	default: false
            },
            checkColName: {
            	type: String,
            	required: false,
            	default: 'id'
            }
        },
        data: function () {
            return {
                filteredSize: 0,
                sortKey: [],
                sortOrders: {},
                sortChanged: 1,
                columnMenuOpen: false,
                displayCols: [],
                filteredValues: [],
                page: 1,
                echo: 0,
                loading: false,
                checkedKeys: []
            };
        },
        mounted: function () {
          this.$nextTick(function () {
              this.loading= true;
              this.setSortOrders();
              var self = this;
              this.columns.forEach(function (column) {
                  var obj = self.buildColumnObject(column);
                  self.displayCols.push(obj);
              });
              if (this.ajax.enabled) {
                  if (!this.ajax.delegate) {
                      this.loading= true;
                      this.fetchData(function (data) {
                          self.values = data.data;
                          self.processFilter();
                      });
                  }else
                      this.processFilter();
              }else
                  this.processFilter();
          })
        },
        created: function () {
            var self = this ;
            this.$on('cellDataModifiedEvent', self.fireCellDataModifiedEvent);
            this.$on('searchFormSubmitEvent', self.processFilter);
        },
        beforeDestroy: function(){
            var self = this ;
            this.$off('cellDataModifiedEvent', self.fireCellDataModifiedEvent);
            this.$off('searchFormSubmitEvent', self.processFilter);
        },
        watch: {
            columns: function () {
                this.displayCols = [];
                var self = this;
                this.columns.forEach(function (column) {
                    var obj = self.buildColumnObject(column);
                    self.displayCols.push(obj);
                });
                this.setSortOrders();
            },
        },
        computed: {
            displayColsVisible: function () {
                var displayColsVisible = [];
                for (var a in this.displayCols) {
                    if (this.displayCols[a].visible)
                        displayColsVisible.push(this.displayCols[a]);
                }
                return displayColsVisible;
            },
            checkedAll: {
            	get: function () {
                    return this.filteredValues && this.checkedKeys.length == this.filteredValues.length && this.filteredValues.length > 0;
                },
                set: function (value) {
                    var selected = [];

                    if (value) {
                    	var colName = this.checkColName;
                        this.filteredValues.forEach(function (entry) {
                            selected.push(entry[colName]);
                        });
                    }
					console.log(selected)
                    this.checkedKeys = selected;
                }
            }
        },
        methods: {
            fireCellDataModifiedEvent:function ( originalValue, newValue, columnTitle, entry) {
                this.$parent.$emit('cellDataModifiedEvent',originalValue, newValue, columnTitle, entry);
            },
            buildColumnObject: function (column) {
                var obj = {};
                obj.title = column.title;
                if ( typeof column.name !== "undefined")
                    obj.name = column.name;
                else
                    obj.name = column.title;
                if ( typeof column.visible !== "undefined")
                    obj.visible = column.visible;
                else
                    obj.visible = true;
                if ( typeof column.editable !== "undefined")
                    obj.editable = column.editable;
                else
                    obj.editable = false;
                if ( typeof column.renderfunction !== "undefined")
                    obj.renderfunction = column.renderfunction;
                else
                    obj.renderfunction = false;
                if ( typeof column.columnstyle !== "undefined")
                    obj.columnstyle = column.columnstyle;
                else
                    obj.columnstyle = "";
                if ( typeof column.cellstyle !== "undefined")
                    obj.cellstyle = column.cellstyle;
                else
                    obj.cellstyle = "";
                if ( typeof column.sortable !== "undefined")
					obj.sortable = column.sortable;
                else
                	obj.sortable = false;
                if ( typeof column.component !== "undefined")
					obj.component = this.getTdComponent(column.component);
                else
                	obj.component = false;
                return obj;
            },
            setSortOrders: function () {
                this.sortKey = [];
                var sortOrders = {};
                this.columns.forEach(function (column) {
                    sortOrders[column.name] = "";
                });
                this.sortOrders = sortOrders;

            },
            sortBy: function (event, column) {
                if (this.sortable && column.sortable) {
                    var self = this;
                    var key = column.name;

                    if (!this.multiColumnSortable || ( this.multiColumnSortable && !event.shiftKey)) {
                        this.sortKey = [key];
                        this.columns.forEach(function (column) {
                            if (column.name !== key) {
                                self.sortOrders[column.name] = "";
                            }
                        });
                    } else {
                        if (lodashfindindex(this.sortKey, function(o) { return o === key; }) === -1) {
                            this.sortKey.push(key);
                        }
                    }
                    if (this.sortOrders[key] === "") {
                        this.sortOrders[key] = "ASC";
                    } else if (this.sortOrders[key] === "ASC") {
                        this.sortOrders[key] = "DESC";
                    } else {
                        this.sortOrders[key] = "ASC";
                    }

                    this.sortChanged = this.sortChanged * -1;
                }
            },
            getTdComponent: function(componentInfo) {
            	var name = 'auto' + Math.random().toString(36).substring(7);
            	Vue.component(name, Vue.extend(componentInfo));
            	return name;
            }
        }
    }
</script>