import api from './service';
import { routerRedux } from 'dva/router';
import { message } from 'antd';
import { Slider } from 'antd';

export default {
	namespace: 'appver',

	state: {
        appList: [],
        verList: [],
        appid: [],
        verid: [],
        app: [],   // app类型
		ver: [],   // 版本类型
		text: '图图App1.1.0版本发布。'
	},

	subscriptions: {
		setup({ dispatch, history }) {	
			dispatch({ type: 'getAppList'})
			// dispatch({ 
			// 	type: 'getRole',
			// 	payload: ''
			// })
		}
	},

	effects: {
		*getAppList({ payload }, { put, select, call }) {
            const res = yield call(api.getApptype);
            console.log('AppList::', res);
			// yield put({
			// 	type: 'save',
			// 	payload: {
			// 		siderList
			// 	}
			// })
		}
	},

	reducers: {
		save(state, { payload }) {
			return { ...state, ...payload }
		}
	},
};
	