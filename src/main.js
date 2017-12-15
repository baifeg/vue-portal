import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './layouts/Main.vue'
import auth from './ssoAuth'
import router from './router'
import pop from './utils/pop'
import layer from 'vue-layer'
import env from './config/env'
import '../lib/layui/layui.all.js'

layui.config({
	dir: '/lib/layui/'
})

Vue.config.productionTip = false

Vue.prototype.$pop = pop;
Vue.prototype.$layer = layer(Vue);
Vue.prototype.$serverError = function (msg) {
	console.log("---- error message:  " + msg);
	pop.error("服务器繁忙，请稍候再试");
}
Vue.prototype.$fixUrl = apiUrl => {
	let prefix = 'http://192.168.29.235:8211'; //测试机
	// let prefix = 'http://192.168.24.246:8080'; //梓杰本地	
	//let prefix = 'http://192.168.24.244:8080'; //华炎本地	
	if (apiUrl.indexOf("?") <= 0) {
		return prefix + apiUrl + '?ticket=' + localStorage.ticket;
	} else {
		return prefix + apiUrl + '&ticket=' + localStorage.ticket;
	}
}
Vue.use(VueRouter);
// 共享配置给desktop.html
localStorage.gwApiPrefix = env.gwApiPrefix;

const app = new Vue({
	el: 'app',
	data: {
		currentRoute: window.location.pathname
	},
	router: router,
	render: h => h(Main),
	/*beforeCreate:function(){//ticket保存
		alert(3);
		var ticket = this.$route.query.ticket;
		if(ticket) {
			auth.checkTicket(ticket);
		}
    }*/
});
router.afterEach((to, from) => {
	app.currentRoute = to.path;
	if (to.name) {
		window.document.title = to.name
	}
})

Vue.prototype.$dialog = function (component, showNow = true) {
	var comp = Vue.extend(component);
	var instance = new comp();
	var mount = instance.$mount();
	var dialog = document.getElementById('vueDialog');
	dialog.innerHTML = '';
	dialog.appendChild(mount.$el);
	if (instance.show && showNow)
		instance.show();
	return instance;
}
