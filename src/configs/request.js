import jsonp from '@/utils/jsonp';
import axios from 'axios';
import qs from 'qs';
import { message } from 'antd';

const DEFAULT_TIMEOUT = 15000;

axios.defaults.withCredentials = true;
axios.defaults.timeout = DEFAULT_TIMEOUT;

axios.defaults.headers = {
	'X-Requested-With': 'XMLHttpRequest',
	"Content-Type": 'application/x-www-form-urlencoded;charset=UTF-8'
}

axios.defaults.transformRequest = [function (data, headers) {
	return qs.stringify(data);
}]

axios.defaults.paramsSerializer = function (params) {
	return qs.stringify(params);
}

export const BASIC_URL = '//123.59.85.60/datacenter';
//export const BASIC_URL = '//123.59.85.60/reportsapi';
export const AUTH_BASIC_URL = '//123.59.85.60/authsysapi';

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
			// 200 表示成功  
			// 300表示失败 
			// 400 表示异常
			// 1001登陆失败
			// 1002 会话超时
			// 1003 无权访问
			// 2001 文件上传成功
			// 2002 文件上传失败
			// 2003 文件上传异常
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

/**
 * post方法
 * @param  {[type]} url  url拼接
 * @param  {[type]} data 参数
 * @return {[type]}      [description]
 */
let POST = async (url, data) => {
	return fetch(url.indexOf('//') > -1 ? url : BASIC_URL + url, {
		method: 'POST',
		body: data,
	}).then(res => {
		if (res) {
            switch (res.code) {
            	case '1003':
            		message.warning('您没有权限，请联系管理员。');
            		break;
            	case '300':
            		message.error('服务器出错了，请稍候再重试。');
            		break;
            	default:
            		return res
            }
		}
	})
}

export {
	J,
	axios,
	POST
}
