import api from './service';
import api_authmenu from '@/pages/authmenu/service';
import { message } from 'antd';

export default {
	namespace: 'roleSetting',

	state: {
		tableData: [],
		account: '',
		modalShow: false,
		siderList: [],
<<<<<<< HEAD
		menuIds: []   // 授权菜单
=======
		menuIds: [],   // 授权菜单
		defaultCheckedKeys: [],  // 权限树默认选中
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
	},

	subscriptions: {
		setup({ dispatch, history }) {
<<<<<<< HEAD
			dispatch({ 
				type: 'getRole',
				payload: ''
			})
=======
			dispatch({ type: 'getRole' })
			dispatch({ type: 'getSliderBar' })
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
		}
	},

	effects: {
<<<<<<< HEAD
		*getSliderBar({ payload }, { call, put }) {
=======
		*getSliderBar({ payload }, { call, put, select }) {
			const { siderList } = yield select(state => state.app);
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
			const res = yield call(api_authmenu.getMenu, {
				pageNum: 1,
				pageSize: 10
			});
			yield put({
				type: 'save',
				payload: {
<<<<<<< HEAD
=======
					defaultCheckedKeys: siderList.map(e => e.id + ''),
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
					siderList: (res.data.data) ? res.data.data.data : []
				}
			});
		},

		*getRole({ payload }, { call, put, select }) {
			const res = yield call(api.getRole, payload);
			if (res) {
				yield put({
					type: 'save',
					payload: {
						tableData: (res.data) ? res.data.data : []
					}
				})
			}
		},
		
		*addRole({ payload }, { call, put }) {
			const res = yield call(api.addRole, payload);
			if (res) {
				message.success(res.data.message);
<<<<<<< HEAD
				yield put({
					type: 'getRole',
					payload: ''
				})
=======
				yield put({ type: 'getRole' });
				yield put({ 
					type: 'setParam',
					payload: {
						modalShow: false
					}
				 });
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
			}
		},

		*deleteRole({ payload }, { call, select, put }) {
			const { tableData } = yield select(state => state.roleSetting);
			const res = yield call(api.deleteRole, payload);
			if (res) {
				message.success(res.data.message);
				yield put({
					type: 'save',
					payload: {
						tableData: tableData.filter(e => e.id !== payload)
					}
				})
			}
		},

<<<<<<< HEAD
		*setauthRole({ payload }, { call }) {
			const res = yield call(api.setauthRole, payload);
			res && message.success(res.data.message);
=======
		*setauthRole({ payload }, { call, put }) {
			const res = yield call(api.setauthRole, payload);
			if (res) {
				yield put({ type: 'app/fetch' });
				message.success(res.data.message);
			}
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
		},

		*menusRole({ payload }, { call }) {
			const res = yield call(api.menusRole, payload);
			res && message.success(res.data.message);
		},

		*setParam({ payload }, { put }) {
			for (let key in payload) {
				yield put({
					type: 'save',
					payload: {
						[key]: payload[key]
					}
				})
			}
		}
	},

	reducers: {
		save(state, { payload }) {
			return { ...state, ...payload }
		}
	},
};
	