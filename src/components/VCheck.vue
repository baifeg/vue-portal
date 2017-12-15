<template>
<div class="layui-unselect layui-form-checkbox" :class="{'layui-form-checked':isOn, 'layui-checkbox-disbaled layui-disabled': disabled}" @click="changeCheckd" lay-skin="primary"><span>{{text}}</span><i class="layui-icon"></i></div>
</template>
<script>
//每组组件一个model，值为字符串数组
export default {
	model: {
		prop: 'modelArray',
	},
	 props:{
		 value: String,
		 text: String,
		 modelArray: Array,
		 disabled: {
			 type: Boolean,
			 default: false,
		 }
	 },
     methods:{
         changeCheckd(){
        	 var index = this.modelArray.indexOf(this.value)
        	 if(index < 0)
    			 this.modelArray.push(this.value);
        	 else
        		 this.modelArray.splice(index, 1);
         }
     },
     computed: {
    	 isOn: function() {
    		 return this.modelArray.indexOf(this.value) > -1;
    	 }
     }
}
</script>