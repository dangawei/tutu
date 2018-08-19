import api from './service';
import { message } from 'antd';

export default {
	namespace: 'userSetting',

	state: {
		tableData: [],
		startTime: '',
		endTime: '',
		account: '',
		modalShow: false
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
		*getUser({ payload }, { call, put }) {
			const res = yield call(api.getUser, payload);
			if (res) {
				yield put({
					type: 'save', 
					payload: {
						tableData: (res.data.data) ? res.data.data.data : []
					}
				})
			}
		},
		
		*addUser({ payload }, { call, put }) {
			const res = yield call(api.addUser, payload);
			if (res) {
				message.success(res.data.message);
				yield put({
					type: 'getUser',
					payload: {
						pageNum: 1,
						pageSize: 10
					}
				})
			}
		},

		*deleteUser({ payload }, { call, select, put }) {
			const { tableData } = yield select(state => state.userSetting);
			const res = yield call(api.deleteUser, payload);
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

		*forbiddenUser({ payload }, { call }) {
			const res = yield call(api.forbiddenUser, payload);
			res && message.success(res.data.message);
		},

		*usingUser({ payload }, { call }) {
			const res = yield call(api.usingUser, payload);
			res && message.success(res.data.message);
		},

		*updateUser({ payload }, { call }) {
			const res = yield call(api.updateUser, payload);
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
	