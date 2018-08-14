/**
 * 登录模块
 */
import { J, AUTH_BASIC_URL } from '@/configs/request';

export default {
	// 登入
	login: data => J('/login/in', data),

	// 登出
	logout: () => J('/qqoauth/loginout'),

	// 权限
	getAuth: () => J('/login/getauth'),

	// 获取左侧导航
	getLeftMenu: data => J('/login/getleftmenu', data),
}
