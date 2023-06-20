import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/header';
import SideBarMenu from '../../components/sidebar';
import styles from './dashboard.module.scss';
import { dashboardRoutes } from './routes';
import { Suspense } from 'react';

const onMenuItemClick = (_, navigate, path) => navigate(path);

export const DashboardContainer = () => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<>
			<div className={styles.container}>
				<SideBarMenu
					routes={dashboardRoutes}
					activeRoutePath={location.pathname}
					onClick={(event, path) => onMenuItemClick(event, navigate, path)}
				/>
				<main className={styles.main}>
					<Header />
					<div>...BreadCrumbp place holder here</div>
					<Suspense fallback={<>...</>}>
						<Outlet />
					</Suspense>
				</main>
			</div>
		</>
	);
};
