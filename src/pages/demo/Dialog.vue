<template>
<vue-dialog ref="dialog0" title="对话框Demo">
	<ul class="form">
					<li class="clearfix">
						<div class="formTxt fl">
							<span>*</span>文本框
						</div>
						<div class="formIpt fr">
							<input type="text" placeholder="请输入文字" />
						</div>
					</li>
					<li class="clearfix">
						<div class="formTxt fl">
							错误状态
						</div>
						<div class="formIpt fr">
							<input class="error" type="text" placeholder="请输入文字" />
							<span class="errorTxt">请输入文字</span>
						</div>
					</li>
					<li class="clearfix">
						<div class="formTxt fl">
							单选框
						</div>
						<div class="formIpt fr">
							<span class="fromRadio radioOn">上午</span>
							<span class="fromRadio">中午</span>
							<span class="fromRadio">下午</span>
						</div>
					</li>
					<li class="clearfix">
						<div class="formTxt fl">
							文本域
						</div>
						<div class="formIpt fr">
							<textarea></textarea>
						</div>
					</li>
					<li class="clearfix">
						<div class="formTxt fl"></div>
						<div class="formIpt fr">
							<button class="blueBtn">提交</button>
							<button class="blueBtn-o" @click="cancel">取消</button>
						</div>
					</li>
				</ul>
</vue-dialog>
</template>
<script>
import bus from '../../utils/bus'
import VueDialog from '../../components/VueDialog.vue'

export default {
	components: {
		VueDialog
	},
	data: function() {
		return {
			name: ''
		}
	},
	created: function() {
		console.log(this.$refs);
	},
	methods: {
		confirm: function() {
			bus.$emit('demoDialog.form.submit', this.data);
		},
		show: function() {
			this.$refs.dialog0.show();
		},
		cancel: function() {
			this.$refs.dialog0.close();
		}
	}
}
</script>