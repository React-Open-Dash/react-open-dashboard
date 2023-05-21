import { HomeContainer } from './home';
import { IconsContainer } from './icons';

export const dashboardRoutes = [
	{
		path: '/dash',
		element: <HomeContainer />,
		children: [],
	},
	{
		path: '/dash/icons',
		element: <IconsContainer />,
	},
];
