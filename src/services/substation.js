import request from '../utils/request';

export function querySubstations() {
	return request('/api/substations');
}
