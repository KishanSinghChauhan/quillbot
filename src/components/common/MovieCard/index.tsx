import { ReactComponent as AddIcon } from 'assets/add.svg';
import { ReactComponent as PlayIcon } from 'assets/play.svg';
import clsx from 'clsx';
import { FC } from 'react';

import styles from './styles.module.scss';

type MovieCardProps = {
	imgUrl: string;
	title: string;
	onClick: () => void;
	active?: boolean;
};

const MovieCard: FC<MovieCardProps> = ({ imgUrl, title, onClick, active }) => (
	<div
		className={clsx(styles.card, {
			[styles.active]: active,
		})}
		onClick={onClick}
		role='button'
		tabIndex={0}
		onKeyPress={onClick}
	>
		<img src={imgUrl} alt={title} />
		<p title={title}>{title}</p>
		<div className={styles.icons}>
			<PlayIcon />
			<AddIcon />
		</div>
	</div>
);

export default MovieCard;

MovieCard.defaultProps = {
	active: false,
};
