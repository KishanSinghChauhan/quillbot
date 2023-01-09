import MovieCard from 'components/common/MovieCard';
import MovieCardDetail from 'components/MovieCardDetail';
import { useDispatch, useSelector } from 'react-redux';
import { setMovieDetail } from 'redux/discoverSlice';
import { RootState } from 'redux/store';

import styles from './styles.module.scss';

const Discover = () => {
	const dispatch = useDispatch();
	const { movieDetail, movieList } = useSelector(
		(state: RootState) => state.discover
	);

	return (
		<>
			{movieDetail && <MovieCardDetail data={movieDetail} />}
			<div className={styles.movieList}>
				{movieList.length
					? movieList.map(_item => (
							<div className={styles.movieCard} key={_item.Title}>
								<MovieCard
									title={_item.Title}
									imgUrl={_item.Poster}
									onClick={() => {
										dispatch(setMovieDetail(_item));
									}}
									active={movieDetail?.Title === _item.Title}
								/>
							</div>
					  ))
					: null}
			</div>
		</>
	);
};

export default Discover;
