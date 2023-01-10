/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import Button from 'components/common/Button';
import Portal from 'components/common/Portal';
import Progress from 'components/common/Progress';
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setMovieDetail } from 'redux/discoverSlice';
import { MovieProps } from 'types';

import styles from './styles.module.scss';

type Props = {
	data: MovieProps;
};

const MovieCardDetail: FC<Props> = ({ data }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		if (data) {
			(document.querySelector('body') as HTMLBodyElement).classList.add(
				'disable-scroll'
			);
		}
		return () => {
			(document.querySelector('body') as HTMLBodyElement).classList.remove(
				'disable-scroll'
			);
		};
	}, [data]);

	return (
		<Portal>
			{Boolean(data) && (
				<div
					className={styles.modalBody}
					onClick={() => dispatch(setMovieDetail(''))}
				>
					<div
						className={styles.cardDetail}
						onClick={e => {
							if (e.stopPropagation) {
								e.stopPropagation();
							}
						}}
					>
						<div className={styles.leftSec}>
							<img src={data.Poster} alt={data.Title} />
						</div>
						<div className={styles.rightSec}>
							<h2>{data.Title}</h2>
							{data.imdbRating !== 'N/A' && (
								<Progress rating={Number(data.imdbRating)} />
							)}
							<div className={styles.info}>
								<span>Year:</span>
								<span>{data.Year}</span>
							</div>
							<div className={styles.info}>
								<span>Running Time:</span>
								<span>{data.Runtime}</span>
							</div>
							<div className={styles.info}>
								<span>Directed by:</span>
								<span>{data.Director}</span>
							</div>
							<div className={styles.info}>
								<span>Language:</span>
								<span>{data.Language}</span>
							</div>
							<p>{data.Plot}</p>
							<div className={styles.buttonSec}>
								<Button>Play Movie</Button>
								<Button variant='outlined'>Watch Trailer</Button>
							</div>
						</div>
					</div>
				</div>
			)}
		</Portal>
	);
};

export default MovieCardDetail;
