import api from './service';
import { message } from 'antd';

export default {
	namespace: "sourcematerial",

	state: {
    startTime: '',
    endTime: '',
<<<<<<< HEAD
    text: '',  // 年级id
=======
    text: '',  // 素材内容
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
    materialList: [], // 素材数据
		modalShow: false,
    modal2Show:false,
		icon: '',//素材图标
    audio:''//素材音频
	},

	subscriptions: {
    setup({ dispatch, history }) {
    	dispatch({
    		type: 'getSource',
    		payload: {
    			pageNum: 1,
    			pageSize: 10
    		}
    	});
    },
	},

	effects: {
		*getSource({ payload }, { call, put }) {
      const res = yield call(api.getSource, payload);
      if (res) {
<<<<<<< HEAD
				console.log(res);
        yield put({
        	type: 'save',
        	payload: {
        		materialList: (res.data.data) ? res.data.data.data: []
=======
        yield put({
        	type: 'save',
        	payload: {
        		materialList: (res.data.data) ? res.data.data.data: [],
						modalShow:false,
						modal2Show:false
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
        	}
        })
      }
    },

    *addSource({ payload }, { call, put }) {
      const res = yield call(api.addSource, payload);
      if (res) {
        message.success(res.data.message);
<<<<<<< HEAD
=======
				this.state.modalShow=false;
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
        yield put({
          type: 'getSource',
          payload: {
            pageNum: 1,
            pageSize: 10
          }
        });
      }
    },

    *deleteSource({ payload }, { call }) {
<<<<<<< HEAD
=======
        console.log(payload);
>>>>>>> bd1d7b16fef4c09e7d8331cc773671042cfe65f5
        const res = yield call(api.deleteSource, payload);
        res && message.success(res.data.message);
    },
    *editSource({ payload }, { call, put }) {
      const res = yield call(api.addSource, payload);
      if (res) {
        message.success(res.data.message);
        yield put({
          type: 'getSource',
          payload: {
            pageNum: 1,
            pageSize: 10
          }
        });
      }
    },

    *setParam({ payload }, { put }) {
			for (let key in payload) {
				yield put({
					type: 'save',
					payload: {
						[key]: payload[key]
					}
				})
			}
		}
  },

	reducers: {
		save(state, { payload }) {
			return { ...state, ...payload }
		}
	},
};
