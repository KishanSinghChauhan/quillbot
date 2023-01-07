import Avatar from 'components/common/Avatar';
import Divider from 'components/common/Divider';

import styles from './styles.module.scss';

const Sidebar = () => (
	<div className={styles.sidebar}>
		<div className={styles.userDetails}>
			<Avatar url='https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60' />
			<p>Eric Hoffman</p>
		</div>
		<Divider />
	</div>
);

export default Sidebar;
