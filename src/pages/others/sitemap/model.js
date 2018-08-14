import { routes } from '@/configs/pages.js';

export default {
	namespace: "sitemap",

	state: {
		pages: []
	},

	subscriptions: {
		setup({ dispatch, history }) {
			if(history.location.pathname === '/sitemap') {
				var routesGroup = {};

				routes.map(item => {
					var prtRoute = item.url.split('/').slice(0, 3).join('/')+'/';
					if(!routesGroup[prtRoute]) {
						routesGroup[prtRoute] = {
							category: `${item.name1}-${item.name2}-${item.name3}`,
							list: []
						}
					}
					routesGroup[prtRoute] && routesGroup[prtRoute].list.push({
						cname: `${item.cname}`,
						url: item.url
					})
				})

				let routeArr = []


				for (let k in routesGroup) {
					routeArr.push({
						perPath: k,
						category: routesGroup[k].category.replace(/(^-*)|(-*$)/g, ''),
						list: routesGroup[k].list
					})
				}

				dispatch({
					type: 'save',
					payload: {
						pages: routeArr
					}
				})
			}
		},
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
	