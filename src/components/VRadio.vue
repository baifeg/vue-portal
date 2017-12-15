<template>
    <div class="layui-unselect layui-form-radio" :class="{'layui-form-radioed':isOn, 'layui-radio-disbaled layui-disabled': disabled}" @click="change" >
    	<i v-if="isOn" class="layui-anim layui-icon layui-anim-scaleSpring"></i>
    	<i v-else class="layui-anim layui-icon"></i>
    	<span>{{text}}</span>
    </div>
</template>
<script>
    export default {
    	model: {
    		prop: 'modelValue',
    	},
        props:{
        	value: String,
        	modelValue: String,
        	text: String,
        	disabled: {
        		type: Boolean,
        		default: false,
        	}
        },
        methods:{
            change(){
                this.$emit('input', this.value);
            }
        },
        computed: {
        	isOn: function() {
        		return this.modelValue === this.value;
        	}
        }
    }
</script>