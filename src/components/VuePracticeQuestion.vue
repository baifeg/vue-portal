<template>
	<!--问答-->
	<div class="questions" v-show="!isActive">
		<div class="user-import">
			<!--未登录提示-->
			<div class="login-hint" style="display: none;">
				<ul class="clearfix">
					<li><img src="/lib/img/person.png"/></li>
					<li class="li-2">您目前尚未登录，请<a href="">登录</a>或<a href="">注册</a>后进行问答 </li>
				</ul>
			</div>
			
			<!--已登录 输入框-->
			<div class="layui-form user-textarea" style="display: block;">
				<textarea name="" required lay-verify="required" placeholder="填写您想要提问的内容信息" class="layui-textarea"></textarea>
				<p class="clearfix"><button class="blueBtn fr">提交</button></p>
			</div>
			
		</div>
		
		<!--评论区-->
		<ul class="comment">
				<li>
					<dl class="clearfix">
						<dt><img src="/lib/img/certificateIMG2.png"/></dt>
						<dd class="user-text">
							<p>怎么在进入IPython后打开文本编辑器啊，实验报告里的样例在哪里呢？</p>
							<div class="clearfix">
								<span class="like fl"><i class="fa fa-thumbs-up"></i>55</span>
								<b>3天前</b>
							</div>
						</dd>
						
					</dl>
				</li>
				<li>
					<dl class="clearfix">
						<dt><img src="/lib/img/certificateIMG2.png"/></dt>
						<dd class="user-text">
							<p>怎么在进入IPython后打开文本编辑器啊，实验报告里的样例在哪里呢？学习完成之后感觉应该怎样继续深造？学习完成之后感觉应该怎样继续深造？学习完成之后感觉应该怎样继续深造？学习完成之后感觉应该怎样继续深造？习完成之后感觉应该怎样继续深造？习完成之后感觉应该怎样继续深造？</p>
							<div class="clearfix">
								<span class="like fl"><i class="fa fa-thumbs-up"></i>55</span>
								<b>3天前</b>
							</div>
						</dd>
						
					</dl>
				</li>
		</ul>
	</div>
</template>
<script>
export default {
	components: {
	},
	props:{
		isActive:{
			type:Boolean,
			required:true
		},
	},
	data:function(){
		return{
		}
	}
}
</script>