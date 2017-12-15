<template>
	<textarea :id="id" :placeholder="placeholder" autofocus style="height: 300px" rows="1" cols="100"></textarea>
</template>
<script>
import Simditor from 'simditor';

export default {
	model: {
		prop: 'modelValue',
	},
	props: {
		placeholder: String,
		modelValue: String,
		fullEditor: {
			type: Boolean,
			default: true
		}
	},
	data: function() {
		return {
			id: Math.random().toString(36).substring(7),
		}
	},
	mounted: function() {
		var editor;
		//富文本编辑器
		if(this.fullEditor) {
			editor = new Simditor({
			  	textarea: $('#' + this.id)
			  	//optional options
			});
			editor.setValue(this.modelValue);
			editor.on('valuechanged', (e,src) => {
				this.$emit('input', editor.getValue());
			})
		} else {
			editor = $('#' + this.id);
			editor.prop('value', this.modelValue);
			editor.on('input', (e,src) => {
				this.$emit('input', editor.prop('value'));
			})
		}
		
	},
}
</script>