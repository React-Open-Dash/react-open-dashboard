import classNames from 'classnames';
import styles from './sidebar.module.scss';
import PropTypes from 'prop-types';

const SideBarMenu = ({ routes, activeRoutePath, onClick }) => {
	const sideBarItemClasses = path =>
		classNames(
			styles['sidebar__item'],
			activeRoutePath === path ? styles['sidebar__item--active'] : undefined
		);

	const iconItemClasses = (iconClass, path) =>
		classNames(
			iconClass,
			activeRoutePath === path
				? styles['sidebar__item-icon--active']
				: undefined
		);

	return (
		<nav className={styles.sidebar}>
			<div className={styles['sidebar__header']}>
				<img src='/logo.svg' className={styles['sidebar__logo']} />
			</div>
			<div className={styles['sidebar__body']}>
				<ul className={styles['sidebar__list']}>
					{routes.map((route, i) => (
						<li
							className={sideBarItemClasses(route.path)}
							key={i}
							onClick={event => onClick(event, route.path)}
						>
							<span
								key={i + 'r-icon'}
								className={iconItemClasses(route.iconClass, route.path)}
							></span>
							<span key={i + 'r-title'}>{route?.title}</span>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

SideBarMenu.propTypes = {
	routes: PropTypes.array,
};

export default SideBarMenu;
