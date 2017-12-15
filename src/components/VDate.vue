<template>
    <input type="text" class="layui-input" :id="dateId" v-model="currentValue">
</template>
<script>
    export default {
    	model:{
    		prop: 'value',
    	},
        props:['isTime','dateFormat','dateStyle'],
        data(){
            return {
                dateId:'laydate_'+Date.now(),
                value: '',
                currentValue: this.value,
            }
        },
        mounted() {
        	var self = this;
        	if(self.dateStyle){
                layui.laydate.render({
                    elem:document.getElementById(self.dateId),
                    type:'datetime',
                    range:'至',
                    istime: self.isTime||false,
                    format: self.dateFormat||'yyyy-MM-dd HH:mm:ss',
                    done: function(value, date){ //监听日期被切换
                        self.currentValue=value;
                    }
                })
            }else{
                layui.laydate.render({
                    elem:document.getElementById(self.dateId),
                    istime: self.isTime||false,
                    format: self.dateFormat||'yyyy-MM-dd',
                    done: function(value, date){ //监听日期被切换
                        self.currentValue=value;
                    }
                })
            }

        },
        watch: {
            value(val) {
                //console.log('value：'+val)
                this.currentValue = val;
            },
            currentValue(val) {
                //console.log('currentValue：'+val)
                this.$emit('input', val);
            }
        }
    }
</script>