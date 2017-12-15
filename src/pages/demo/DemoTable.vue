<template>
	<div class="mainCont">
		<div class="navbread">
			<a href="#">用户中心</a>
			<a href="#" class="persent">首页</a>
		</div>
		<div class="listTab clearfix">
			<form id="searchForm" @submit.prevent="search">
				<div class="searchBar fr">
					<input type="text" name="name" placeholder="院系代码、名称" />
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
	            enabled: false,
	            url: "/zsapi/practice/practices",
	            method: "POST",
	            delegate: true,
	            axiosConfig:{
	                headers: {
	                    'Authorization': 'Bearer TESTTESTTESTTESTTEST'
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
	                title: "Name",
	                name: "title",
	                visible: true,
	                editable: true,
	                sortable: true,
	            },
	            {
	                title: "Test",
	                visible: true,
	                renderfunction: renderfu
	            }
	        ],
	        values: [
	            {
	                "id": 1,
	                "title": "john",
	            },
	            {
	                "id": 2,
	                "title": "mary",
	            },
	            {
	                "id": 3,
	                "title": "jack",
	            },
	            {
	                "id": 4,
	                "title": "joe",
	            },
	            {
	                "id": 5,
	                "title": "ana",
	            },
	            {
	                "id": 6,
	                "title": "rita",
	            },
	            {
	                "id": 7,
	                "title": "mario",
	            },
	            {
	                "id": 8,
	                "title": "luigi",
	            },
	            {
	                "id": 9,
	                "title": "mickey",
	            },
	            {
	                "id": 10,
	                "title": "donald",
	            },
	            {
	                "id": 11,
	                "title": "juliet",
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
