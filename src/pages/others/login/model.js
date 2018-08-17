import api from './service';
import { routerRedux } from 'dva/router';
import { message } from 'antd';
import axios from 'axios';

export default {
	namespace: "login",

	state: {
		username: '',
		password: ''
	},
	
	subscriptions: {
		setup({ dispatch, history }) {
			dispatch({ type: 'clearStorage' });
			return history.listen(({ pathname }) => {
				if (pathname === '/loign') {
					dispatch({
						type: 'app/fetch',
						payload: pathname
					})
				}
			});
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
				message.success('token is -->' + res.data.data.token);
				// yield put({type: 'save', payload});
				axios.defaults.headers = {
					'token': res.data.data.token,
					'Content-Type': 'application/json'
				}
				yield put(routerRedux.push('/'));
			} else {
				message.error(res.data.message);
			}
		},
		
		// 进页面先清除localStorage
		*clearStorage({}, {}) {
            localStorage.removeItem('token');
            localStorage.removeItem('account');
			localStorage.removeItem('HAS_LOGIN', false);
			axios.defaults.headers = {
				'token': '',
				'Content-Type': 'application/json'
			}
		}
	},

	reducers: {
		save(state, { payload }) {
			return { ...state, ...payload }
		}
	},
};
	