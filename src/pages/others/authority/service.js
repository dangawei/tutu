import { J, axios, AUTH_BASIC_URL } from '@/configs/request';

export default {
	// 2.1 用户列表
	userlist: data => J(AUTH_BASIC_URL + '/user/userlist', data),

	// 2.2 添加用户
	addUser: data => J(AUTH_BASIC_URL + '/user/adduser', data),

	// 2.3 用户去重
	checkUsername: data => J(AUTH_BASIC_URL + '/user/checkusername', data),

	// 2.4 启用/禁用用户
	deleteUser: data => J(AUTH_BASIC_URL + '/user/deleteuser', data),

	// 2.5 更新用户
	updateUser: data => J(AUTH_BASIC_URL + '/user/updateuser', data),

	// 2.6 部门下拉框
	getDept: data => J(AUTH_BASIC_URL + '/user/getdept', data),

	// 2.7 修改用户密码
	modPassword: data => J(AUTH_BASIC_URL + '/user/modpassword', data),
	
	// 2.8 清空用户权限
	clearAuthority: data => J(AUTH_BASIC_URL + '/user/clearauthority', data),

	// 2.9 用户授权-菜单权限
	setCategoryTree: data => axios.post(AUTH_BASIC_URL + '/user/setusercategory', data),

	// 2.10 用户授权-菜单组权限
	setUsercategoryGroup: data => axios.post(AUTH_BASIC_URL + '/user/setusercategorygroup', data),

	// 2.11 获取用户菜单分组权限
	getUsercategoryGroup: data => J(AUTH_BASIC_URL + '/user/getusercategorygroup', data),

	// 2.12 获取所有用户列表
	getAllUserlist: data => J(AUTH_BASIC_URL + '/user/getalluserlist', data),

	// 3.1 导航菜单权限树
	getCategoryTree: data => J(AUTH_BASIC_URL + '/syscategory/getcategorytree', data),

	// 3.2 导航菜单授权
	setUserCategory: data => axios.post(AUTH_BASIC_URL + '/syscategory/setusercategory', data),

	// 3.3 导航菜单列表
	getCategorylist: data => J(AUTH_BASIC_URL + '/syscategory/categorylist', data),

	// 3.4 增加导航菜单
	addCategory: data => J(AUTH_BASIC_URL + '/syscategory/addcategory', data),

	// 3.5 编辑导航菜单
	updateCategory: data => J(AUTH_BASIC_URL + '/syscategory/updatecategory', data),

	// 3.6 导航菜单启用禁用	
	modCategorylist: data => J(AUTH_BASIC_URL + '/syscategory/modcategorystatus', data),

	// 3.7 查看导航菜单树
	getAllCategory: data => J(AUTH_BASIC_URL + '/syscategory/getallcategory', data),

	// 3.8 查看导航菜单关联的用户
	getCategoryWithUser: data => J(AUTH_BASIC_URL + '/sysgroup/getcategorywithuser', data),

	// 3.9 查看导航菜单关联的组
	getCategoryWithGroup: data => J(AUTH_BASIC_URL + '/sysgroup/getcategorywithgroup', data),

	// 3.10 删除关联组导航菜单
	setCategoryUser: data => axios.post(AUTH_BASIC_URL + '/syscategory/setcategory2user', data),

	// 3.11 删除关联导航菜单用户
	addGroupCategory: data => axios.post(AUTH_BASIC_URL + '/sysgroup/addgroup2category', data),

	// 4.1 分组列表
	getGrouplist: data => J(AUTH_BASIC_URL + '/sysgroup/grouplist', data),

	// 4.2 增加分组
	addGroup: data => J(AUTH_BASIC_URL + '/sysgroup/addgroup', data),

	// 4.3 编辑分组
	updateGroup: data => J(AUTH_BASIC_URL + '/sysgroup/updategroup', data),

	// 4.4 启用/禁用分组
	deleteGroup: data => J(AUTH_BASIC_URL + '/sysgroup/deletegroup', data),

	// 4.5 给组添加(编辑)导航菜单
	addCategoryGroup: data => axios.post(AUTH_BASIC_URL + '/sysgroup/addcategory2group', data),
	
	// 4.6 查看分组下的菜单
	getCategoryByGroupid: data => J(AUTH_BASIC_URL + '/sysgroup/getcategorybygroupid', data),

	// 4.7 查看分组下的用户
	getGroupWithUser: data => J(AUTH_BASIC_URL + '/sysgroup/getgroupwithuser', data),

	// 4.8 删除分组下的用户
	setGroupWithUser: data => axios.post(AUTH_BASIC_URL + '/sysgroup/adduser2group', data),
	
	// 5.1 获取报表配置信息
	getConfigList: data => J(AUTH_BASIC_URL + '/sysconfig/configlist', data),

	// 5.2 增加报表可用配置
	addConfig: data => J(AUTH_BASIC_URL + '/sysconfig/addconfig', data),

	// 5.3 查看报表可配置页签
	getConfigInfo: data => J(AUTH_BASIC_URL + '/sysconfig/getconfigsheetbyid', data),

	// 5.4 查看页签可配置栏位
	getConfigField: data => J(AUTH_BASIC_URL + '/sysconfig/getconfigfield', data),

	// 5.5 保存报表属性配置
	saveSysConfig: data => axios.post(AUTH_BASIC_URL + '/sysconfig/savesysconfigdetail', data),

	// 5.6 报表配置栏位列表
	getFieldDic: data => J(AUTH_BASIC_URL + '/sysconfig/getfielddic', data),

	// 5.7 增加报表页签配置
	addSheetConfig: data => J(AUTH_BASIC_URL + '/sysconfig/addsheetconfig', data),

	// 5.8增加报表子页签配置
	addSubsheetConfig: data => J(AUTH_BASIC_URL + '/sysconfig/addsubsheetconfig', data),

	// 5.9 修改报表页签配置
	addSheetConfig: data => J(AUTH_BASIC_URL + '/sysconfig/addsheetconfig', data),

	// 5.10 修改报表子页签配置
	updateSubsheetConfig: data => J(AUTH_BASIC_URL + '/sysconfig/updatesubsheetconfig', data),

	// 5.11 删除报表页签
	delSheetConfig: data => J(AUTH_BASIC_URL + '/sysconfig/delsheetconfig', data),

	// 5.12 删除报表子页签
	delSubsheetConfig: data => J(AUTH_BASIC_URL + '/sysconfig/delsubsheetconfig', data),

	// 5.13 编辑报表可用配置
	updateConfig: data => J(AUTH_BASIC_URL + '/sysconfig/updateconfig', data),

	// 5.14 删除报表可用配置
	delConfig: data => J(AUTH_BASIC_URL + '/sysconfig/delconfig', data),
};
