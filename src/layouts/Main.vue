<template>
  <div class="container">
    <div class="header">
				<div class="main clearfix">
					<div class="logo fl">
						<img src="/lib/img/logo.png" />
					</div>
					
					<top-nav></top-nav>
					<div class="header_person fr" v-if="isLoggedIn()">
						<div class="header_personName">
							<img src="/lib/img/timg.jpg" :title="userInfo.displayName" />
							<span>{{userInfo.displayName}}</span>
						</div>
						<ul class="header_personList">
							<li>
								<router-link to="/center/home"><i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>用户中心</router-link>
							</li>
							<!--<li>
								<router-link to="/center/table"><i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>Table Demo</router-link>
							</li>
							<li>
								<router-link to="/center/pop"><i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>Pop Demo</router-link>
							</li>

							<li>
								<router-link to="/center/table2"><i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>Table Demo2</router-link>
							</li>

							<li>
								<router-link to="/center/layer"><i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>Layer Demo</router-link>
							</li>-->
							<li class="header_personExit">
								<router-link to="/logout"><i class="fa fa-sign-out fa-lg" aria-hidden="true"></i>退出</router-link>
							</li>	
							<!--<li>
								<router-link to="/trade/cart"><i class="fa fa-user-circle fa-lg" aria-hidden="true"></i>我的购物车</router-link>
							</li>-->
						</ul>
					</div>
					<div class="header_login fr" v-else>
						<a href="javascript:void()" @click="goLogin()">登录</a>
						<a href="javascript:void()" @click="goReg()">注册</a>
					</div>
				</div>
			</div><!-- end of header -->
	<div class="contant">
    	<router-view></router-view>
    	<div class="about">
					<div class="main clearfix">
						<ul class="about_bank clearfix fl">
							<li>
								<p>关于产品</p>
								<a href="#" target="_blank">产品概览</a>
								<a href="#" target="_blank">联系我们</a>
							</li>
							<li>
								<p>关于</p>
								<a href="#" target="_blank">关于轩辕</a>
								<a href="http://xuanyuan.com.cn/" target="_blank">官网网站</a>
								<a href="#" target="_blank">合作伙伴</a>
							</li>
							<li>
								<p>客户支持</p>
								<a href="#" target="_blank">反馈问题</a>
								<a href="#" target="_blank">帮助</a>
							</li>
						</ul>
						<ul class="about_qrcode clearfix fr">
							<li>
								<img src="/lib/img/qrcode.jpg" />
								<p>轩辕网络官网微博</p>
							</li>
							<li>
								<img src="/lib/img/qrcode.jpg" />
								<p>轩辕网络官网微信</p>
							</li>
						</ul>
					</div>
				</div>
				
				<div class="footerBG">
					广东轩辕网络科技股份有限公司©版权所有2017
				</div><!-- end of footer -->
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav.vue";
import VLink from "../components/VLink.vue";
import auth from "../ssoAuth";
import http from "../config/http";

export default {
  components: {
    TopNav,
    VLink
  },
  computed: {
    userInfo: function() {
      return auth.userInfo();
    }
  },
  methods: {
    isLoggedIn: function() {
      return auth.loggedIn();
    },
    goLogin: function() {
      return auth.goLogin();
    },
    goReg: function() {
      return auth.goReg();
    }
  }
};
</script>
