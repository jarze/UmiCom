import React from 'react';
import { Collapse, Row, Col, Popover, Icon } from 'antd';
import styles from './index.less';

const Panel = Collapse.Panel;

// const Substation = ({
// 	activeKeys = ['0'],
// 	data = []
// }) => {
// 	return (
// 		<div className={styles.container}>
// 			<div className={styles.main}>
// 				<Collapse defaultActiveKey={activeKeys}>
// 					{
// 						data.map((item, index) => {
// 							return (
// 								<Panel header={item.name} key={index}>
// 									<Row>
// 										{
// 											item.lines.map((item, index) => {
// 												return <Col span={8} className={styles.customer}>{item.id}</Col>;
// 											})
// 										}
// 									</Row>
// 								</Panel>
// 							);
// 						})
// 					}
// 				</Collapse>
// 			</div>
// 			<div className={styles.substation}>
// 				变电站编号214234 <span className={styles['station-watt']}>100kw</span>
// 			</div>
// 		</div>
// 	);
// }

class Substation extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
	}

	hide = () => {
		this.setState({
			visible: false,
		});
	};

	handleVisibleChange = visible => {
		this.setState({ visible });
	};

	render() {
		const {
			activeKeys = ['0'],
			data = [],
			children
		} = this.props;
		const content = (
			<div className={styles.container}>
				<div className={styles.main}>
					<Collapse defaultActiveKey={activeKeys}>
						{
							data.map((item, index) => {
								return (
									<Panel header={item.name} key={index}>
										<Row>
											{
												item.lines.map((item, index) => {
													return <Col span={8} className={styles.customer} key={index}>客户编号{item.id}</Col>;
												})
											}
										</Row>
									</Panel>
								);
							})
						}
					</Collapse>
				</div>
				<div className={styles.substation}>
					变电站编号214234
					<span className={styles['station-watt']}>100kw</span>
					<span className={styles.close}><Icon type="close" onClick={this.hide} /></span>
				</div>
			</div>
		);
		return (
			<Popover
				content={content}
				trigger="click"
				visible={this.state.visible}
				onVisibleChange={this.handleVisibleChange}
				overlayClassName={styles.popover}
			>
				{children}
			</Popover>
		);
	}
}

export default Substation;