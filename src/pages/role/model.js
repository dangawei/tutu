import api from './service';
import { routerRedux } from 'dva/router';
import { message } from 'antd';

export default {
	namespace: 'roleSetting',

	state: {
		tableData: [],
		account: '',
		modalShow: false
	},

	subscriptions: {
		setup({ dispatch, history }) {	
			dispatch({ 
				type: 'getRole',
				payload: ''
			});
		},
	},

	effects: {
		*getRole({ payload }, { call, put }) {
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

		*deleteRole({ payload }, { call }) {
			const res = yield call(api.deleteRole, payload);
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
	