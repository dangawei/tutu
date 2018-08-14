import api_VersionUpgrade from './service';

export default {
	namespace: "VersionUpgrade",

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
	