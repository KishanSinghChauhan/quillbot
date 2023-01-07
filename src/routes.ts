import CommonLayout from 'layout/Common';
import Discover from 'views/Common/Discover';

const routes = [
	{
		layout: CommonLayout,
		path: '',
		children: [
			{
				component: Discover,
				path: '/',
			},
		],
	},
];

export default routes;
