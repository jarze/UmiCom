import { querySubstations, queryDeals } from '../services/substation';

export default {
	namespace: 'substations',

	state: {
		substationLists: [],
		curSubstation: {},
		deals: []
	},

	effects: {
		*fetchData({ payload }, { call, put }) {
			let data = yield call(querySubstations);
			yield put({
				type: 'querySuccess',
				payload: { 'substationLists': data.data }
			});
		},
		*fetchDataDeals({ payload }, { call, put }) {
			let data = yield call(queryDeals);
			yield put({
				type: 'querySuccess',
				payload: { 'deals': data.data.list }
			});
		}

	},
	reducers: {
		querySuccess(state, action) {
			return { ...state, ...action.payload };
		}
	}
}
