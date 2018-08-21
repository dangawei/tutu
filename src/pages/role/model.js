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
		menuIds: []   // 授权菜单
	},

	subscriptions: {
		setup({ dispatch, history }) {
			dispatch({ 
				type: 'getRole',
				payload: ''
			})
		}
	},

	effects: {
		*getSliderBar({ payload }, { call, put }) {
			const res = yield call(api_authmenu.getMenu, {
				pageNum: 1,
				pageSize: 10
			});
			yield put({
				type: 'save',
				payload: {
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
				yield put({
					type: 'getRole',
					payload: ''
				})
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

		*setauthRole({ payload }, { call }) {
			const res = yield call(api.setauthRole, payload);
			res && message.success(res.data.message);
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
	