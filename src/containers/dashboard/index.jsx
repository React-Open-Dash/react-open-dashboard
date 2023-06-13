import { Outlet } from 'react-router-dom';
import Header from '../../components/header';
import SideBarMenu from '../../components/sidebar';
import styles from './dashboard.module.scss';
import { dashboardRoutes } from './routes';
import { Suspense } from 'react';

export const DashboardContainer = () => {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<SideBarMenu routes={dashboardRoutes} />
				<main>
					<Suspense fallback={<>...</>}>
						<Outlet />
					</Suspense>
				</main>
			</div>
		</>
	);
};
