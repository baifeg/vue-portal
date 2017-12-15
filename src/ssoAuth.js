import http from './config/http';
/* globals localStorage */

// 保存时间 30分钟
const STORE_TIME = 1000 * 60 * 30;
const prefix = http.gwApiPrefix;

function updateTicketExpiredTime() {
	localStorage.ticketExpiredTime = new Date().getTime() + STORE_TIME;
}

export default {
	getTicket() {
		return localStorage.ticket
	},

	logout(callback) {
		axios.get(prefix + "/api/auth/logout?ticket=" + localStorage.ticket).then(function (response) {
			//console.log(response.data)
		})
		delete localStorage.ticket
		if (callback) callback()
		// this.onChange(false)
	},

	loggedIn() {

		if (!localStorage.ticket)
			return false;
		if (!localStorage.ticketExpiredTime)
			return false;
		var now = new Date().getTime();
		if (localStorage.ticketExpiredTime > now) {
			updateTicketExpiredTime();
			return true;
		} else {
			return false;
		}

	},

	httpLoggedIn() {
		var rst = false;
		$.ajax({
			type: "get",
			url: prefix + "/api/auth/isLogin?ticket=" + localStorage.ticket,
			data: null,
			dataType: "json",
			async: false,
			success: function (data) {
				if (data == "true") {
					rst = true;
				}
			}
		});
		return rst;
	},

	onChange() {},

	userInfo() {
		if (localStorage.userInfo) {
			return JSON.parse(localStorage.userInfo);
		} else {
			return {};
		}
	},

	checkTicket(ticket) {
		// 1. verify ticket
		/*axios.get("/api/auth/isLogin?ticket=" + ticket).then(function(response) {
		  console.log(response.data);
	  });*/
		localStorage.ticket = ticket;
		updateTicketExpiredTime();
		$.ajax({
			type: "get",
			url: prefix + "/api/auth/getLoginUser?ticket=" + ticket,
			data: null,
			dataType: "json",
			async: false,
			success: function (data) {
				if (data) {
					var info = {
						id: data.id,
						displayName: data.name,
						type: data.type
					}
					localStorage.setItem("userInfo", JSON.stringify(info))
				}
			}
		});
		// 2. get and store user info
		/*axios.get(prefix + "/api/auth/getLoginUser?ticket=" + ticket).then(function(response) {
		  if(response.data) {
			  var info = {
				 id: response.data.id,
				 displayName: response.data.name,
				 type: response.data.type
			  }
			  localStorage.setItem("userInfo", JSON.stringify(info))
		  }
	  })*/
	},
	goLogin() {
	  var url = http.ssoServerHost + "/#/login";
      var service = window.location.href;
      var index = service.indexOf("ticket=");
      if (index != -1) {
        service = service.substr(0, index - 1);
      }
      url += "?type=2&service=" + encodeURIComponent(service);
      window.location.href = url;
	},
	goReg() {
	  var url = http.ssoServerHost + "/#/register/1";
      window.location.href = url;
	}
}