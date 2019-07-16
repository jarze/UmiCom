import React from 'react';
import { Layout } from 'antd';
import styles from './index.css';

const { Header, Footer, Sider, Content } = Layout;

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
        <Content className={styles.content}>{props.children}</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
