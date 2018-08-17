import api from './service';
import { message } from 'antd';

export default {
	namespace: "teachingmanage",

	state: {
        startTime: '',
        endTime: '',
        gradeId: '',  // 年级id
        bookList: [], // 教材数据
        gradeList: [], // 年级数据
		modalShow: false,
		modal2Show: false,
		activeKey: '0'  // 默认书籍
	},

	subscriptions: {
        setup({ dispatch, history }) {	
			dispatch({ 
				type: 'getBook',
				payload: {
					pageNum: 1,
					pageSize: 10
				}
			});
		},
	},

	effects: {
		*getBook({ payload }, { call, put }) {
			const res = yield call(api.getBook, payload);
            if (res.data.code == 0) {
            	yield put({
            		type: 'save',
            		payload: {
            			bookList: (res.data.data) ? res.data.data.data : []
            		}
            	})
            } else {
            	message.error(res.data.message);
            }
        },

        *addBook({ payload }, { call }) {
            const res = yield call(api.addBook, payload);
            if (res.data.code == 0) {
            	message.success(res.data.message);
            } else {
            	message.error(res.data.message);
            }
        },

        *deleteBook({ payload }, { call }) {
            const res = yield call(api.deleteBook, payload);
            if (res.data.code == 0) {
            	message.success(res.data.message);
            } else {
            	message.error(res.data.message);
            }
        },
        
        *getGrade({ payload }, { call, put }) {
            const res = yield call(api.getGrade, payload);
            if (res.data.code == 0) {
            	yield put({
            		type: 'save',
            		payload: {
            			gradeList: (res.data.data) ? res.data.data : []
            		}
            	})
            } else {
            	message.error(res.data.message);
            }
        },
        
        *addGrade({ payload }, { call }) {
            const res = yield call(api.addGrade, payload);
            if (res.data.code == 0) {
            	message.success(res.data.message);
            } else {
            	message.error(res.data.message);
            }
        },

        *updateGrade({ payload }, { call }) {
            const res = yield call(api.updateGrade, payload);
            if (res.data.code == 0) {
            	message.success(res.data.message);
            } else {
            	message.error(res.data.message);
            }
		},
		
		*changeModal({ payload }, { put }) {
			yield put({
				type: 'save',
				payload: {
					[payload.field]: payload.showState
				}
			})
		},

		*settime({ payload }, { put }) {
			yield put({
				type: 'save',
				payload: {
					startTime: payload.startTime,
					endTime: payload.endTime
				}
			})
		},

		*setgradeId({ payload }, { put }) {
			yield put({
				type: 'save',
				payload: {
					gradeId: payload
				}
			})
		},

		*setActiveKey({ payload }, { put }) {
			yield put({
				type: 'save',
				payload: {
					activeKey: payload
				}
			})
		},
	},

	reducers: {
		save(state, { payload }) {
			return { ...state, ...payload }
		}
	},
};
	