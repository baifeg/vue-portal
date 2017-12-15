<template>
	<div class="pops" :style="cssStyle">
		<div class="popsBuild" :style="innerStyle">
		<div v-if="title" class="popsToper"><i :class="titleIcon" aria-hidden="true"></i>{{title}}</div>
		<div class="popsClose"><button title="关闭" class="closeBtn" @click='close'></button></div>
		<slot></slot>
		</div>
	</div>
</template>
<script>
import Vue from 'vue';
import bus from '../utils/bus';

export default {
	props: {
		width: {
			default: 500
		},
		titleIcon: {
			default: 'fa fa-file-text fa-lg'
		},
		title: {},
	},
	data: function() {
		return {
			cssStyle: {
				display: 'none'
			},
			innerStyle: {
				display: 'block',
				top: '50px',
				width: this.width + 'px',
			}
		}
	},
	created: function() {
		bus.$on('dialog.cancel', this.close);
	},
	methods: {
		show: function(component) {
			this.cssStyle.display='block';
		},
		close: function() {
			this.cssStyle.display='none';
		},
	},
}
</script>