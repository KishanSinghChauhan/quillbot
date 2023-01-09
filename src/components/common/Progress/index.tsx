import { FC } from 'react';

import styles from './styles.module.scss';

type ProgressProps = {
	rating: number;
};

const Progress: FC<ProgressProps> = ({ rating }) => (
	<div className={styles.progressSec}>
		<div className={styles.progressWrapper}>
			<div
				className={styles.progress}
				style={{
					width: `${rating * 10}%`,
				}}
			/>
		</div>
		<span>{rating}/10</span>
	</div>
);

export default Progress;
