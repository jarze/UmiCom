import React from 'react';
import styles from './index.css';
import SubstationPop from '../components/SubstationPop';
// import substations from '../../mock/substation/substations.json';
import { connect } from 'dva';

import CTable from '../components/common/CTable';

const Subs = ({
	dispatch,
	data = [],
	deals = []
}) => {

	const getData = () => {
		dispatch({
			type: 'substations/fetchData'
		});
		dispatch({
			type: 'substations/fetchDataDeals'
		});
	};

	// console.log(deals);


	const listItem = [{
		title: '发布时间',
		key: 'publish_time',
		columns: { 'align': 'center' }
	}, {
		title: '计划时间',
		key: 'plan_time',
		columns: { 'align': 'center' }
	}, {
		title: '降负荷原因',
		key: 'reason',
		columns: { 'align': 'center' }
	}, {
		title: '预警类型',
		key: 'type',
		columns: { 'align': 'center' }
	}, {
		// 	title: '降负荷总需求（kw）',
		// 	key: 'all_need_1',
		// 	columns: { 'align': 'center' }
		// }, {
		title: '需求响应情况',
		key: 'response',
		columns: { 'align': 'center' }
	}];

	const listChildrenItem = [{
		title: '变电站名称',
		key: 'station',
		columns: { 'align': 'center' }
	}, {
		title: '主变',
		key: 'zhubian',
		columns: { 'align': 'center' }
	}, {
		title: '线路名称',
		key: 'line',
		columns: { 'line': 'center' }
	}, {
		title: '客户名称',
		key: 'customer',
		columns: { 'align': 'center' }
	}, {
		title: '降负荷需求（kw）',
		key: 'need',
		columns: { 'align': 'center' }
	}, {
		title: '允许最高负荷',
		key: 'high',
		columns: { 'align': 'center' }
	}, {
		title: '计划时间最高负荷',
		key: 'plan_high',
		columns: { 'align': 'center' }
	}, {
		title: '相比需求差值',
		key: 'change',
		columns: { 'align': 'center' }
	}];

	const props = {
		listItem,
		data: deals,
		tbProps: {
			expandedRowRender: (record) => {
				return <CTable listItem={listChildrenItem} data={record.all_need} pagination={false} />
			}
		}
	}


	return (
		<div className={styles.normal}>
			<div className={styles.welcome} />
			<ul className={styles.list}>
				<li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
				<li>
					<a href="https://umijs.org/guide/getting-started.html">
						Getting Started
						</a>
				</li>
			</ul>
			<div onClick={getData}>GetData</div>
			<div>
				<SubstationPop data={data}>
					<a>AAAAA</a>
				</SubstationPop>
			</div>
			<div>
				<CTable {...props} />
			</div>
		</div>
	);
};

export default connect(({ substations }) => ({
	data: substations.substationLists,
	deals: substations.deals,
}))(Subs);
