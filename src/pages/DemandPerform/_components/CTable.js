import React, { Component } from 'react';
import { Table } from 'antd';

class CTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedKeys: []
		};

	}

	handleRowSelectionChange = enable => {
		this.setState({ rowSelection: enable ? {} : undefined });
	};

	componentDidMount() {
	}

	render() {
		const {
			columns,
			dataSource,
			// pagination,
			// loading,
			// rowSelect,
			...tbProps
		} = this.props;

		const getColumn = ({ title, key, ...columns }) => {
			return {
				title: title,
				key: key,
				dataIndex: key,
				...columns
			};
		};

		const clms = columns.map((item) => {
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
				columns={clms}
				dataSource={dataSource}
				rowKey={record => record.id}
				bordered={false}
				{...tbProps}
			/>
		);
	}
}


// const CTable = ({
// 	columns,
// 	dataSource,
// 	// pagination,
// 	// loading,
// 	// rowSelect,
// 	...tbProps
// 	// getCustomerItem = () => { }, // 特殊组件
// }) => {
// 	// const getColumn = (item) => {
// 	// 	const type = item.type;
// 	// 	return type ? {
// 	// 		title: item.title,
// 	// 		key: item.key,
// 	// 		dataIndex: item.key,
// 	// 		...item.columns,
// 	// 		render: (text, record) => {
// 	// 			return getCustomerItem(type, text, record) || <CTbItem type={type} value={text} />;
// 	// 		}
// 	// 	} : {
// 	// 			title: item.title,
// 	// 			key: item.key,
// 	// 			dataIndex: item.key,
// 	// 			...item.columns
// 	// 		};
// 	// };

// 	const getColumn = ({ title, key, ...columns }) => {
// 		return {
// 			title: title,
// 			key: key,
// 			dataIndex: key,
// 			...columns
// 		};
// 	};

// 	columns = columns.map((item) => {
// 		if (item.children) {
// 			return {
// 				title: item.title,
// 				children: [...item.children.map((item1) => {
// 					return getColumn(item1);
// 				})]
// 			};
// 		}
// 		return getColumn(item);
// 	});

// 	// const onSelectChange = selectedRowKeys => {
// 	// 	console.log('selectedRowKeys changed: ', selectedRowKeys);
// 	// };

// 	// const rowSelection = {
// 	// 	selectedRowKeys: [],
// 	// 	onChange: onSelectChange,
// 	// };


// 	// return (
// 	// 	<Table
// 	// 		bordered
// 	// 		columns={columns}
// 	// 		dataSource={dataSource}
// 	// 		rowKey={record => record.id}
// 	// 		loading={loading}
// 	// 		pagination={pagination} */}
// 	// 		{/* rowSelection={rowSelect && rowSelection}
// 	// 		{...tbProps}
// 	// 	/>
// 	// );
// 	return (
// 		<Table
// 			bordered
// 			columns={columns}
// 			dataSource={dataSource}
// 			rowKey={record => record.id}
// 			{...tbProps}
// 		/>
// 	);
// };

export default CTable;
