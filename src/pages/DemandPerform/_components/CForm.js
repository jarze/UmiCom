import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
// import Item from './ComFormItem';
const FormItem = Form.Item;

class CForm extends Component {
	static defaultProps = {
		data: {},
		onSearch: () => { },
	}

	constructor(props) {
		super(props);
		this.state = {
			currentItem: props.data
		};
	}

	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log('Received values of form: ', values);
				this.props.onSearch(values);
			}
		});
	}

	handleClear = () => {
		this.props.form.resetFields();
		this.props.onSearch({});
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		const { items, formProps } = this.props;
		const { currentItem } = this.state;
		const formContent = items.map((item) => {
			const type = item.type;
			const key = item.key;
			// const props = {
			// 	type,
			// 	keyName: key,
			// 	value: currentItem[key],
			// 	sources: item.sources,
			// 	props: item.props
			// };
			return (
				<FormItem label={item.title} hasFeedback={!type} key={key}>
					{getFieldDecorator(key, {
						initialValue: currentItem[key],
						rules: item.rules || []
					})(
						item.render ? item.render() : <Input type="text" />
					)}
				</FormItem>
			);
		});

		return (
			<Form
				onSubmit={this.handleSubmit}
				{...formProps}
			>
				{formContent}
				<FormItem>
					<Button type="primary" htmlType="submit">搜索</Button>
					<Button
						type="cancel"
						style={{ marginLeft: 15 }}
						onClick={this.handleClear}
					>清除</Button>
				</FormItem>
			</Form>
		);
	}
}
export default Form.create()(CForm);
