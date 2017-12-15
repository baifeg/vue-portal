<template>
	<div class="goods-list">
		<template v-for="item in filteredValues">
			<practice-item :item="item" :imgClickHandler="imgClickHandler"></practice-item>
		</template>
	</div>
</template>
<script>
import VueListBase from './VueListBase.vue'
import PracticeItem from './PracticeItem.vue'
var imgClickHandler = function(event,entry){
	const practiceId = entry.id;
	this.$router.push({path:"/practice/"+practiceId});
	location.reload()
}
export default {
	mixins: [VueListBase],
	props:{
		pageSize:{
			type:Number
			
		},
		pageNum:{
			type:Number
			
		}
	},
	components: {
		PracticeItem,
	},
	data:function(){
		return{
			imgClickHandler:imgClickHandler
		}
	} 
	
}
</script>