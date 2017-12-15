import VueRouter from 'vue-router'
import routes from './config/routes'
import auth from './ssoAuth'
import http from './config/http'

function requireAuth(to, from, next) {
	if (!auth.loggedIn()) {
		next({
			path: "/login/" + Math.random().toString(36).substring(7),
			query: {
				redirect: to.fullPath
			}
		})
	} else {
		next()
	}
}

function beforeLogin(to, from, next) {
	if (auth.loggedIn()) {
		next({
			path: '/'
		})
	} else {
		next()
	}
}

function pop(rs) {
	var array = [];
	for (var r in rs) {
		var item = rs[r];
		var obj = {
			path: r,
			component: require('./pages/' + item.templatePath + ".vue")
		}
		if (item.auth) {
			obj.beforeEnter = requireAuth
		} else if (item.login) {
			obj.beforeEnter = beforeLogin
		}
		if (item.title) {
			obj.name = item.title
		}
		if (item.children) {
			obj.children = pop(item.children)
		}
		array.push(obj);
	}
	return array;
}

function getRoutes() {
	var arr = routes;
	//console.log(JSON.stringify(arr));
	arr.push({
		path: '/logout',
		beforeEnter(to, from, next) {
			auth.logout()
			next('/')
		}
	});
	arr.push({
		path: '/center/home',
		beforeEnter(to, from, next) {
			if ('STUDENT' === auth.userInfo().type) {
				next('/center/student/home')
			} else {
				next('/center/company/home')
			}
		}
	});
	return arr;
}

const router = new VueRouter({
	//mode: 'history',
	base: __dirname,
	routes: getRoutes(),
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0
		}
	}
})

//登录拦截
router.beforeEach((to, from, next) => {
	var ticket = to.query.ticket
	if (ticket) {
		auth.checkTicket(ticket);
	}
	if (to.meta.requiresAuth && !auth.httpLoggedIn()) {
		auth.goLogin();
	} else {
		next();
	}
})

export default router