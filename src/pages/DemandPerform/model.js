import { getData, exportData } from './service';

export default {
	namespace: 'orderlyManageDemandPerform',
	state: {
		performs: [],
		filterParams: {},
		current: {}
	},
	effects: {
		*fetch({ payload }, { call, put }) {
			const data = yield call(getData, payload);
			yield put({
				type: 'save',
				payload: {
					performs: data,
					filterParams: payload
				},
			});
		},
		*fetchResponseData(_, { call, put }) {
			const data = yield call(getData);
			yield put({
				type: 'save',
				payload: {
					performs: data,
				},
			});
		},
		// 导出
		*export({ payload }, { call, put }) {
			yield call(exportData);

		},
		*exportAll({ payload }, { call, put }) {
			yield call(exportData);

		},
	},

	reducers: {
		save(state, { payload }) {
			return {
				...state,
				...payload,
			};
		},
	},
};
