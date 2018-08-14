import api_BindingShow from './service';

export default {
	namespace: "BindingShow",

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
	