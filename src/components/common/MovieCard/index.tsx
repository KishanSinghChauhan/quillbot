import { ReactComponent as AddIcon } from 'assets/add.svg';
import { ReactComponent as PlayIcon } from 'assets/play.svg';
import clsx from 'clsx';
import { FC } from 'react';

import styles from './styles.module.scss';

type MovieCardProps = {
	imgUrl?: string;
	title?: string;
};

const MovieCard: FC<MovieCardProps> = ({ imgUrl, title }) => (
	<div className={clsx(styles.card)}>
		<img src={imgUrl} alt={title} />
		<p>{title}</p>
		<div className={styles.icons}>
			<PlayIcon />
			<AddIcon />
		</div>
	</div>
);

export default MovieCard;

MovieCard.defaultProps = {
	title: 'Free guy',
	imgUrl:
		'https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
};
