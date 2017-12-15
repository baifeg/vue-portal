<script>

    import axios from 'axios';
    import qs from 'qs';
    import lodashorderby from 'lodash.orderby';
    import lodashincludes from 'lodash.includes';
    import lodashfindindex from 'lodash.findindex';
    import env from '../config/env';
    
    var completeUrl = function(url) {
    	if(url.match("^http[s]?://.*$"))
    		return url;
    	else
    		return env.gwApiPrefix + url;
    }
    
    export default {
        name: "VueListBase",
        props: {
            /**
             * The rows, an Array of objects
             */
            values: {
                type: Array,
                required: false,
            },
            /**
             * Enable/disable table sorting, optional, default true
             */
            sortable: {
                type: Boolean,
                required: false,
                default: true,
            },
            /**
             * Enable/disable table multicolumn sorting, optional, default false.
             * Also sortable must be enabled for this function to work.
             */
            multiColumnSortable: {
                type: Boolean,
                required: false,
                default: false,
            },
            /**
             * Enable/disable pagination for the table, optional, default false
             */
            paginated: {
                type: Boolean,
                required: false,
                default: false,
            },
            /**
             * If pagination is enabled defining the page size, optional, default 10
             */
            pageSize: {
                type: Number,
                required: false,
                default: 10,
            },
            /**
             * If loading of table is to be done through ajax, then this object must be set
             */
            ajax: {
                type: Object,
                required: false,
                default: function () {
                    return {
                        enabled: false,
                        url: "",
                        method: "GET",
                        delegate: false,
                        axiosConfig: {}
                    }
                }
            },
            /**
             * Function to handle item clicks
             */
            itemClickHandler: {
                type: Function,
                required: false,
                default: function () {}
            },
            cssClass: {
            	type: String,
            	required: false
            },
            /**
             * Element of search form
             */
            searchForm: {
            	type: String,
            	required: false
            },
            // Function to get list from response
            responseToList: {
            	type: Function,
            	default: res => {
           			return res.data.object.resultList;
           		}
            },
         	// Function to get total size from response
            responseToListSize: {
            	type: Function,
            	default: res => {
            		return res.data.object.count;
            	}
            }
        },
        data: function () {
            return {
                filteredSize: 0,
                sortKey: [],
                sortOrders: {},
                sortChanged: 1,
                filteredValues: [],
                page: 1,
                echo: 0,
                loading: false,
                loadingId: '', // layer loading id
            };
        },
        mounted: function () {
          this.$nextTick(function () {
              this.loading= true;
              this.setSortOrders();
              var self = this;
              if (this.ajax.enabled) {
                  if (!this.ajax.delegate) {
                      this.loading= true;
                      this.fetchData(function (res) {
                    	  self.filteredSize = self.responseToListSize(res);
                          self.values = self.responseToList(res);
                          self.processFilter();
                          self.loading=false;
                      });
                  }else
                      this.processFilter();
              }else
                  this.processFilter();
          })
        },
        created: function () {
            var self = this ;
            this.$on('searchFormSubmitEvent', self.processFilter);
        },
        beforeDestroy: function(){
            var self = this ;
            this.$off('searchFormSubmitEvent', self.processFilter);
        },
        watch: {
            values: function () {
                this.processFilter();
            },
            sortKey: function () {
                this.processFilter();
            },
            sortChanged: function () {
                this.processFilter();
            },
            page: function () {
                this.processFilter();
            },
            pageSize: function () {
                this.processFilter();
            },
            paginated: function () {
                this.processFilter();
            },
            loading: function () {
                /*document.getElementById("loadingdiv").style.width = document.getElementById("maindiv").getBoundingClientRect().width + "px";
                document.getElementById("loadingdiv").style.height = document.getElementById("maindiv").getBoundingClientRect().height+"px";*/
            }
        },
        computed: {
            filteredValuesSorted: function () {
                var tColsDir = [];
                for(var i=0, len=this.sortKey.length; i < len; i++){
                    tColsDir.push(this.sortOrders[this.sortKey[i]].toLowerCase());
                }
                return lodashorderby(this.filteredValues, this.sortKey , tColsDir);
            },
            validPageNumbers: function () {
                // 5 page max
                var result = [];
                var start = 1;
                if (this.page > 3)
                    start = this.page-2;
                for ( var i = 0 ; start <= this.maxPage && i<5; start++ ) {
                    result.push(start);
                    i++;
                }
                return result;
            },
            maxPage: function () {
                return Math.ceil(this.filteredSize / this.pageSize);
            },
            showPaginationEtc: function () {
                var temp = 1;
                if (this.page > 3)
                    temp = this.page-2;
                return ( (temp+4) < this.maxPage  );
            },
        },
        methods: {
            processFilter: function () {
                var self = this;
                this.loading = true;
                if ( this.ajax.enabled && this.ajax.delegate ) {
                   this.fetchData(function (res) {
                       self.filteredSize = self.responseToListSize(res);
                   	   self.filteredValues = self.responseToList(res);
                       self.loading = false;
                   });
                } else {
                    var result = this.values;

                    var tColsDir = [];
                    for(var i=0, len=this.sortKey.length; i < len; i++){
                        tColsDir.push(this.sortOrders[this.sortKey[i]].toLowerCase());
                    }

                    result = lodashorderby(result, this.sortKey, tColsDir);

                    this.filteredSize = result.length;
                    if (this.paginated) {
                        var startIndex = (this.page - 1) * this.pageSize;
                        var tIndex = 0;
                        var tempResult = [];
                        while (tIndex < this.pageSize) {
                            if (typeof result[startIndex + tIndex] !== "undefined")
                                tempResult.push(result[startIndex + tIndex]);
                            tIndex++;
                        }
                        self.filteredValues = tempResult;
                    } else
                        self.filteredValues = result;
                    self.loading = false;
                }
            },
            fetchData: function ( dataCallBackFunction ) {
                var self = this;
                var ajaxParameters = {
                    params: {}
                };
                this.echo++;
                if (this.ajax.enabled && this.ajax.delegate) {
                    var tColsDir = [];
                    for(var i=0, len=this.sortKey.length; i < len; i++){
                        tColsDir.push(this.sortOrders[this.sortKey[i]].toLowerCase());
                    }
                    if ( this.ajax.method=== "GET" ) {
                        //COPY
                        //add the code by liubinghao
                        if(this.ajax.axiosConfig) {
	                        ajaxParameters = JSON.parse(JSON.stringify(this.ajax.axiosConfig));
                        }
                        ajaxParameters.params = serializeFun(this.searchForm);
                        ajaxParameters.params.sortCol = this.sortKey.join(",");
                        ajaxParameters.params.sortDir = tColsDir.join(",");
                        ajaxParameters.params.ticket = localStorage.ticket;
                        ajaxParameters.params.pageNum = this.page;
                        ajaxParameters.params.pageSize = this.pageSize;
                        ajaxParameters.params.echo = this.echo;
                    }
                    if ( this.ajax.method=== "POST" ) {
                    	//add the code by liubinghao
                       	ajaxParameters = serializeFun(this.searchForm);
                        ajaxParameters.sortCol = this.sortKey.join(",");
                        ajaxParameters.sortDir = tColsDir.join(",");
                        ajaxParameters.pageNum = this.page;
                        ajaxParameters.pageSize = this.pageSize;
                        
                        ajaxParameters.echo = this.echo;
                    }
                    //console.log(JSON.stringify(ajaxParameters));
                }
                if( this.ajax.enabled && !this.ajax.delegate ) {
                    if ( this.ajax.method=== "GET" ) {
                        //COPY
                        ajaxParameters = JSON.parse(JSON.stringify(this.ajax.axiosConfig));
                        ajaxParameters.params = {};
                    }
                    if ( this.ajax.method=== "POST" ) {
                        // Do nothing at this point !
                    }
                }
                if (this.ajax.enabled && this.ajax.method === "GET") {
                    axios.get(completeUrl(self.ajax.url), ajaxParameters )
                        .then(response => {
                        	//add the code by liubinghao
                            if (self.ajax.delegate) {
                                if (response.data.echo != self.echo) {
                                    return;
                                }
                            }
                            dataCallBackFunction(response);
                            self.$parent.$emit('ajaxLoadedEvent', response.data);
                        })
                        .catch(e => {
                        	self.loading=false;
                        	self.$parent.$emit('ajaxLoadingError', e);
                        });
                }
                if (this.ajax.enabled && this.ajax.method === "POST") {
                    axios.post(completeUrl(self.ajax.url), qs.stringify(ajaxParameters) , this.ajax.axiosConfig )
                        .then(response => {
                        	//add the code by liubinghao
                       	 self.filteredSize = response.data.object.count;
                       	self.filteredValues=response.data.object.resultList;
                            if (self.ajax.delegate) {
                                if (response.data.echo != self.echo) {
                                    return;
                                }
                            }

                            dataCallBackFunction(response);
                            self.$parent.$emit('ajaxLoadedEvent', response.data);

                        })
                        .catch(e => {
                        	self.loading=false;
                        	self.$parent.$emit('ajaxLoadingError', e);
                        });
                }
            },
            setSortOrders: function () {
                this.sortKey = [];
                this.sortOrders = {};
            },
            sortBy: function (event, columnName) {
                if (this.sortable) {
                    var self = this;
                    var key = columnName;

                    if (!this.multiColumnSortable || ( this.multiColumnSortable && !event.shiftKey)) {
                        this.sortKey = [key];
                        for(var i in self.sortOrders) {
                        	if(i !== key)
                        		self.sortOrders[i] = "";
                        }
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
            updateCurrentPage: function(curr) {
                this.page = curr;
            },
            updatePageSize: function(limit) {
            	this.pageSize = limit;
            }
        }
    }
    
    var serializeFun = function(selector){
        var params = $(selector).serializeArray();
    	var values = {};
        for (var item of params) {
        	if(item.name.endsWith('[]')) {
        		var key = item.name.replace('\[\]','');
        		if(!values[key])
        			values[key] = [];
        		values[key].push(item.value);
        	} else {
		        values[item.name] = item.value;
        	}
        }
        return values;
    }

</script>