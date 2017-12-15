<template>
	<div class="mainCont">
		<div class="navbread">
			<a href="#">交易流水</a>
			<a href="#" class="persent">首页</a>
		</div>
		<div class="listTab clearfix">
			<form id="searchForm" @submit.prevent="search">
				<div class="searchBar fr">
					<input type="text" name="id" placeholder="id" />
					<button>搜索</button>
				</div>
			</form>
		</div>
	<vue-table
			 ref="table1"
			 cssClass="table tableList"
			 searchForm="#searchForm"
             :columns="columns"
             :values="values"
             :paginated="paginated"
             :ajax="ajax"
             :row-click-handler=handleRowFunction
             :checkable="checkable"
     >
     </vue-table>
     </div>
</template>

<script>
import VueTable from '../../components/VueTable.vue';
import Vue from 'vue';
import pop from '../../utils/pop'

var renderfu = function (colname, entry) {
    return [
    	'<button @click="edit"><i class="fa fa-desktop fa-lg" aria-hidden="true"></i></button>',
    	'<button class="edit" data-id="' + entry.id + '"><i class="fa fa-edit fa-lg" aria-hidden="true"></i></button>',	
    	'<button><i class="fa fa-trash-o fa-lg" aria-hidden="true"></i></button>'
    ].join('');
};

var handleRow = function (event, entry) {
    console.log("CLICK ROW: " + JSON.stringify(entry));
};
export default {
    components: {
    	VueTable,
    },
    data: function() {
    	return {
	        logging: [],
	        paginated: true,
	        handleRowFunction: handleRow,
	        checkable: true,
	        ajax: {
	            enabled: true,
	            url: "http://localhost:8080/api/zsapi/data/test1",
	            method: "POST",
	            delegate: true,
	            axiosConfig:{
	                headers: {
	                }
	            }
	        },
	        columns: [
	            {
	                title: "Id",
	                name: "id",
	                sortable: true, 
	            },
	            {
	                title: "编号",
	                name: "orderNo",
	                visible: true,
	                editable: false,
	                sortable: true,
	            },
	            {
	                title: "用户id",
	                name:"userId",
	                visible:true
	            }
	        ]
	    }
    },
    created: function () {
        var self = this;
        this.$on('cellDataModifiedEvent',
            function( originalValue, newValue, columnTitle, entry) {
                self.logging.push("cellDataModifiedEvent - Original Value : " + originalValue +
                                         " | New Value : " + newValue +
                                         " | Column : " + columnTitle +
                                         " | Complete Entry : " +  entry );
            }
        );
        this.$on('ajaxLoadedEvent',
            function( data ) {
                this.logging.push("ajaxLoadedEvent - data : " + data );
            }
        );
        this.$on('ajaxLoadingError',
            function( error ) {
                this.logging.push("ajaxLoadingError - error : " + error );
            }
        );
    },
     methods: {
    	search: function() {
    		this.$refs.table1.$emit('searchFormSubmitEvent');
    	},
    }
}

$(function() {
	$("table .edit").on('click', function() {
    	var id = $(this).data("id");
    	pop.ok("edit id: " + id);
    })
})
</script>
