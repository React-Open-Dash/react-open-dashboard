import React, { Suspense } from 'react';
import { HomeContainer } from './home';
// import { IconsContainer } from './icons';

const IconsContainer = React.lazy(() => import('./icons/index'));

export const dashboardRoutes = [
	{
		path: '/dash',
		title: 'Home',
		element: <HomeContainer />,
		children: [],
	},
	{
		path: '/dash/icons',
		title: 'Icons',
		element: <IconsContainer />,
	},
	{
		path: '/dash/buttons',
		title: 'Buttons',
		element: <h1>Buttons</h1>,
	},
	{
		path: '/dash/forms',
		title: 'Forms',
		element: <h1>Forms</h1>,
	},
];
