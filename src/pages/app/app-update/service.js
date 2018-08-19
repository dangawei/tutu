/**
 * App、版本控制模块
 */
import { axios } from '@/configs/request';

export default {
	// App列表
    getApptype: data => axios.post('app/type/list', data),
    
    // 版本列表
    getVertype: data => axios.post('app/version/list', data),

	// 添加角色
	addRole: data => axios.post('role/add', data),

	// 删除角色
	deleteRole: data => axios.post('role/delete', data),

	// 角色已有权限
	menusRole: data => axios.post('role/menus', data),

	// 设置角色权限
	setauthRole: data => axios.post('role/setAuthority', data)
}
