import React from 'react';
import { Table } from 'antd';
import moment from 'moment';
// import Item from './CTbItem';

const CTbItem = ({
	type = "",
	value
}) => {
	if (type && type.indexOf('unix_time') >= 0) {
		if (type.indexOf('utc') >= 0) {
			return (value && Number(value) ? moment(value, 'X').utc().format('YYYY-MM-DD HH:mm:ss') : value);
		}
		return (value && Number(value) ? moment(value, 'X').format('YYYY-MM-DD HH:mm:ss') : value);
	}
	return <>{value}</>;
};


const CTable = ({
	listItem,
	tbProps,
	pagination,
	data,
	loading,
	getCustomerItem = () => { }, // 特殊组件
}) => {
	const getColumn = (item) => {
		const type = item.type;
		return type ? {
			title: item.title,
			key: item.key,
			dataIndex: item.key,
			...item.columns,
			render: (text, record) => {
				return getCustomerItem(type, text, record) || <CTbItem type={type} value={text} />;
			}
		} : {
				title: item.title,
				key: item.key,
				dataIndex: item.key,
				...item.columns
			};
	};

	const columns = listItem.map((item) => {
		if (item.children) {
			return {
				title: item.title,
				children: [...item.children.map((item1) => {
					return getColumn(item1);
				})]
			};
		}
		return getColumn(item);
	});

	return (
		<Table
			bordered
			columns={columns}
			dataSource={data}
			rowKey={record => record.id}
			loading={loading}
			pagination={pagination}
			scroll={listItem.length > 12 ? { x: 1500 } : {}}
			{...tbProps}
		/>
	);
};

export default CTable;
