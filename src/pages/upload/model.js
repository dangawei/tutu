import api from './service';
import { message } from 'antd';

export default {
	namespace: "_upload",

	state: {
	},

	subscriptions: {
	},

	effects: {
		*upload({ payload }, { call }) {
            const res = yield call(api.upload, payload);
            message.success(res.data.message);
		}
	},

	reducers: {
		save(state, { payload }) {
			return { ...state, ...payload }
		}
	},
};
	