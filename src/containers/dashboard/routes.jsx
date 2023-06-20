import React, { lazy } from 'react';

const HomeContainer = lazy(() => import('./home'));
const ButtonsContainer = lazy(() => import('./buttons'));
const FormsContainer = lazy(() => import('./forms'));
const IconsContainer = lazy(() => import('./icons'));

export const dashboardRoutes = [
	{
		path: '/dash',
		title: 'Home',
		iconClass: 'fa fa-home',
		element: <HomeContainer />,
		children: [],
	},
	{
		path: '/dash/icons',
		title: 'Icons',
		iconClass: 'fa fa-grav',
		element: <IconsContainer />,
	},
	{
		path: '/dash/buttons',
		title: 'Buttons',
		iconClass: 'fa fa-plus-circle',
		element: <ButtonsContainer />,
	},
	{
		path: '/dash/forms',
		title: 'Forms',
		iconClass: 'fa fa-square-o',
		element: <FormsContainer />,
	},
];
