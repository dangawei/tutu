import api_authority from './service';
import { message } from 'antd'

/**
 * 根据id查找节点id 及父节点id
 * @param  {[type]} data [description]
 * @param  {[type]} id   [description]
 * @return {[type]}      选中节点及父辈节点id集合
 */
const findExpandIds = (data, id) => {
	let result = [];
	let stack = [...JSON.parse(JSON.stringify(data))];

	for (let i = 0; i < stack.length; i++) {
		let item = stack[i];

		if(item.id === id) {
			return (function findParent(d) {
				result.unshift(''+d.id);
				if(d.parent) {
					return findParent(d.parent)
				}
				return result
			})(item)
		}

		if(item.children && item.children.length) {
			stack.push(...item.children.map(d => {
				d.parent = item;
				return d
			}))
		}
	}
	return result;
}

export default {
	namespace: "authority",

	state: {
		// 公用state
		common: {
			activeKey: '1',  // 默认选中tab
		},

		// 用户权限管理
		user: {
			// 表单搜索及列表
			form: {
				username: '',
				realname: '',
				dept: '',
				demo: '',
			},
			deptlist: [],  // 部门列表

			datalist: [],
			total: 0,
			pageInfo: {
				pagesize: 50,
				currentpage: 1,
			},

			// 列表选择 是否可编辑
			showSelect: false,  // 是否展示用户
			userSelect: {},  // 选择的用户信息
			userOldSelect: {},  // 选择的用户信息
			editable: true,    // 用户信息是否可编辑

			// 添加用户
			showAdd: false,  // 添加用户弹窗
			formAdd: {},     // 添加用户表单

			// 密码弹窗
			showPwd: false,   // 显示修改密码弹窗
			formPwd: {},    // 密码表单

			// 按钮切换
			showListType: 'a', // 显示哪个按钮a,b
			aCheckable: false,  // a按钮编辑
			bCheckable: false, // b按钮编辑

			// 权限树
			treeList: [], // 导航树
			treeCheckedKeys: [],  // 已获得权限树

			// 权限组列表
			groupList: [],  // 所有权限组
			groupCheckedList: [],  // 已获得权限组
			groupCheckedKeys: [],   // 已获得权限组keys

			// 报表配置
			showReportConfig: false,  // 显示报表权限配置
			configId: null,   // 配置菜单ID
			configlist: [],   // 配置列表
			configSheet: [],   // 配置项tab
			configField: {},   // 配置栏位
			configData: {},   // 配置参数
		},

		// 报表权限设置
		report: {
			// 表单搜索及列表
			form: {},
			datalist: [],
			total: 0,
			pageInfo: {
				pagesize: 50,
				currentpage: 1,
			},

			showSelect: false, //是否展示用户
			userSelect: {},  // 选择的用户信息

			expandedKeys: [],  // 选择节点展开数组
			treeList: [], // 所有导航树

			// 按钮切换
			showListType: 'a', // 显示哪个按钮a,b
			aCheckable: false,  // a按钮编辑

			// 用户组
			userList: [],  // 用户列表
			userCheckedList: [],  // 选中用户列表
			userCheckedKeys: [],   // 已选中用户keys

			// 权限组列表
			groupList: [],  // 所有权限组
			groupCheckedList: [],  // 已获得权限组
			groupCheckedKeys: [],   // 已获得权限组keys

			// 报表配置
			showReportConfig: false,  // 显示报表权限配置
			configId: null,   // 配置菜单ID
			configlist: [],   // 配置列表
			configSheet: [],   // 配置项tab
			configField: {},   // 配置栏位
			configData: {},   // 配置参数
		},

		// 权限组设置
		group: {
			// 表单搜索及列表
			form: {
				gname: '',
			},
			datalist: [],  // 权限组列表
			total: 0,
			pageInfo: {
				pagesize: 50,
				currentpage: 1,
			},

			// 列表选择 是否可编辑
			showSelect: false,  // 是否展示用户
			userSelect: {},  // 选择的用户信息
			userOldSelect: {},  // 选择的用户信息
			editable: true,    // 用户信息是否可编辑

			// 添加用户
			showAdd: false,  // 添加用户弹窗
			formAdd: {},     // 添加用户表单

			// 按钮切换
			showListType: 'a', // 显示哪个按钮a,b
			aCheckable: false,  // a按钮编辑
			bCheckable: false, // b按钮编辑

			// 权限树
			treeList: [], // 导航树
			treeCheckedKeys: [],  // 已获得权限树

			// 用户组
			userList: [],  // 用户列表
			userCheckedList: [],  // 选中用户列表
			userCheckedKeys: [],   // 已选中用户keys

			showReportConfig: false,  // 显示报表权限配置
			configId: null,   // 配置菜单ID
			configlist: [],   // 配置列表
			configSheet: [],   // 配置项tab
			configField: {},   // 配置栏位
			configData: {},   // 配置参数
		},
	},

	subscriptions: {
		setup({ dispatch, history }) {
			dispatch({ type: 'changeTab' });
		}
	},

	effects: {
		// tab切换
		*changeTab({ payload }, { put, select }) {
			const { common: { activeKey }, user, report, group } = yield select(state => state.authority);
			const key = (payload && payload.key) || activeKey; 

			switch(key) {
				case '2':
					if(!report.datalist.length) {
						yield put({ type: 'getCategorylist' })
					}
					break;
				case '3':
					if(!group.datalist.length) {
						yield put({ type: 'getGrouplist' })
					}
					break;
				default:
					if(!user.datalist.length) {
						yield put({ type: 'fetchUserlist' });
					}
			}
			yield put({
				type: 'save',
				payload: {
					common: { activeKey: key }
				}
			})
		},

		// 公用----获取用户列表
		*fetchUserlist({ payload }, { call, put, select }) {
			const { form, pageInfo } = yield select(state => state.authority.user);
			let f = payload && payload.form || {};
			let p = payload && payload.pageInfo || {};
			const res = yield call(api_authority.userlist, {...form, ...f, ...p});
			yield put({
				type: 'save',
				payload: {
					user: {
						datalist: res.datalist || [],
						total: res.totalrow || 0,
						form: {...form, ...f },
						pageInfo: { ...pageInfo, ...p }
					},
				}
			})

		},

		// 公用----表格行点击
		*updateUserSelect({ payload, stateType = 'user' }, { put, call ,select }) {
			let { userSelect } = yield select(state => state.authority[stateType]);
			yield put({
				type: 'save',
				payload: {
					[stateType]: {
						showSelect: true,
						userSelect: {...userSelect, ...payload},
						userOldSelect: {...userSelect, ...payload},
						showReportConfig: false
					}
				}
			})
			if(stateType === 'user') {
				yield put({ type: 'getCategoryTree', stateType})
				yield put({ type: 'getUsercategoryGroup' })
			} else if(stateType === 'group') {
				yield put({ type: 'getGroupWithUser' })
				yield put({ type: 'getCategoryTree', stateType })
			} else if(stateType === 'report') {
				yield put({ type: 'getCategoryWithUser' })
				yield put({ type: 'getCategoryWithGroup' })
				let { treeList } = yield select(state => state.authority[stateType]);
				if(!treeList.length) {
					yield put({ type: 'getAllCategory', stateType })
				}
			}
		},

		// 公用----按钮组切换
		*handleRadioChange({ payload, stateType = 'user' }, { put, select }) {
			yield put({
				type: 'save',
				payload: {
					[stateType]: {
						showListType: payload,
					}
				}
			})
		},

		// 公用----信息修改
		*editUser({ payload, stateType = 'user' }, { put, select, call }) {
			let { editable, userSelect, userOldSelect } = yield select(state => state.authority[stateType]);
			let isOk = payload && payload.editType === 'ok';

			let newObj = {
				editable: Boolean(payload && payload.editType),
				userSelect: userOldSelect
			}

			// 提交修改
			if(payload && payload.editType === 'ok') {
				let res;
				if(stateType === 'user') {
					res = yield call(api_authority.updateUser, userSelect);
				} else if (stateType === 'group') {
					res = yield call(api_authority.updateGroup, userSelect);
				}
				if(res.code === 200) {
					newObj.userSelect = userSelect;
					newObj.userOldSelect = userSelect;
					yield put({ type: stateType === 'user' ? 'fetchUserlist' : 'getGrouplist' });
				}
			}

			yield put({
				type: 'save',
				payload: {
					[stateType]: newObj
				}
			})
		},

		// 公用----启用/禁用用户或者分组
		*setAuthority({ stateType = 'user' }, { put, select, call }) {
			let { userSelect, userSelect: { id, status } } = yield select(state => state.authority[stateType]);
			const res = yield call(stateType === 'user' ? api_authority.deleteUser : api_authority.deleteGroup, { id, status: ~~!status });
			if(res.code === 200) {
				message.success(status ? '禁用成功' : '启用成功');
				yield put({
					type: 'save',
					payload: {
						[stateType]: {
							userSelect: { ...userSelect, status:  ~~!status }
						}
					}
				})
				yield put({ type: stateType === 'user' ? 'fetchUserlist' : 'getGrouplist' });
			}

		},

		// 公用----清空权限
		*clearAuthority({ stateType = 'user' }, { call, select, put }) {
			let { userSelect: { id } } = yield select(state => state.authority[stateType]);
			const res = yield call(api_authority.clearAuthority, { id });
			if(res.code === 200) {
				message.success('清空权限成功');
				if(stateType === 'user') {
					yield put({ type: 'getCategoryTree', stateType})
					yield put({ type: 'getUsercategoryGroup' })
				} else if(stateType === 'group') {
					yield put({ type: 'getGroupWithUser' })
					yield put({ type: 'getCategoryTree', stateType })
				}
			}
		},

		// user----修改密码
		*togglePwdModal({ actionType }, { select, call, put }) {
			const { showPwd, formPwd, userSelect: { id } } = yield select(state => state.authority.user);
			let ns = !showPwd;
			if(actionType === 'ok') {
				if(!formPwd.password || !formPwd.newpassword) {
					message.error('缺少参数');
					return
				}
				const res = yield call(api_authority.modPassword, { id, ...formPwd });

			}
			yield put({
				type: 'save',
				payload: {
					user: {
						showPwd: ns
					}
				}
			})
		},

		// user----修改密码表单
		*changePwdForm({ payload }, { select, put }) {
			const { formPwd } = yield select(state => state.authority.user);
			yield put({
				type: 'save',
				payload: {
					user: {
						formPwd: { ...formPwd, ...payload }
					}
				}
			})
		},

		// 公用----获取权限树 user group
		*getCategoryTree({ payload, stateType }, { put, call, select }) {
			const { userSelect: {id} } = yield select(state => state.authority[stateType]);
			let api = stateType === 'user' ? api_authority.getCategoryTree : api_authority.getCategoryByGroupid;
			const res = yield call(api, { id });
			let datalist = res.datalist || [];

			let keys = [];
			// let filterChecked = stateType === 'group';  // getByGroupid返回均为checked需特殊处理
			const getkey = data => {
				if(data && data.length) {
					data.map(item => {
						if(item.checked && (item.children && !item.children.length)) {
							keys.push(''+item.id)
						}
						getkey(item.children)
					})
				}
			}
			getkey(datalist)
			yield put({
				type: 'save',
				payload: {
					[stateType]: {
						treeList: datalist,
						treeCheckedKeys: keys
					}
				}
			})
		},

		// 公用----设置权限列表信息
		*setCategoryTree({ payload, stateType = 'user' }, { put, select, call }) {
			const { userSelect: { id } } = yield select(state => state.authority[stateType]);
			// 设置用户权限
			// let api = stateType === 'user' ? api_authority.setCategoryTree : api_authority.addCategoryGroup;
			let api = {
				'user': api_authority.setCategoryTree,
				'group': api_authority.addCategoryGroup,
				'report': ''
			}
			const res = yield call(api[stateType], { id, cids: payload.cids.join(',') });

			yield put({ type: 'getCategoryTree', payload: { id }, stateType });
			yield put({ type: 'handleRadioEdit', toggleType: 'hide', stateType });
		},

		// 公用----权限树编辑点击
		*handleAuthorityReport({ payload, stateType = 'user' }, { select, put, call }) {
			const { showReportConfig } = yield select(state => state.authority[stateType]);
			let { id } = payload;
			const res = yield call(api_authority.getConfigList, { id: 12879 })
			const info = yield call(api_authority.getConfigInfo, { id: 12879 })
			yield put({
				type: 'save',
				payload: {
					[stateType]: {
						showReportConfig: true,
						configId: 12879,
						configlist: res.datalist || [],
						configSheet: info.datalist || [],
					}
				}
			})
		},

		// 公用----查看页签可配置栏位
		*reportSheetChange({ payload, stateType = 'user' }, { call, put }) {
			const res = yield call(api_authority.getConfigField, { id: 12879, sheetid: payload });
			yield put({
				type: 'save',
				payload: {
					[stateType]: {
						configField: res
					}
				}
			})
		},

		// 公用----添加配置组
		*addConfig({ payload, stateType = 'user' }, { select, call, put }) {
			const { configId } = yield select(state => state.authority[stateType]);
			const res = yield call(api_authority.addConfig, { categoryid: 12879, cfgname: payload });
			if(res.code === 200) {
				const d = yield call(api_authority.getConfigList, { id: 12879 })			
				yield put({
					type: 'save',
					payload: {
						[stateType]: {
							configlist: d.datalist || [],
						}
					}
				})
			}
		},

		// 公用----删除配置组
		*delConfig({ payload, stateType = 'user' }, { select, call, put }) {
			const { configId } = yield select(state => state.authority[stateType]);
			const res = yield call(api_authority.delConfig, { id: payload });
			console.log(res);
			if(res.code === 200) {
				const d = yield call(api_authority.getConfigList, { id: 12879 })			
				yield put({
					type: 'save',
					payload: {
						[stateType]: {
							configlist: d.datalist || [],
						}
					}
				})
			}
		},

		// 公用----配置保存
		*handleConfigChange({ payload, stateType = 'user' }, { call, put }) {
			console.log(payload);
			const res = yield call(api_authority.saveSysConfig, payload);
			console.log(res);
		},

		// 公用----获取所有组
		*getAllGrouplist({ stateType }, { call, put, select }) {
			let { groupList } = yield select(state => state.authority[stateType]);
			if(!groupList.length) {
				const res = yield call(api_authority.getGrouplist);
				yield put({
					type: 'save',
					payload: {
						[stateType]: {
							groupList: res.datalist || []
						}
					}
				})
			}
		},

		// 公用----获取所有导航
		*getAllCategory({ stateType }, { call, put, select }) {
			let { treeList } = yield select(state => state.authority[stateType]);
			if(!treeList.length) {
				const res = yield call(api_authority.getAllCategory);
				yield put({
					type: 'save',
					payload: {
						[stateType]: {
							treeList: res.datalist || []
						}
					}
				})
			}

			// 如果点击报表配置的目录检索
			if(stateType === 'report') {
				// let { showSelect } = yield select(state => state.authority.report);
				yield put({
					type: 'save',
					payload: {
						report: { showSelect: true }
					}
				})
			}
		},

		// 公用----获取所有用户
		*getAllUserlist({ stateType }, { call, put, select }) {
			let { userList } = yield select(state => state.authority[stateType]);
			if(!userList.length) {
				const res = yield call(api_authority.getAllUserlist);
				yield put({
					type: 'save',
					payload: {
						[stateType]: {
							userList: res.datalist || []
						}
					}
				})
			}
		},

		// 公用----修改按钮点击
		*handleRadioEdit({ toggleType, stateType = 'user' }, { put, select, call }) {
			const { showListType } = yield select(state => state.authority[stateType]);

			// 如果是用户权限管理标签页的点击编辑 无数据则获取
			if(stateType === 'user') {
				yield put({ type: 'getAllGrouplist', stateType });
			}

			// 如果是权限组设置标签页的点击编辑 无数据则获取
			if(stateType === 'group') {
				yield put({ type: 'getAllUserlist', stateType });
				yield put({ type: 'getAllCategory', stateType });
			}

			// 如果是报表权限设置标签页的点击编辑 无数据则获取
			if(stateType === 'report') {
				yield put({ type: 'getAllUserlist', stateType });
				yield put({ type: 'getAllGrouplist', stateType });
			}

			// 展示哪个按钮 关闭报表配置
			yield put({
				type: 'save',
				payload: {
					[stateType]: {
						aCheckable: toggleType === 'show' && showListType === 'a',
						bCheckable: toggleType === 'show' && showListType === 'b',
						showReportConfig: false
					}
				}
			})
		},

		// 公用----取消报表配置修改
		*handleCancelReportConfig({ stateType = 'user' }, { put }) {
			yield put({
				type: 'save',
				payload: {
					[stateType]: {
						showReportConfig: false
					}
				}
			})
		},

		// user----获取用户菜单组权限
		*getUsercategoryGroup({ payload }, { put, call, select }) {
			const { userSelect: {id} } = yield select(state => state.authority.user);
			const res = yield call(api_authority.getUsercategoryGroup, { id });
			let list = res.datalist || [];
			yield put({
				type: 'save',
				payload: {
					user: {
						groupCheckedList: list.length ? list.map(l =>  Object.assign(l, {id: l.groupid})) : [],
						groupCheckedKeys: list.length ? list.map(l => ''+l.groupid) : [],
					}
				}
			})
		},

		// user----设置用户菜单组权限
		*setUsercategoryGroup({ payload }, { put, select, call }) {
			const { userSelect: { id } } = yield select(state => state.authority.user);
			const res = yield call(api_authority.setUsercategoryGroup, { id, gids: payload.gids.join(',') })
			yield put({ type: 'getUsercategoryGroup' })
			yield put({ type: 'handleRadioEdit', toggleType: 'hide', stateType: 'user' })
		},

		// 公用----显示隐藏添加用户弹窗
		*toggleUserModal({ stateType = 'user' }, { put, select }) {
			const { showAdd } = yield select(state => state.authority[stateType])
			yield put({
				type: 'save',
				payload: {
					[stateType]: { showAdd: !showAdd }
				}
			})
		},

		// 公用----弹窗表单更新
		*changeModalForm({ payload, stateType = 'user' }, { put, select }) {
			const { formAdd } = yield select(state => state.authority[stateType]);
			yield put({
				type: 'save',
				payload: {
					[stateType]: {
						formAdd: { ...formAdd, ...payload }
					}
				}
			})
		},

		// 公用----信息更新
		*changeSelectForm({ payload, stateType = 'user' }, { put, select }) {
			const { userSelect } = yield select(state => state.authority[stateType]);
			yield put({
				type: 'save',
				payload: {
					[stateType]: {
						userSelect: { ...userSelect, ...payload }
					}
				}
			})
		},

		// 公用----弹窗表单提交或取消
		*userModelChange({ payload, stateType = 'user' }, { put, call, select }) {
			let action = payload.action;
			const { formAdd } = yield select(state => state.authority[stateType])
			if(action === 'cancel') {
				yield put({
					type: 'save',
					payload: {
						[stateType]: { showAdd: false }
					}
				})
			} else if(action === 'ok') {
				// 参数判断
				if(
					(stateType === 'user' && (!formAdd.username || !formAdd.realname)) ||
					(stateType === 'group' && (!formAdd.gname))
				) {
					message.error('缺少参数')
					return
				}

				// 判断用户是否存在
				if(stateType === 'user') {
					const has = yield call(api_authority.checkUsername, { username: formAdd.username })
					if(has.code === 1004) {
						message.warning('用户已存在')
						return
					}
				}

				// 添加用户或组
				let res;
				if(stateType === 'user') {
					res = yield call(api_authority.addUser, formAdd);
				}  else if(stateType === 'group') {
					res = yield call(api_authority.addGroup, formAdd);
				}
				if(res.code === 200) {
					message.success('添加成功')
					if(stateType === 'user') {
						yield put({ type: 'fetchUserlist' })
					} else if(stateType === 'group') {
						yield put({ type: 'getGrouplist' })
					}
					yield put({
						type: 'save',
						payload: {
							[stateType]: {
								showAdd: false,
								formAdd: {},
							}
						}
					})
				}
			}
		},

		// user----获取部门下拉框
		*getDept({ payload }, { call, select, put }) {
			let { form: { dept } } = yield select(state => state.authority.user);
			const res = yield call(api_authority.getDept, { dept });
			yield put({
				type: 'save',
				payload: {
					user: { deptlist: res.datalist || [] }
				}
			})
		},


		/**
		 * 权限组设置tab
		 */
		// group----获取权限组列表
		*getGrouplist({ payload }, { select, call, put }) {
			const { form, pageInfo } = yield select(state => state.authority.group);
			let f = payload && payload.form || {};
			let p = payload && payload.pageInfo || {};
			const res = yield call(api_authority.getGrouplist, {...form, ...f, ...p});
			yield put({
				type: 'save',
				payload: {
					group: {
						datalist: res.datalist || [],
						total: res.totalrow || 0,
						form: {...form, ...f },
						pageInfo: { ...pageInfo, ...p }
					},
				}
			})
		},

		// group---查看分组下的用户
		*getGroupWithUser({}, { select, call, put }) {
			const { userSelect: { id } } = yield select(state => state.authority.group);
			const res = yield call(api_authority.getGroupWithUser, { id });
			let list = res.datalist || [];
			yield put({
				type: 'save',
				payload: {
					group: {
						userCheckedList: list,
						userCheckedKeys: list.length ? list.map(l => ''+l.id) : [],
					},
				}
			})
		},

		// group----编辑分组下的用户
		*setGroupWithUser({ payload }, { put, select, call }) {
			const { userSelect: { id } } = yield select(state => state.authority.group);
			const res = yield call(api_authority.setGroupWithUser, { groupid: id, userids: payload.userids.join(',') })
			yield put({ type: 'getGroupWithUser' })
			yield put({ type: 'handleRadioEdit', toggleType: 'hide', stateType: 'group' })
		},

		// group----给组添加(编辑)导航菜单
		*addCategoryGroup({ payload }, { put, select, call }){
			// const { userSelect: { id } } = yield select(state => state.authority.group);
			// console.log(payload.userids);
			// const res = yield call(api_authority.setGroupWithUser, { groupid: id, userids: payload.userids.join(',') })
			// yield put({ type: 'getGroupWithUser' })
			// yield put({ type: 'handleRadioEdit', toggleType: 'hide', stateType: 'group' })
		},

		/**
		 * 报表权限设置
		 */
		// report --- 获取菜单列表
		*getCategorylist({ payload }, { select, call, put }) {
			const { form, pageInfo } = yield select(state => state.authority.report);
			let f = payload && payload.form || {};
			let p = payload && payload.pageInfo || {};
			const res = yield call(api_authority.getCategorylist, {...form, ...f, ...p});
			yield put({
				type: 'save',
				payload: {
					report: {
						datalist: res.datalist || [],
						total: res.totalrow || 0,
						form: {...form, ...f },
						pageInfo: { ...pageInfo, ...p }
					},
				}
			})
		},

		// report---- 查看导航菜单关联的用户
		*getCategoryWithUser({ payload }, { select, call, put }) {
			const { userSelect: { id } } = yield select(state => state.authority.report);
			const res = yield call(api_authority.getCategoryWithUser, { id });
			let list = res.datalist || [];
			yield put({
				type: 'save',
				payload: {
					report: {
						userCheckedList: list,
						userCheckedKeys: list.length ? list.map(l => ''+l.id) : [],
					},
				}
			})
		},

		// report----编辑权限下的用户
		*setCategoryWithUser({ payload }, { put, select, call }) {
			const { userSelect: { id }, treeList } = yield select(state => state.authority.report);
			let cids = findExpandIds(treeList, id).join(',');
			const res = yield call(api_authority.setCategoryUser, { cids, userids: payload.userids.join(',') })
			yield put({ type: 'getCategoryWithUser' })
			yield put({ type: 'handleRadioEdit', toggleType: 'hide', stateType: 'report' })
		},

		// report---- 查看导航菜单关联的组
		*getCategoryWithGroup({ payload }, { select, call, put }) {
			const { userSelect: { id } } = yield select(state => state.authority.report);
			const res = yield call(api_authority.getCategoryWithGroup, { id });
			let list = res.datalist || [];
			yield put({
				type: 'save',
				payload: {
					report: {
						groupCheckedList: list,
						groupCheckedKeys: list.length ? list.map(l => ''+l.id) : [],
					},
				}
			})
		},

		// report----编辑权限下的组
		*setCategoryWithGroup({ payload }, { put, select, call }) {
			const { userSelect: { id }, treeList } = yield select(state => state.authority.report);
			let cids = findExpandIds(treeList, id).join(',');
			const res = yield call(api_authority.addGroupCategory, { cids, groupids: payload.gids.join(',') })
			yield put({ type: 'getCategoryWithGroup' })
			yield put({ type: 'handleRadioEdit', toggleType: 'hide', stateType: 'report' })
		},

	},

	reducers: {
		save(state, { payload }) {
			const newState = {
				...state,
				common: { ...state.common, ...payload.common },
				user: { ...state.user, ...payload.user },
				report: { ...state.report, ...payload.report },
				group: { ...state.group, ...payload.group },
			}
			return newState
		}
	},
};
	