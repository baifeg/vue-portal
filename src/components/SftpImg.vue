<template>
<img :src="getSrc" :alt="alt"></img>
</template>
<script>
import http from '../config/http'

export default {
	props: ['src', 'alt'],
	computed: {
		getSrc: function() {
			return http.sftpPathPrefix + '/' +  this.src;
		}
	}
}
</script>