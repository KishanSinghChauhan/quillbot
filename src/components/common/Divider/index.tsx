import { FC } from 'react';

import styles from './styles.module.scss';

type DivideProps = {
	color?: string;
};

const Divider: FC<DivideProps> = ({ color }) => (
	<div
		className={styles.divider}
		style={{
			backgroundColor: color || '#394B61',
		}}
	/>
);

export default Divider;

Divider.defaultProps = {
	color: '',
};
