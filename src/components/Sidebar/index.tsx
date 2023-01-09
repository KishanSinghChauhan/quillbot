/* eslint-disable react/no-array-index-key */
import { ReactComponent as CloseIcon } from 'assets/close.svg';
import clsx from 'clsx';
import Avatar from 'components/common/Avatar';
import Divider from 'components/common/Divider';
import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';

import sidebarMenuItem from './constant';
import styles from './styles.module.scss';

const Sidebar = () => {
	const { pathname } = useLocation();

	const handleSidebar = () => {
		const el = document.querySelector('#sidebar') as HTMLDivElement;
		el?.classList.remove('show-sidebar');
	};

	return (
		<div className={styles.sidebar} id='sidebar'>
			<button className={styles.close} type='button' onClick={handleSidebar}>
				<CloseIcon />
			</button>
			<div className={styles.userDetails}>
				<Avatar url='https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' />
				<p>Eric Hoffman</p>
			</div>
			{sidebarMenuItem.map((_items, i) => (
				<Fragment key={i}>
					<Divider />
					<div className={styles.menuList}>
						{_items.map(_item => (
							<div
								className={clsx(styles.menuItem, {
									[styles.disabled]: _item.path !== pathname,
									[styles.active]: _item.path === pathname,
								})}
								key={_item.title}
							>
								{_item.icon}
								<span>{_item.title}</span>
							</div>
						))}
					</div>
				</Fragment>
			))}
		</div>
	);
};

export default Sidebar;
