<template>
	<div>
		<div class="course-list clearfix">
			<template v-for="item in filteredValues">
				<practice-item :item="item" :imgClickHandler="imgClickHandler"></practice-item>
			</template>
		</div>
		<div class="pages clearfix" v-if="paginated">
			<pagination ref="pagination" 
			@current-page="updateCurrentPage" 
			></pagination>
		</div>
	</div>
</template>
<script>
import VueListBase from './VueListBase.vue'
import PracticeItem from './PracticeItem.vue'
import pagination from './Pagination.vue'

var imgClickHandler = function(event,entry){
	const practiceId = entry.id;
	this.$router.push({ path: "/practice/" + practiceId });
}
export default {
	mixins: [VueListBase],
	components: {
		PracticeItem,
		pagination
	},
	data:function(){
		return{
			imgClickHandler:imgClickHandler,
			 sortKey: [],
             sortOrders: {},
             sortChanged: 1,
		}
	},
    watch: {
    	filteredSize: function() {
    		if(this.paginated)
    			this.$refs.pagination.initCount(this.filteredSize, this.pageSize);
    	},
    	loading: function(newVal) {
    		if(!this.paginated)
    			return;
    		if(newVal) {
    			this.loadingId = this.$layer.loading(1, {shadeClose: false});
    		} else {
    			if(this.loadingId) {
    				this.$layer.close(this.loadingId);
    			}
    		}
    	}
    },
}
</script>