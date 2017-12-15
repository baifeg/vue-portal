export const student = {
	'/center/home': {
		label: '我的主页',
		cssClass: 'fa fa-user-circle',
	},
	'/center/student/project': {
		label: '我的项目',
		cssClass: 'fa fa-list',
	},
	'/center/student/practice/practices': {
		label: '我的实训',
		cssClass: 'fa fa-file-code-o',
	},
	'/center/student/trade/orders': {
		label: '我的订单',
		cssClass: 'fa fa-calendar-plus-o'
	},
	'/center/student/resume': {
		label: '我的简历',
		cssClass: 'fa fa-vcard-o',
	},
	'/center/student/favorite': {
		label: '我的收藏',
		cssClass: 'fa  fa-heart-o',
	},
	'/center/student/news': {
		label: '我的消息',
		cssClass: 'fa fa-commenting',
	},
	'/center/student/job': {
		label: '我的求职',
		cssClass: 'fa fa-hand-lizard-o',
	}
}

export const company = {
	'/center/home': {
		label: '我的主页',
		cssClass: 'fa fa-user-circle',
	},
	'/center/company/job': {
		label: '我的招聘',
		cssClass: 'fa fa-hand-lizard-o',
	},
	'/center/company/project': {
		label: '我的项目',
		cssClass: 'fa fa-list',
	},
	'menuFlag': {
		label: '我的题库',
		cssClass: 'fa fa-list-ol',
		children: [{
			path: '/center/company/exam/list',
			label: '面试题',
		}]
	}
}