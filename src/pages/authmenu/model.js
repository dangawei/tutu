import api from './service';
import { message } from 'antd';

export default {
	namespace: 'authmenu',

	state: {
		tableData: [],
		account: '',
		modalShow: false
	},

	subscriptions: {
		setup({ dispatch, history }) {	
			// dispatch({ 
			// 	type: 'getMenu',
			// 	payload: ''
			// });
		},
	},

	effects: {
		*getMenu({ payload }, { call, put }) {
            const res = yield call(api.getMenu, payload);
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
		
		*addMenu({ payload }, { call }) {
			const res = yield call(api.addMenu, payload);
			if (res.data.code == 0) {
				message.success(res.data.message);
			} else {
				message.error(res.data.message);
			}
		},

		*deleteMenu({ payload }, { call }) {
			const res = yield call(api.deleteMenu, payload);
			if (res.data.code == 0) {
				message.success(res.data.message);
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
		}
	},

	reducers: {
		save(state, { payload }) {
			return { ...state, ...payload }
		}
	},
};
	