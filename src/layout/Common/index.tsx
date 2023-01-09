import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { Outlet } from 'react-router-dom';

import styles from './styles.module.scss';

const CommonLayout = () => {
	const handleSidebar = () => {
		const el = document.querySelector('#sidebar') as HTMLDivElement;

		if (el.classList.contains('show-sidebar')) {
			el?.classList.remove('show-sidebar');
		} else {
			el?.classList.add('show-sidebar');
		}
	};

	return (
		<div className={styles.commonLayout}>
			<Sidebar handleMenu={handleSidebar} />
			<div className={styles.rightSec}>
				<Header handleMenu={handleSidebar} />
				<main className={styles.mainSec}>
					<Outlet />
				</main>
			</div>
		</div>
	);
};

export default CommonLayout;
