<template>
<div class="layui-unselect layui-form-checkbox" :class="{'layui-form-checked':currentValue}" @click="changeCheckd" lay-skin="primary"><span>{{text}}</span><i class="layui-icon"></i></div>
</template>
<script>
//每个组件一个model，值为true/false
export default {
	 props:['value','text'],
     data(){
         return {
             currentValue: this.value
         }
     },
     created(){
     },
     methods:{
         changeCheckd(){
             this.currentValue=!this.currentValue;
             this.$emit('input', this.currentValue);
         }
     }
}
</script>