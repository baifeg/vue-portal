<template>
<div class="mainCont">
	<ul>
		<li><button type="button" @click="dialog">Dialog</button></li>
		<li><button type="button" @click="ok">OK</button></li>
		<li><button type="button" @click="warn">WARN</button></li>
		<li><button type="button" @click="error">ERROR</button></li>
		<li><button type="button" @click="confirm">CONFIRM</button></li>
	</ul>
</div>
</template>
<script>
import Dialog from './Dialog.vue'

export default {
	data: function() {
		return {
			dialogIns: null
		}
	},
	methods: {
		dialog: function() {
			if(this.dialogIns)
				this.dialogIns.show();
			else
				this.dialogIns = this.$dialog(Dialog);
		},
		ok: function() {
			this.$pop.ok("很好")
		},
		warn: function() {
			this.$pop.warn("很好?")
		},
		error: function() {
			this.$pop.error("很不好")
		},
		confirm: function() {
			var self = this;
			self.$pop.confirm({
				message: "好 OR 不好？",
				ok: {
					label: '好',
					callback: function() {
						self.$pop.ok("你点了好")
					}
				},
				cancel: {
					label: '不好',
					callback: function() {
						self.$pop.ok("你点了不好")
					}
				}
			})
		},
	}
}
</script>