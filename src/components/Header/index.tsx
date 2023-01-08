import { ReactComponent as MenuIcon } from 'assets/menu.svg';
import { ReactComponent as ThemeIcon } from 'assets/theme.svg';
import SearchInput from 'components/common/SearchInput';

import styles from './styles.module.scss';

const Header = () => (
	<header className={styles.header}>
		<SearchInput />
		<div className={styles.rightSec}>
			<ThemeIcon className={styles.icon} />
			<MenuIcon className={styles.icon} />
		</div>
	</header>
);

export default Header;
