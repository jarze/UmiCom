import request from '@utils/request';

export function getData(params) {
	return request('/orderlymanage-demandperform/text');
}

// export function getData(params) {
// 	return request('/orderlymanage-demandperform/text', {
// 		method: 'GET',
// 		body: params || {}
// 	});
// }

/* 导出 */
export function exportData(params) {
	return request('/orderlymanage-demandperform/export', {
		method: 'GET',
		body: params || {}
	});
}

/* 获取需求响应情况 */
export async function getResponseData(params) {
	return request('', {
		method: 'GET',
		body: params || {}
	});
}
