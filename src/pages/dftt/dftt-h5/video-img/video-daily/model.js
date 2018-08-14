import api_VideoDaily from './service';

export default {
	namespace: "VideoDaily",

	state: {
	},

	subscriptions: {
	},

	effects: {
		*fetch({ payload }, { call, put, select }) {

		},
	},

	reducers: {
		save(state, { payload }) {
			return { ...state, ...payload }
		}
	},
};
	