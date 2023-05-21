import { Outlet } from 'react-router-dom';
export const DashboardContainer = () => {
	return (
		<div>
			Dashboard <Outlet />
		</div>
	);
};
