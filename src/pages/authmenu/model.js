import api from './service';
import { message } from 'antd';

export default {
	namespace: 'authmenu',

	state: {
		tableData: [],
		startTime: '',
		endTime: '',
		modalShow: false
	},

	subscriptions: {
		setup({ dispatch, history }) {	
			dispatch({ 
				type: 'getMenu',
				payload: {
					pageNum: 1,
					pageSize: 10
				}
			});
		},
	},

	effects: {
		*getMenu({ payload }, { call, put }) {
			const res = yield call(api.getMenu, payload);
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
		
		*addMenu({ payload }, { call }) {
			const res = yield call(api.addMenu, payload);
			if (res.data.code == 0) {
				message.success(res.data.message);
			} else {
				message.error(res.data.message);
			}
		},

		*deleteMenu({ payload }, { call, select, put }) {
			const { tableData } = yield select(state => state.authmenu);
			const res = yield call(api.deleteMenu, payload);
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

		*updateMenu({ payload }, { call }) {
			const res = yield call(api.updateMenu, payload);
			if (res.data.code == 0) {
				message.success(res.data.message);
			} else {
				message.error(res.data.message);
			}
		},

		*changeModal({ payload }, { put }) {
			yield put({
				type: 'save',
				payload: {
					modalShow: payload
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
		},
	},

	reducers: {
		save(state, { payload }) {
			return { ...state, ...payload }
		}
	},
};
	