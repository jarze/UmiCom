import React from 'react';
import styles from './index.css';
import SubstationPop from '../components/SubstationPop';
// import substations from '../../mock/substation/substations.json';
import { connect } from 'dva';

const Subs = ({
	dispatch,
	data = []
}) => {

	const getData = () => {
		dispatch({
			type: 'substations/fetchData'
		});
	};

	console.log(data);

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
		</div>
	);
};

export default connect(({ substations }) => ({
	data: substations.substationLists
}))(Subs);
