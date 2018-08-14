import api from './service';
import { routerRedux } from 'dva/router';
import { message } from 'antd';
import Global from '@/utils/global';

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
			const res = yield call(api.login, payload);
			if (res.code == 200) {
				localStorage.setItem('USER_NAME', res.entity.realname);
				localStorage.setItem('USER_CNAME', res.entity.username);
				localStorage.setItem('HAS_LOGIN', true);
				yield call(api.getAuth, { username: res.entity.realname })
				yield put({type: 'save', payload});
				let redirectUrl = yield select(state => state.app.redirectUrl);
				//window.location.replace(redirectUrl)
				yield put(routerRedux.push('/'));
			} else {
				message.error('用户名或密码有误');
			}
		}
	},

	reducers: {
		save(state, { payload }) {
			return { ...state, ...payload }
		}
	},
};
	