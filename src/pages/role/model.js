import api from './service';
import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { Slider } from 'antd';

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
			dispatch({ type: 'getSliderBar'})
			dispatch({ 
				type: 'getRole',
				payload: ''
			})
		}
	},

	effects: {
		*getSliderBar({ payload }, { put, select }) {
			const { siderList } = yield select(state => state.app);
			yield put({
				type: 'save',
				payload: {
					siderList
				}
			})
		},

		*getRole({ payload }, { call, put, select }) {
			const { siderList } = yield select(state => state.app)
            const res = yield call(api.getRole, payload);
			if (res.data.code == 0) {
				yield put({
					type: 'save', 
					payload: {
						tableData: (res.data) ? res.data.data : []
					}
				})
			} else {
				message.error(res.data.message);
			}
		},
		
		*addRole({ payload }, { call }) {
			const res = yield call(api.addRole, payload);
			if (res.data.code == 0) {
				message.success(res.data.message);
			} else {
				message.error(res.data.message);
			}
		},

		*deleteRole({ payload }, { call, select, put }) {
			const { tableData } = yield select(state => state.roleSetting);
			const res = yield call(api.deleteRole, payload);
			if (res.data.code == 0) {
				message.success(res.data.message);
				yield put({
					type: 'save',
					payload: {
						tableData: tableData.filter(e => e.id !== payload)
					}
				})
			} else {
				message.error(res.data.message);
			}
		},

		*setauthRole({ payload }, { call }) {
			const res = yield call(api.setauthRole, payload);
			if (res.data.code == 0) {
				message.success(res.data.message);
			} else {
				message.error(res.data.message);
			}
		},

		*menusRole({ payload }, { call }) {
			const res = yield call(api.menusRole, payload);
			if (res.data.code == 0) {
				message.success(res.data.message);
			} else {
				message.error(res.data.message);
			}
		},

		*setaccount({ payload }, { put }) {
			yield put({
				type: 'save',
				payload: {
					account: payload
				}
			})
		},

		
		*setMenuids({ payload }, { put }) {
			yield put({
				type: 'save',
				payload: {
					menuIds: payload
				}
			})
		},

		*changeModal({ payload }, { put }) {
			yield put({
				type: 'save',
				payload: {
					modalShow: payload
				}
			})
		}
	},

	reducers: {
		save(state, { payload }) {
			return { ...state, ...payload }
		}
	},
};
	