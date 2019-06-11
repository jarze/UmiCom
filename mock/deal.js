import mockjs from 'mockjs';
export default {
	'/api/deals': mockjs.mock({
		'list|100': [{
			'id|+1': 1,
			'reason': '高峰期',
			'type': '橙色预警',
			'plan_time': '',
			'publish_time': '',
			'all_need|5': [{
				'station': 'xx1变电站',
				'zhubian': '主变1',
				'line': 'xxx线',
				'customer': '的俄方客户',
				'need': '135KW',
				'high': '15000',
				'plan_high': '16000',
				'change': '-100'
			}],
			'response': ''
		}]
	}),
}
