// import moment from 'moment';
import Warnning from './_components/Warnning/index';
import Status from './_components/Status';
import Response from './_detail/Response';
import { DatePicker } from 'antd';

export const performColumns = [{
	title: '发布时间',
	key: 'publish_time',
	align: 'center',
	width: '20%',
}, {
	title: '计划时间',
	key: 'plan_time',
	align: 'center',
	width: '30%',
}, {
	title: '降负荷原因',
	key: 'reason',
	align: 'center'
}, {
	title: '预警类型',
	key: 'type',
	width: 100,
	render: (text, record) => {
		return <Warnning level={Number(text)} />;
	},
	align: 'center'
}, {
	// 	title: '降负荷总需求（kw）',
	// 	key: 'all_need_1',
	// 	align: 'center'
	// }, {
	title: '需求响应情况',
	key: 'response',
	width: 110,
	render: (text, record) => {
		return (
			<Response record={record}>
				<a>查看详情</a>
			</Response>
		);
	},
	align: 'center'
}];

export const responseColumns = [{
	title: '变电站名称',
	key: 'station',
	align: 'center',
	align: 'center'
}, {
	title: '主变',
	key: 'zhubian',
	align: 'center'
}, {
	title: '线路名称',
	key: 'line',
	columns: { 'line': 'center' }
}, {
	title: '客户名称',
	key: 'customer',
	align: 'center'
}, {
	title: '降负荷需求（kw）',
	key: 'need',
	align: 'center'
}, {
	title: '允许最高负荷',
	key: 'high',
	align: 'center'
}, {
	title: '计划时间最高负荷',
	key: 'plan_high',
	align: 'center'
}, {
	title: '相比需求差值',
	key: 'change',
	align: 'center'
}];

export const demandColumns = [{
	title: '区域',
	key: 'area',
	align: 'center'
}, {
	title: '变电站名称',
	key: 'station',
	align: 'center'
}, {
	title: '主变',
	key: 'zhubian',
	align: 'center'
}, {
	title: '线路名称',
	key: 'line',
	align: 'center'
}, {
	title: '降负荷需求（kw）',
	key: 'need',
	align: 'center'
}, {
	title: '状态',
	key: 'status',
	render: (text, record) => {
		return <Status level={Number(text)} />
	},
	align: 'center'
}];

export const searchProps = {
	items: [{
		title: '公告发布时间',
		key: 'startTime',
		// render: () => {
		// 	return <DatePicker />;
		// },
	}, {
		title: '计划开始时间',
		key: 'endTime',
		render: () => {
			return <DatePicker />;
		},
	}],
	formProps: {
		layout: "inline"
	}
};
