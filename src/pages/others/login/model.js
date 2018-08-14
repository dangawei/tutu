import api from './service';
import { routerRedux } from 'dva/router';
import { message } from 'antd';

export default {
	namespace: "login",

	state: {
		username: '',
		password: ''
	},

	subscriptions: {
		setup({ dispatch, history }) {
			// dispatch({ type: 'fetch' });
		},
	},

	effects: {
		*login({ payload }, { call, put, select }) {
			const res = yield call(api.login, {
				account: payload.username,
				password: payload.password
			});
			if (res.data.code == 0) {
				localStorage.setItem('token', res.data.data.token);
				localStorage.setItem('account', res.data.data.account);
				localStorage.setItem('HAS_LOGIN', true);
				// yield put({type: 'save', payload});
				yield put(routerRedux.push('/'));
			} else {
				message.error(res.data.message);
			}
		}
	},

	reducers: {
		save(state, { payload }) {
			return { ...state, ...payload }
		}
	},
};
	