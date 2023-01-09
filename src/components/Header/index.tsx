import { ReactComponent as MenuIcon } from 'assets/menu.svg';
import { ReactComponent as MenuBarIcon } from 'assets/menu-bars.svg';
import { ReactComponent as ThemeIcon } from 'assets/theme.svg';
import SearchInput from 'components/common/SearchInput';
import { FC } from 'react';
import { MenuProp } from 'types';

import styles from './styles.module.scss';

const Header: FC<MenuProp> = ({ handleMenu }) => (
	<header className={styles.header}>
		<div className={styles.leftSec}>
			<MenuBarIcon className={styles.menuBarIcon} onClick={handleMenu} />
			<SearchInput />
		</div>
		<div className={styles.rightSec}>
			<ThemeIcon className={styles.icon} />
			<MenuIcon className={styles.icon} />
		</div>
	</header>
);

export default Header;
