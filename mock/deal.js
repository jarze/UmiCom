import mockjs from 'mockjs';
export default {
	'/api/deals/1': mockjs.mock({
		'list|100': [{
			'id|+1': 1,
			'reason': '高峰期',
			'type': '橙色预警',
			'plan_time': '@datetime',
			'publish_time': '@datetime',
			'all_need|5': [{
				'station': 'xx1变电站',
				'zhubian': '主变1',
				'line': '@name 线',
				'customer': '的俄方客户',
				'need': '135KW',
				'high': '15000',
				'plan_high|100-10000': 16000,
				'change|200-500': 100
			}],
			'response': ''
		}]
	}),
	'/api/deals': (req, res) => {
		res.send(mockjs.mock({
			'list|100': [{
				'id|+1': 1,
				'reason': '高峰期',
				'type': '橙色预警',
				'plan_time': '@datetime',
				'publish_time': '@datetime',
				'all_need|5': [{
					'station': 'xx1变电站',
					'zhubian': '主变1',
					'line': '@name 线',
					'customer': '的俄方客户',
					'need': '135KW',
					'high': '15000',
					'plan_high|100-10000': 16000,
					'change|200-500': 100
				}],
				'response': ''
			}]
		}))
	}
}
