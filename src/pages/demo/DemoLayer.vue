<template>
<div class="mainCont">
	<form class="layui-form" action="">
	  <div class="layui-form-item">
	    <label class="layui-form-label">输入框</label>
	    <div class="layui-input-block">
	      <input type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
	    </div>
	  </div>
	  <div class="layui-form-item">
	    <label class="layui-form-label">日期</label>
	    <div class="layui-input-block">
	      <v-date v-model="date"></v-date>
	    </div>
	    date: {{date}}
	  </div>
	  <div class="layui-form-item">
	    <label class="layui-form-label">密码框</label>
	    <div class="layui-input-inline">
	      <input type="password" name="password" required lay-verify="required" placeholder="请输入密码" autocomplete="off" class="layui-input">
	    </div>
	    <div class="layui-form-mid layui-word-aux">辅助文字</div>
	  </div>
	  <div class="layui-form-item">
	    <label class="layui-form-label">选择框</label>
	    <div class="layui-input-block">
	      <select name="city" lay-verify="required">
	        <option value=""></option>
	        <option value="0">北京</option>
	        <option value="1">上海</option>
	        <option value="2">广州</option>
	        <option value="3">深圳</option>
	        <option value="4">杭州</option>
	      </select>
	    </div>
	  </div>
	  <div class="layui-form-item">
	    <label class="layui-form-label">复选框</label>
	    <div class="layui-input-block">
	      <input type="checkbox" name="like[write]" title="写作">
	      <input type="checkbox" name="like[read]" title="阅读" checked>
	      <input type="checkbox" name="like[dai]" title="发呆">
	    </div>
	  </div>
	  <div class="layui-form-item">
	    <label class="layui-form-label">复选框</label>
	    <div class="layui-input-block">
	      <v-check v-model="mode" value="write" text="写作"></v-check>
	      <v-check v-model="mode" value="read" text="阅读"></v-check>
	      <v-check v-model="mode" value="dai" text="发呆"></v-check>
	    </div>
	  </div>
	  {{mode}}
	  <div class="layui-form-item">
	    <label class="layui-form-label">开关</label>
	    <div class="layui-input-block">
	      <input type="checkbox" name="switch" lay-skin="switch">
	    </div>
	  </div>
	  <div class="layui-form-item">
	    <label class="layui-form-label">单选框</label>
	    <div class="layui-input-block">
	    	<input type="radio" name="hh" readonly="readonly" disabled="disabled" checked="checked">
	    	<input type="radio" name="hh" readonly="readonly" disabled="disabled">
	    </div>
	  </div>
	  <div class="layui-form-item">
	    <label class="layui-form-label">单选框</label>
	    <div class="layui-input-block">
	    	<v-radio v-model="gander" value="男" text="男"></v-radio>
	    	<v-radio v-model="gander" value="女" text="女"></v-radio>
	    </div>
	  </div>
	  {{gander}}
	  <div class="layui-form-item layui-form-text">
	    <label class="layui-form-label">文本域</label>
	    <div class="layui-input-block">
	      <textarea name="desc" placeholder="请输入内容" class="layui-textarea" v-model="text"></textarea>
	    </div>
	    {{text}}
	  </div>
	  <div class="layui-form-item">
	    <div class="layui-input-block">
	      <button class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button>
	      <button type="reset" class="layui-btn layui-btn-primary">重置</button>
	    </div>
	  </div>
	</form>
</div>
</template>
<script>
import VCheck from '../../components/VCheck.vue'
import VRadio from '../../components/VRadio.vue'
import VDate from '../../components/VDate.vue'

export default {
	components: {
		VCheck,
		VRadio,
		VDate
	},
	data: function() {
		return {
			mode: ['write'],
			gander: '女',
			text: '',
			date: '',
		}
	},
	mounted: function() {
		layui.use('form', function(){
			  var form = layui.form;
			  
			  //监听提交
			  form.on('submit(formDemo)', function(data){
			    layer.msg(JSON.stringify(data.field));
			    return false;
			  });
			});
	}
}
</script>