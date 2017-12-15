// development, production
const mode = process ? process.env.NODE_ENV : 'production'

const base = {
	aaa: 'bbb'
}

const development = merge(base, {

	//zzj
	sftpPathPrefix: 'http://121.8.157.139:10181',

	//ssoServerHost: '121.8.157.140:18213',//测试机
	ssoServerHost: 'http://121.8.157.140:18213', //我本地

	gwApiPrefix: 'http://127.0.0.1:28080'//测试机
//	gwApiPrefix: 'http://121.8.157.140:18211',//测试机 避免重定向
	// gwApiPrefix: 'http://192.168.24.246:8080', //梓杰本地
	//gwApiPrefix:'http://192.168.24.244:8080', //华炎本地
	
})

const production = merge(base, {
	ssoServerHost: 'http://121.8.157.140:18213',
	sftpPathPrefix: 'http://121.8.157.139:10181',
	gwApiPrefix: 'http://121.8.157.140:18211'
})

const test = merge(base, {
	ssoServerHost: 'http://121.8.157.140:18213',
	sftpPathPrefix: 'http://121.8.157.139:10181',
	gwApiPrefix: 'http://121.8.157.140:18211'
})

function merge(base, ext) {
	var temp = {};
	for (var key in base) {
		temp[key] = base[key];
	}
	for (var key in ext) {
		temp[key] = ext[key];
	}
	return temp;
}

export default eval(mode)