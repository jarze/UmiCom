import React, { Component } from 'react';
import CTable from './_components/CTable';
import CForm from './_components/CForm';
import styles from './style.less';
import { Button, Row, Col, Icon } from 'antd';
import { performColumns, searchProps, demandColumns } from './logic';
import { connect } from 'dva';

// import { StandardTable, SearchForm } from 'metro-comp';

const ButtonGroup = Button.Group;

@connect(({ orderlyManageDemandPerform }) => ({ performs: orderlyManageDemandPerform.performs }))
class Page extends Component {
	componentDidMount() {
		const { dispatch, filterParams = {} } = this.props;
		dispatch({
			type: 'orderlyManageDemandPerform/fetch',
			payload: filterParams
		});
	}

	handleExport = (payload = {}) => {
		const { dispatch } = this.props;
		dispatch({
			type: 'orderlyManageDemandPerform/export',
			payload: payload
		})
	}

	handleExportAll = (payload = {}) => {
		const { dispatch } = this.props;
		dispatch({
			type: 'orderlyManageDemandPerform/exportAll',
			payload: payload
		})
	}

	render() {
		const { performs, dispatch } = this.props;

		const props = {
			columns: performColumns,
			dataSource: performs,
			rowSelect: true,
			expandedRowRender: (record) => {
				return (
					<CTable
						columns={demandColumns}
						dataSource={record.downs}
						pagination={false}
						size='small'
					/>
				);
			},
			// pagination: {
			// 	total: 100,
			// 	current: 1,
			// 	pageSize: 20,
			// 	showQuickJumper: true,
			// 	onChange: (va) => {
			// 		console.log(va)
			// 	},
			// 	showTotal: () => {
			// 		return `共 ${100} 条`;
			// 	}
			// },
			// rowSelection: {
			// 	onChange: (selectedRowKeys, selectedRows) => {
			// 		// console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
			// 	}
			// }
		}
		return (
			<div className='container'>
				<div>
					<Row>
						<Col span={4}>
							<ButtonGroup>
								<Button>进行中</Button>
								<Button>已结束</Button>
							</ButtonGroup>
						</Col>
						<Col span={16}>
							<CForm
								onSearch={(values) => {
									{/* console.log(values); */ }
									dispatch({
										type: 'orderlyManageDemandPerform/fetch',
										payload: values
									})
								}}
								{...searchProps}
							/>
						</Col>
						<Col span={4} style={{ textAlign: 'right' }}>
							<Button onClick={this.handleExport} type="primary" icon="export" />
							&nbsp;&nbsp;
							<Button onClick={this.handleExportAll}>导出全部</Button>
						</Col>
					</Row>
				</div>
				<div className='container-content'>
					<CTable {...props} />
				</div>
			</div>
		);
	}
}

export default Page;
