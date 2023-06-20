import { DashboardContainer } from './dashboard';
import { dashboardRoutes } from './dashboard/routes';
import { LoginContainer } from './login';

const routes = [
	{
		path: '/dash',
		iconClass: '',
		element: <DashboardContainer />,
		children: dashboardRoutes,
	},
	{
		path: '/login',
		iconClass: '',
		element: <LoginContainer />,
	},
];

export default routes;
