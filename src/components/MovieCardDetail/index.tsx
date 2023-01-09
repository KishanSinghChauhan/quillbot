import Button from 'components/common/Button';
import Progress from 'components/common/Progress';
import { FC } from 'react';

import styles from './styles.module.scss';

type Props = {
	data: any;
};

const MovieCardDetail: FC<Props> = ({ data }) => (
	<div className={styles.cardDetail}>
		<div className={styles.leftSec}>
			<img src={data.Poster} alt={data.Title} />
		</div>
		<div className={styles.rightSec}>
			<h2>{data.Title}</h2>
			{data.imdbRating !== 'N/A' && <Progress rating={Number(data.imdbRating)} />}
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
);

export default MovieCardDetail;
