import CTable from '../_components/CTable';
import Modal from '../../../../components/Modal';
import { responseColumns } from '../logic';
import CForm from '../_components/CForm';
import { TreeSelect } from 'antd';
const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const Response = ({
	children,
	record
}) => {
	const tb = (
		<CTable
			columns={responseColumns}
			dataSource={record.all_need}
			pagination={false}
			size='small'
			scroll={record.all_need.length > 10 ? { y: 450 } : false}
		/>
	);

	const treeData = [
		{
			title: 'Node1',
			value: '0-0',
			key: '0-0',
			children: [
				{
					title: 'Child Node1',
					value: '0-0-0',
					key: '0-0-0',
				},
			],
		},
		{
			title: 'Node2',
			value: '0-1',
			key: '0-1',
			children: [
				{
					title: 'Child Node3',
					value: '0-1-0',
					key: '0-1-0',
				},
				{
					title: 'Child Node4',
					value: '0-1-1',
					key: '0-1-1',
				},
				{
					title: 'Child Node5',
					value: '0-1-2',
					key: '0-1-2',
				},
			],
		},
	];
	const tProps = {
		treeData,
		// value: this.state.value,
		// onChange: this.onChange,
		treeCheckable: true,
		showCheckedStrategy: SHOW_PARENT,
		style: {
			width: 500,
		}
	}

	const searchProps = {
		items: [{
			title: '请选择拉闸限电线路',
			key: 'lines',
			render: () => {
				return <TreeSelect {...tProps} />;
			}
		}],
		onSearch: (values) => {

		},
		formProps: {
			layout: "inline"
		}
	};

	const content = (
		<div>
			<div>
				<CForm {...searchProps} />
			</div>
			{tb}
		</div>
	);
	return (
		<Modal
			title='各用户实时响应情况'
			content={content}
			footer={false}
			centered={true}
			wrapClassName='managerModal'
		>
			{children}
		</Modal >
	);
}

export default Response;
