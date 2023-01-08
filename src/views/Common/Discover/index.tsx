import MovieCard from 'components/common/MovieCard';

import styles from './styles.module.scss';

const Discover = () => (
	<div className={styles.movieList}>
		{[1, 23, 4, 5, 6, 556, 7098, 990].map(d => (
			<div className={styles.movieCard} key={d}>
				<MovieCard />
			</div>
		))}
	</div>
);

export default Discover;
