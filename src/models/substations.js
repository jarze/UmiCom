import { querySubstations } from '../services/substation';

export default {
	namespace: 'substations',

	state: {
		substationLists: [],
		curSubstation: {}
	},

	effects: {
		*fetchData({ payload }, { call, put }) {
			let data = yield call(querySubstations);
			yield put({
				type: 'querySuccess',
				payload: { 'substationLists': data.data }
			});
		}

	},
	reducers: {
		querySuccess(state, action) {
			return { ...state, ...action.payload };
		}
	}
}