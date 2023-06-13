import { DashboardContainer } from './dashboard';
import { dashboardRoutes } from './dashboard/routes';
import { LoginContainer } from './login';

const routes = [
	{
		path: '/dash',
		element: <DashboardContainer />,
		children: dashboardRoutes,
	},
	{
		path: '/login',
		element: <LoginContainer />,
	},
];

export default routes;
