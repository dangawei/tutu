import api_Daily from './service';

export default {
	namespace: "Daily",

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
	