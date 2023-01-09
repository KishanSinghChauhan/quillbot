import { ReactComponent as MenuIcon } from 'assets/menu.svg';
import { ReactComponent as MenuBarIcon } from 'assets/menu-bars.svg';
import { ReactComponent as ThemeIcon } from 'assets/theme.svg';
import SearchInput from 'components/common/SearchInput';

import styles from './styles.module.scss';

const Header = () => {
	const handleSidebar = () => {
		const el = document.querySelector('#sidebar') as HTMLDivElement;
		el?.classList.add('show-sidebar');
	};
	return (
		<header className={styles.header}>
			<div className={styles.leftSec}>
				<MenuBarIcon className={styles.menuBarIcon} onClick={handleSidebar} />
				<SearchInput />
			</div>
			<div className={styles.rightSec}>
				<ThemeIcon className={styles.icon} />
				<MenuIcon className={styles.icon} />
			</div>
		</header>
	);
};

export default Header;
