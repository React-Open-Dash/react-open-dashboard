import styles from './sidebar.module.scss';
import PropTypes from 'prop-types';

const SideBarMenu = ({ routes }) => {
	return (
		<nav className={styles.sidebar}>
			<ul>
				{routes.map((route, i) => (
					<li key={i}>{route?.title}</li>
				))}
			</ul>
		</nav>
	);
};

SideBarMenu.propTypes = {
	routes: PropTypes.array,
};

export default SideBarMenu;
