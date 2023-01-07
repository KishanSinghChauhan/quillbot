import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import { Outlet } from 'react-router-dom';

import styles from './styles.module.scss';

const CommonLayout = () => (
	<div className={styles.commonLayout}>
		<Sidebar />
		<div className={styles.rightSec}>
			<Header />
			<main className={styles.mainSec}>
				<Outlet />
			</main>
		</div>
	</div>
);

export default CommonLayout;
