import React from 'react';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
import styles from './index.css';

const BasicLayout: React.FC = props => {
	return (
		// <div className={styles.normal}>
		//   <h1 className={styles.title}>Yay! Welcome to umi!</h1>
		//   {props.children}
		// </div>
		<Layout>
			<Sider>Sider</Sider>
			<Layout>
				<Header>Header</Header>
				<Content>{props.children}</Content>
				<Footer>Footer</Footer>
			</Layout>
		</Layout>
	);
};

export default BasicLayout;
