import styles from './sidebar.module.scss';
import PropTypes from 'prop-types';

const SideBarMenu = ({ routes }) => {
	return (
		<nav className={styles.sidebar}>
			<div className={styles['sidebar__header']}>
				<img src='./logo.svg' className={styles['sidebar__logo']} />
			</div>
			<div className={styles['sidebar__body']}>
				<ul className={styles['sidebar__list']}>
					{routes.map((route, i) => (
						<li className={styles['sidebar__item']} key={i}>
							{route?.title}
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
