import api from './service';
import { message } from 'antd';

export default {
	namespace: "deleteLog",

	state: {
	},

	subscriptions: {
	},

	effects: {
		// *upload({ payload }, { call }) {
        //     const res = yield call(api.upload, payload);
        //     if (res.data.code == 0) {
        //     	message.success(res.data.message);
        //     } else {
        //     	message.error(res.data.message);
        //     }
		// }
	},

	reducers: {
		save(state, { payload }) {
			return { ...state, ...payload }
		}
	},
};
	