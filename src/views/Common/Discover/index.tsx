import MovieCard from 'components/common/MovieCard';
import MovieCardDetail from 'components/MovieCardDetail';

import styles from './styles.module.scss';
import useDiscover from './useDiscover';

const Discover = () => {
	const { movieList, movieDetail, setMovieDetail } = useDiscover();

	return (
		<>
			{movieDetail && <MovieCardDetail data={movieDetail} />}
			<div className={styles.movieList}>
				{movieList.map(d => (
					<div className={styles.movieCard} key={d.Title}>
						<MovieCard
							title={d.Title}
							imgUrl={d.Poster}
							onClick={() => setMovieDetail(d)}
							active={movieDetail?.Title === d.Title}
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default Discover;
