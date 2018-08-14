import api_apprenticeQuality from './service';

import { getFormatDate, getFormatMonth, showTotalOrList } from '@/utils/tools';
import Global from '@/utils/global';
import { routerRedux } from 'dva/router';

export default {
	namespace: "apprenticeQuality",

	state: {
		// 公共state
		common: {
			// 页面权限配置表
			pageConfigs: [],
			// 表单
			form: {
				startDate: getFormatDate(),
				endDate: getFormatDate(),
				accid: Global.Util.getQueryString('accid') || '',
				apptypeid: '',
				mobile: '',
				code: '',
				sortname: '',
				sorttype: '',
				ulevel: '',
				playertype: '',
				player: Global.Util.getQueryString('player') || '',
				usertag: '',
				mastergroup: '',
				pagesize: 50,
				page: 1,
			},

			// 日期区间
			dateInterval: {
				startDate: getFormatDate(-1, -1),
				endDate: getFormatDate(),
			},

			// 周
			weekOptions: [],
			weekDate: {
				startDate: getFormatMonth(),
				endDate: '',
			},

			// 月
			monthDate: {
				startDate: getFormatMonth(),
				endDate: getFormatMonth(),
			},

			// 软件名称
			apptypeidOptions: [],

			// 负责人
			playerOptions: [],

			// 等级
			// ulevelOptions: Array.from(new Array(11).keys()),
			ulevelOptions: [],

			// 徒弟状态
			usertagOptions: [],

			// 师父组
			accOptions: [],

			// 筛选详情
			showDetail: Global.Util.getQueryString('showDetail') === 'true',

			// 选中选项卡
			activeKey: Global.Util.getQueryString('activeKey') || '1'
		},

		// 明细
		detail: {
			// 汇总表
			totalList: [],
			totalConfig: {
				sortname: '',
				sorttype: ''
			},

			// 明细列表
			userDataList: [],
			userDatalTotal: 0,
			listConfig: {
				pagesize: 50,
				page: 1,
				sortname: '',
				sorttype: ''
			},

			// 不展示的列
			filterColumns: ['mark', 'usertag']
		},

		// 按负责人
		player: {
			byplayerDataList: [],
			listConfig: {
				sortname: '',
				sorttype: ''
			},

			// 不展示的列
			filterColumns: []
		},

		// 周报
		week: {
			// 汇总表
			totalList: [],
			totalConfig: {
				sortname: '',
				sorttype: ''
			},

			// 明细列表
			userDataList: [],
			userDatalTotal: 0,
			listConfig: {
				pagesize: 50,
				page: 1,
				sortname: '',
				sorttype: ''
			},

			// 不展示的列
			filterColumns: [],
		},

		// 月报
		month: {
			// 汇总表
			totalList: [],
			totalConfig: {
				sortname: '',
				sorttype: ''
			},

			// 明细列表
			userDataList: [],
			userDatalTotal: 0,
			listConfig: {
				pagesize: 50,
				page: 1,
				sortname: '',
				sorttype: ''
			},

			// 不展示的列
			filterColumns: [],
		},

		// 负责人配置
		playerConfig: {
			selected: null,
			selectedList: [],
			dataList: []
		},

		// 师父组配置
		masterConfig: {
			selected: null,
			selectedList: [],
			dataList: []
		},

		// 报表信息说明
		report: {
			// 时间轴
			timelineData: [],
			desc: ''
		}
	},

	subscriptions: {
		setup({ dispatch, history }) {
			dispatch({ type: 'authConfig' });
			dispatch({ type: 'changeTab' });
		}
	},

	effects: {
		// 页面内权限控制
		*authConfig({ payload }, { call, put }) {
			const data = yield call(api_apprenticeQuality.getAuthConfig, { url: '/dftt/dftt-zq/apprentice-quality' });
			const d = (data.code === '200') ? data.datalist : [];
			const _find = (arr, field, value) => arr.find(e => e[field] === value);
			const _value = (obj={}, key) => key && obj[key] ? obj[key] : [];
			yield put({
				type: 'save',
				payload: {
					common: {
						pageConfigs: d
					},
					detail: {
						filterColumns: _value(_find(d, 'sheet', '明细'), 'column_en')
					},
					player: {
                        filterColumns: _value(_find(d, 'sheet', '按负责人'), 'column_en')
					},
					week: {
						filterColumns: []
					},
					month: {
						filterColumns: []
					}
				}
			})
		},

		// 上传页面配置信息
		*uploadPageConfig({ payload }, { call }) {
			let formData = new FormData()
			for (let key in payload) {
				formData.append(key, payload[key])
			}
			console.log(payload)
			const data = yield call(api_apprenticeQuality.tableconfig, formData)
		},

		// 改变tab
		*changeTab({ payload }, { call, put, select }) {
			const { playerOptions, accOptions, activeKey, showDetail, form: { accid } } = yield select(state => state.apprenticeQuality.common);
			const key = (payload && payload.key) || activeKey;

			// 是否展示汇总或明细列表
			let { showTotal, showList } = showTotalOrList(showDetail, accid);
			switch(key) {
				case '1':
					if(showTotal) {
						yield put({ type: 'fetchTotal'})
					}
					if(showList) {
						yield put({ type: 'fetchByUser'})
					}
					break;
				case '2':
					yield put({ type: 'fetchByplayer'})
					break;
				case '3':
					if(showTotal) {
						yield put({ type: 'fetchWeekTotal'})
					}
					if(showList) {
						yield put({ type: 'fetchWeekByUser'})
					}
					break;
				case '4':
					if(showTotal) {
						yield put({ type: 'fetchMonthTotal'})
					}
					if(showList) {
						yield put({ type: 'fetchMonthByUser'})
					}
					break;
				case '5':
					if(!playerOptions || !playerOptions.length) {
						yield put({type: 'fetchPlayer'})
					}
					break;
				case '6':
					if(!accOptions || !accOptions.length) {
						yield put({type: 'fetchAcc'})
					}
					break;
			}
			yield put({
				type: 'save',
				payload: {
					common: {
						activeKey: key
					}
				}
			})
		},

		// 获取汇总列表
		*fetchTotal({ payload }, { call, put, select }) {
			const { form, showDetail, dateInterval } = yield select(state => state.apprenticeQuality.common);
			const totalConfig = yield select(state => state.apprenticeQuality.detail.totalConfig);

			let data = {...form, ...totalConfig, ...payload};
			// 如果看详情使用区间时间
			if(showDetail) {
				data = {...data, ...dateInterval}
			}
			const res = yield call(api_apprenticeQuality.getQualityTotal, data);

			yield put({
				type: 'save',
				payload: {
					detail: {
						totalList: res.datalist,
						totalConfig: {...totalConfig, ...payload}
					}
				}
			})
		},

		// 用户明细列表
		*fetchByUser({ payload }, { call, put, select }) {
			const { form, showDetail, dateInterval } = yield select(state => state.apprenticeQuality.common);
			const listConfig = yield select(state => state.apprenticeQuality.detail.listConfig);

			let data = {...form, ...listConfig, ...payload};
			// 如果看详情使用区间时间
			if(showDetail) {
				data = {...data, ...dateInterval}
			}
			const res = yield call(api_apprenticeQuality.getQualityByuser, data);

			yield put({
				type: 'save',
				payload: {
					detail: {
						userDataList: res.datalist,
						userDatalTotal: res.pagecount,
						listConfig: {...listConfig, ...payload}
					}
				}
			})
		},

		// 表单数据更新
		*changeForm({ payload, formType, fetchData }, { put, select }) {
			const common = yield select(state => state.apprenticeQuality.common);
			yield put({
				type: 'save',
				payload: {
					common: {
						[formType]: {...common[formType], ...payload}
					}
				}
			})
			if(fetchData) {
				yield put({ type: 'updateList', updateAll: true })
			}
		},


		// 更新列表数据 updateAll: 表单更新汇总和列表， updateType：更新汇总或列表，
		*updateList({ payload, updateAll, updateType }, { put, select }) {
			const { showDetail, form: { accid }, activeKey } = yield select(state => state.apprenticeQuality.common);
			let { showTotal, showList } = showTotalOrList(showDetail, accid);

			switch(activeKey) {
				case '1':
					if(showTotal && (updateAll || updateType === 'total')) {
						yield put({ type: 'fetchTotal', payload})
					}
					if(showList && (updateAll || updateType === 'list')) {
						yield put({ type: 'fetchByUser', payload})
					}
					break;
				case '2':
					yield put({type: 'fetchByplayer', payload})
					break;
				case '3':
					if(showTotal && (updateAll || updateType === 'total')) {
						yield put({type: 'fetchWeekTotal', payload})
					}
					if(showList && (updateAll || updateType === 'list')) {
						yield put({type: 'fetchWeekByUser', payload})
					}
					break;
				case '4':
					if(showTotal && (updateAll || updateType === 'total')) {
						yield put({type: 'fetchMonthTotal', payload})
					}
					if(showList && (updateAll || updateType === 'list')) {
						yield put({type: 'fetchMonthByUser', payload})
					}
					break;
			}
		},

		// 软件名称列表
		*fetchApptypeid({ payload }, { put, select, call }) {
			const dateInterval = yield select( state => state.apprenticeQuality.common.dateInterval )
			const res = yield call(api_apprenticeQuality.getApptypeidList, dateInterval)
			yield put({
				type: 'save',
				payload: {
					common: {
						apptypeidOptions: res.datalist || []
					}
				}
			})
		},

		// 负责人列表
		*fetchPlayer({ payload }, { put, select, call }) {
			const dateInterval = yield select( state => state.apprenticeQuality.common.dateInterval )
			const res = yield call(api_apprenticeQuality.getPlayerList, dateInterval)
			yield put({
				type: 'save',
				payload: {
					common: {
						playerOptions: res.datalist || []
					}
				}
			})
		},

		// 等级列表
		*fetchUlevel({ payload }, { put, select, call }) {
			const dateInterval = yield select( state => state.apprenticeQuality.common.dateInterval )
			const res = yield call(api_apprenticeQuality.getUlevelList, dateInterval)
			yield put({
				type: 'save',
				payload: {
					common: {
						ulevelOptions: res.datalist || []
					}
				}
			})
		},

		// 徒弟状态列表
		*fetchUsertag({ payload }, { put, select, call }) {
			const dateInterval = yield select( state => state.apprenticeQuality.common.dateInterval )
			const res = yield call(api_apprenticeQuality.getUsertagList, dateInterval)
			yield put({
				type: 'save',
				payload: {
					common: {
						usertagOptions: res.datalist || []
					}
				}
			})
		},

		// 师父组列表
		*fetchAcc({ payload }, { put, select, call }) {
			const dateInterval = yield select( state => state.apprenticeQuality.common.dateInterval )
			const res = yield call(api_apprenticeQuality.getAccList, dateInterval)
			yield put({
				type: 'save',
				payload: {
					common: {
						accOptions: res.datalist || []
					}
				}
			})
		},

		// 周数列表
		*fetchWeek({ payload }, { put, select, call }) {
			const res = yield call(api_apprenticeQuality.getWeekList)
			yield put({
				type: 'save',
				payload: {
					common: {
						weekOptions: res.datalist || []
					}
				}
			})
		},

		// 按负责人列表
		*fetchByplayer({ payload }, { call, put, select }) {
			const { form, showDetail, dateInterval } = yield select(state => state.apprenticeQuality.common);
			const listConfig = yield select(state => state.apprenticeQuality.player.listConfig);

			let data = {...form, ...listConfig, ...payload};
			// 如果看详情使用区间时间
			if(showDetail) {
				data = {...form, ...dateInterval}
			}

			const res = yield call(api_apprenticeQuality.getQualityByplayer, data)
			yield put({
				type: 'save',
				payload: {
					player: {
						byplayerDataList: res.datalist,
						listConfig: {...listConfig, ...payload}
					}
				}
			})
		},

		// 周报--获取汇总列表
		*fetchWeekTotal({ payload }, { call, put, select }) {
			const { form, weekDate } = yield select(state => state.apprenticeQuality.common);
			const totalConfig = yield select(state => state.apprenticeQuality.week.totalConfig);

			let data = {...form, ...weekDate, ...totalConfig, ...payload};
			const res = yield call(api_apprenticeQuality.getQualityByweekTotal, data);

			yield put({
				type: 'save',
				payload: {
					week: {
						totalList: res.datalist,
						totalConfig: {...totalConfig, ...payload}
					}
				}
			})
		},

		// 周报--用户明细列表
		*fetchWeekByUser({ payload }, { call, put, select }) {
			const { form, weekDate } = yield select(state => state.apprenticeQuality.common);
			const listConfig = yield select(state => state.apprenticeQuality.week.listConfig);

			let data = {...form, ...weekDate, ...listConfig, ...payload};
			const res = yield call(api_apprenticeQuality.getQualityByweekByuser, data);

			yield put({
				type: 'save',
				payload: {
					week: {
						userDataList: res.datalist,
						userDatalTotal: res.pagecount,
						listConfig: {...listConfig, ...payload}
					}
				}
			})
		},

		// 月报--获取汇总列表
		*fetchMonthTotal({ payload }, { call, put, select }) {
			const { form, monthDate } = yield select(state => state.apprenticeQuality.common);
			const totalConfig = yield select(state => state.apprenticeQuality.month.totalConfig);

			let data = {...form, ...monthDate, ...totalConfig, ...payload};
			const res = yield call(api_apprenticeQuality.getQualityBymonthTotal, data);

			yield put({
				type: 'save',
				payload: {
					month: {
						totalList: res.datalist,
						totalConfig: {...totalConfig, ...payload}
					}
				}
			})
		},

		// 月报--用户明细列表
		*fetchMonthByUser({ payload }, { call, put, select }) {
			const { form, monthDate } = yield select(state => state.apprenticeQuality.common);
			const listConfig = yield select(state => state.apprenticeQuality.month.listConfig);

			let data = {...form, ...monthDate, ...listConfig, ...payload};
			const res = yield call(api_apprenticeQuality.getQualityByweekByuser, data);

			yield put({
				type: 'save',
				payload: {
					month: {
						userDataList: res.datalist,
						userDatalTotal: res.pagecount,
						listConfig: {...listConfig, ...payload}
					}
				}
			})
		},

		// 负责人邀请码
		*fetchPlayerCodeid({ payload, selectKey }, { call, put }) {
			const res = yield call(api_apprenticeQuality.getPlayercodeList, payload);
			yield put({
				type: 'save',
				payload: {
					playerConfig: {
						dataList: res.datalist,
						selected: selectKey
					}
				}
			})
		},

		// 师父组ID
		*fetchMasterid({ payload, selectKey }, { call, put }) {
			const res = yield call(api_apprenticeQuality.getQidList, payload);
			yield put({
				type: 'save',
				payload: {
					masterConfig: {
						dataList: res.datalist,
						selected: selectKey
					}
				}
			})
		},

		// 修改备注
		*modMark({ payload }, { call, ...others }) {
			return yield call(api_apprenticeQuality.modMark, payload);
		},

		// 修改师父级别
		*modUlevel({ payload }, { call, put }) {
			return yield call(api_apprenticeQuality.modUlevel, payload)
		},

		// 过滤列
		*filterColumns({ payload }, { put }) {
			yield put({
				type: 'save',
				payload: {
					[payload.tab]: {
						filterColumns: payload.filterColumns
					}
				}
			})
		},
	},

	reducers: {
		// 更新state
		save(state, { payload }) {
			const newState = {
				...state,
				common: { ...state.common, ...payload.common },
				detail: { ...state.detail, ...payload.detail },
				player: { ...state.player, ...payload.player },
				week: { ...state.week, ...payload.week },
				month: { ...state.month, ...payload.month },
				playerConfig: { ...state.playerConfig, ...payload.playerConfig },
				masterConfig: { ...state.masterConfig, ...payload.masterConfig },
				report: { ...state.report, ...payload.report },
			}
			return newState
		}
	},
};
	