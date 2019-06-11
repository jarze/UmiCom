import { Tag } from 'antd';

export default ({ level }) => {
	switch (level) {
		case 1:
			return <Tag color="red">红色预警</Tag>;
		case 2:
			return <Tag color="volcano">橙色预警</Tag>;
		case 3:
			return <Tag color="gold">黄色预警</Tag>;
		case 4:
			return <Tag color="blue">蓝色预警</Tag>;

		default:
	}
}
