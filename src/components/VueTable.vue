<template>
<div>
	<table :class="cssClass">
		<thead>
			<tr>
				<td v-if="checkable"><input type="checkbox" v-model="checkedAll"/></td>
	            <td v-for="column in displayColsVisible" @click="sortBy($event, column)"
	                track-by="column">
	                {{ column.title }}
	                <i v-if="sortable && column.sortable" :class="getClasses(column)" aria-hidden="true"></i> 
	            </td>
	        </tr>
		</thead>
		<tbody :class="bodyClass">
			<tr v-for="(entry, index) in filteredValuesSorted " track-by="entry" @click="rowClickHandler($event, entry)">
				<td v-if="checkable"><input v-model="checkedKeys" type="checkbox" :value="entry[checkColName]"/></td>
	            <td v-for="column in displayColsVisible" track-by="column"
	                v-show="column.visible" :class="column.cellstyle">
	                <span v-if="column.renderfunction!==false" v-html="column.renderfunction( column.name, entry, index )"></span>
	                <template v-else-if="column.component">
	                	<component :is="column.component" :entry="entry" :rowIndex="index" :colName="column.name"></component>
	                </template>
	                <span v-else-if="!column.editable"> {{ entry[column.name] }} </span>
	                <value-field-section v-else
	                    :entry="entry"
	                    :columnname="column.name"></value-field-section>
	            </td>
	        </tr>
		</tbody>
	</table>
	<div class="pages clearfix">
		<pagination ref="pagination" 
			@current-page="updateCurrentPage" 
			@update-limit="updatePageSize"
			:layout="['count', 'limit', 'prev', 'page', 'next']"
			align="right"
		></pagination>
    </div>
</div>
</template>
<style scoped>
@import '/lib/css/simplePagination.css'
</style>
<script>

    import axios from 'axios';
    import qs from 'qs';
    import lodashorderby from 'lodash.orderby';
    import lodashincludes from 'lodash.includes';
    import lodashfindindex from 'lodash.findindex';
    import VueTableBase from './VueTableBase';
    import pagination from './Pagination';

    /* Field Section used for displaying and editing value of cell */
    var valueFieldSection = {
      template: '<span v-if="!enabled" @dblclick="toggleInput" class="editableField">{{this.entry[this.columnname]}}</span>'+
          '<div v-else-if="enabled" class="input-group">'+
          '  <input type="text" class="form-control" v-model="datavalue" @keyup.enter="saveThis" @keyup.esc="cancelThis">'+
          '  <span class="input-group-btn">'+
          '    <button class="btn btn-danger" type="button" @click="cancelThis" ><i class="fa fa-ban" aria-hidden="true"></i></button>'+
          '    <button class="btn btn-primary" type="button" @click="saveThis" ><i class="fa fa-check" aria-hidden="true"></i></button>'+
          '  </span>'+
          '</div>',
      props: ['entry','columnname'],
      data: function () {
          return {
            enabled: false,
            datavalue: "",
          }
      },
      methods: {
        saveThis: function () {
            var originalValue = this.entry[this.columnname];
            this.entry[this.columnname] = this.datavalue;
            this.$parent.$emit('cellDataModifiedEvent', originalValue, this.datavalue, this.columnname,  this.entry);
            this.enabled = !this.enabled;
        },
        cancelThis: function () {
            this.datavalue = this.entry[this.columnname];
            this.enabled = !this.enabled;
        },
        toggleInput: function () {
            this.datavalue= this.entry[this.columnname];
            this.enabled=!this.enabled;
        },
      }
    };
    
    export default {
        name: "VueTable",
        mixins: [VueTableBase],
        components: {
            'value-field-section': valueFieldSection,
            pagination,
        },
        props: {
            cssClass: {
            	type: String,
            	required: false
            },
            bodyClass: {
            	type: String,
            	required: false
            }
        },
        watch: {
        	filteredSize: function() {
        		this.$refs.pagination.initCount(this.filteredSize, this.pageSize);
        	}
        },
        methods: {
            getClasses: function (column) {
                var classes = [];
                var key = column.name;
                if (this.sortable) {
                    classes.push("fa");
                    classes.push("fa-sort");
                    /*if (this.sortKey === key) {
                        classes.push("active");
                    }*/
                    if (lodashfindindex(this.sortKey, function(o) { return o === key; }) !== -1) {
                        classes.push("text-info");
                    }

                    if (this.sortOrders[key] === "ASC") {
                        classes.push("fa-sort-asc");
                    } else if (this.sortOrders[key] === "DESC") {
                        classes.push("fa-sort-desc");
                    }
                }
                return classes;
            },
        }
    }
</script>