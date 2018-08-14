import api from './service';
import { routerRedux } from 'dva/router';
import { message } from 'antd';

export default {
	namespace: 'userSetting',

	state: {
		tableData: [],
		startTime: '',
		endTime: '',
		account: ''
	},

	subscriptions: {
		setup({ dispatch, history }) {	
			dispatch({ 
				type: 'getUser',
				payload: {
					pageNum: 1,
					pageSize: 10
				}
			});
		},
	},

	effects: {
		*getUser({ payload }, { call, put, select }) {
			const res = yield call(api.getUser, payload);
			if (res.data.code == 0) {
				yield put({
					type: 'save', 
					payload: {
						tableData: (res.data.data) ? res.data.data.data : []
					}
				})
			} else {
				message.error(res.data.message);
			}
		},
		
		*addUser({ payload }, { call, put, select }) {
			console.log('payload::', payload)
			const res = yield call(api.addUser, payload);
			if (res.data.code == 0) {
				message.success(res.data.message);
			} else {
				message.error(res.data.message);
			}
		},

		*deleteUser({ payload }, { call }) {
			const res = yield call(api.deleteUser, payload);
			if (res.data.code == 0) {
				message.success(res.data.message);
			} else {
				message.error(res.data.message);
			}
		},

		*forbiddenUser({ payload }, { call }) {
			const res = yield call(api.forbiddenUser, payload);
			if (res.data.code == 0) {
				message.success(res.data.message);
			} else {
				message.error(res.data.message);
			}
		},

		*usingUser({ payload }, { call }) {
			const res = yield call(api.usingUser, payload);
			if (res.data.code == 0) {
				message.success(res.data.message);
			} else {
				message.error(res.data.message);
			}
		},

		*updateUser({ payload }, { call }) {
			const res = yield call(api.updateUser, payload);
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

		*settime({ payload }, { put }) {
			yield put({
				type: 'save',
				payload: {
					startTime: payload.startTime,
					endTime: payload.endTime
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
	