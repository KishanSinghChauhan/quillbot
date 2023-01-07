import { ReactComponent as MenuIcon } from 'assets/menu.svg';
import { ReactComponent as ThemeIcon } from 'assets/theme.svg';
import Search from 'components/common/Search';

import styles from './styles.module.scss';

const Header = () => (
	<header className={styles.header}>
		<div>
			<Search />
		</div>
		<div>
			<ThemeIcon />
			<MenuIcon />
		</div>
	</header>
);

export default Header;
