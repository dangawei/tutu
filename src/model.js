// import { fromJS, toJS } from 'immutable';

import axios from 'axios';
import { routes } from './configs/pages';
import { routerRedux } from 'dva/router';
import { message } from 'antd';
import api_login from '@/pages/others/login/service';
import api_role from '@/pages/role/service';
import layoutConfig from '@/configs/layout';

function getMenuList() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(layoutConfig.datalist)
		}, 500);
	})
}

export default {
	namespace: 'app',

	state: {
		showSider: false,    // 移动端显示左侧导航
		collapsed: localStorage.getItem('collapsed') === 'true',    // 是否收缩导航
		dataIndex: 0,        // 顶部一级导航
		dataSubindex: 0,     // 顶部二级导航
		datalist: [],        // 所有导航
		siderList: [],       // 左侧导航
		breadCrumd: {},      // 面包屑
		historyList: [],     // 历史导航
		redirectUrl: '/',    // 登录后跳转页面
	},

	subscriptions: {
		setup({ dispatch, history }) {
			const hash = window.location.hash;
			if (hash && hash !== '#/login') {
				dispatch({
					type: 'app/fetch'
				})
			}
		},
	},

	effects: {
		// 获取所有导航
		*fetch({ payload }, { call, put, select }) {
			const res = yield call(api_role.menusRole);
			let authMenu = [];
			if (res) {
                authMenu = res.data.data;
			} else {
                yield put(routerRedux.push('/login'));
			}
			const datalist = yield call(getMenuList);
			yield put({
				type: 'save',
				payload: {
					datalist: datalist,
					siderList: datalist.concat(authMenu),
				}
			});
		},

		// 渲染面包屑
		*renderBread({ payload }, { put, select }) {
			const datalist = yield select(state => state.app.datalist);

			let b = {}
			routes.map(item => {
				if(item.url == payload) {
					b = item
					return
				}
			})

			yield put({
				type: 'save',
				payload: {
					breadCrumd: b
				}
			});

		},

		// 切换导航
		*change({ payload }, { put, select }) {
			const datalist = yield select(state => state.app.datalist);
			yield put({
				type: 'save',
				payload: {
					siderList: datalist[payload.dataIndex].children[payload.dataSubindex].children,
					dataIndex: payload.dataIndex,
					dataSubindex: payload.dataSubindex,
				}
			});
		},

		// 展开收缩导航
		*collapse({ payload }, { put, select }) {
			const collapsed = yield select(state => state.app.collapsed);
			yield put({
				type: 'save',
				payload: {
					collapsed: !collapsed
				}
			})
			localStorage.setItem('collapsed', !collapsed)
		},

		// 移动显示隐藏导航
		*toggle({ payload }, { put, select }) {
			const showSider = yield select(state => state.app.showSider);
			yield put({
				type: 'save',
				payload: {
					collapsed: false,
					showSider: !showSider
				}
			})
		},
		
		// 退出登录
		*loginout({}, { call, put }) {
			const res = yield call(api_login.logout);
			if (res) {
				localStorage.removeItem('token');
				localStorage.removeItem('account');
				localStorage.removeItem('HAS_LOGIN');
				axios.defaults.headers = { 'token': '' };
				yield put(routerRedux.push('/login'));
			}
		},

		// 保存登录后跳转页面
		*redirect({}, { put }) {
			let href = window.location.href;
			yield put({
				type: 'save',
				payload: {
					redirectUrl: href.indexOf('/login')> -1 ? '/' : href,
				}
			});
			yield put(routerRedux.push('/login'));
		},

		// 添加历史导航
		*historyNavsAdd({ payload }, { select, put }) {
			const his = yield select(state => state.app.historyList);
			let arr = Array.from(new Set([...his, payload]));
			let obj = {};
			const max_length = 15;
			arr = arr.reduce((item, next) => {
				obj[next.key] ? '' : obj[next.key] = true && item.push(next);
				return item;
			}, []);
			if(arr.length > max_length) {
				arr = arr.slice(arr.length - max_length)
			}

			yield put({
				type: 'save',
				payload: {
					historyList: arr
				}
			})
		},

		// 删除历史导航
		*historyNavsRemove({ payload }, { select, put }) {
			const his = yield select(state => state.app.historyList);
			yield put({
				type: 'save',
				payload: {
					historyList: his.filter(e => e.key !== payload.targetKey)
				}
			})
		}
	},

	reducers: {
		save(state, { payload }) {
			return { ...state, ...payload }
		}
	},

};
