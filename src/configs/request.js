import jsonp from '@/utils/jsonp';
import axios from 'axios';
import qs from 'qs';
import { routerRedux } from 'dva/router';
import { message } from 'antd';

const DEFAULT_TIMEOUT = 15000;

axios.defaults.baseURL = '//api.admin.chengxuyuantoutiao.com/';
//axios.defaults.withCredentials = true;
axios.defaults.timeout = DEFAULT_TIMEOUT;

axios.defaults.headers = {
	'token': localStorage.getItem('token') || '',
	'Content-Type': 'application/json'
}

// 返回状态拦截器
axios.interceptors.response.use(res => {
	let code = res.data.code
	let msg = res.data.message
	switch (code) {
		case 45:
			message.error(msg);
			routerRedux.push('/login');
			return false;
		case 0:
			return res;
		default:
		    message.error(msg);
			return false;
	}
});

// axios.defaults.transformRequest = [function (data, headers) {
// 	return qs.stringify(data);
// }]

// axios.defaults.paramsSerializer = function (params) {
// 	return qs.stringify(params);
// }

// admin端
export const BASIC_URL = '//api.admin.chengxuyuantoutiao.com/';
// app端
export const APP_URL = '//api.app.chengxuyuantoutiao.com/';

/**
 * jsonp方法
 * @param  {[type]} url  url拼接
 * @param  {[type]} data 参数
 * @return {[type]}      [description]
 */
let J = async (url, data) => {
	return jsonp(url.indexOf('//') > -1 ? url : BASIC_URL + url, {
		params: data || {},
		timeout: DEFAULT_TIMEOUT,
		jsonpCallback: 'callbackparam'
	}).then(res => {
		if(res) {
			switch(res.code) {
				case '100':
					message.warning('登录失败。');
					break;
				case '1003':
					message.warning('您没有权限，请联系管理员。');
					break;
				case '300':
					message.error('服务器出错了，请稍候再重试。');
					break;
				case '1002':
					message.error('请求数据超时。');
					break;
				default :
					return res
			}
		}
	})
}

export {
	J,
	axios
}
