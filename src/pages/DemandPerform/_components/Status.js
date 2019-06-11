import { Badge } from 'antd';

// 进行中， 待分解， 待审批， 已结束， 已解除， 已发布
export default ({ level }) => {
	switch (level) {
		case 1:
			return <Badge color="blue" status='processing' text="进行中" />;
		case 2:
			return <Badge color="red" text="" />;
		case 3:
			return <Badge status="warning" text="已解除" />;
		case 4:
			return <Badge status="success" text="已结束" />;

		default:
	}
}
