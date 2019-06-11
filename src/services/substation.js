import request from '../utils/request';

export function querySubstations() {
	return request('/api/substations');
}

export function queryDeals() {
	return request('/api/deals');
}
