import Button from 'components/common/Button';
import Progress from 'components/common/Progress';

import styles from './styles.module.scss';

const MovieCardDetail = () => (
	<div className={styles.cardDetail}>
		<div className={styles.leftSec}>
			<img
				src='https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW92aWV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60'
				alt=''
			/>
		</div>
		<div className={styles.rightSec}>
			<h2>Free Guy</h2>
			<Progress rating={8.9} />
			<div className={styles.info}>
				<span>Year:</span>
				<span>2021</span>
			</div>
			<div className={styles.info}>
				<span>Running Time:</span>
				<span>115 Min</span>
			</div>
			<div className={styles.info}>
				<span>Directed by:</span>
				<span>Shawn Levy</span>
			</div>
			<div className={styles.info}>
				<span>Language:</span>
				<span>English</span>
			</div>
			<p>
				Guy is a non-player character (NPC) in Free City, a massively multiplayer
				online role-playing video game (MMORPG) developed by Soonami Studio.
			</p>
			<div className={styles.buttonSec}>
				<Button>Play Movie</Button>
				<Button variant='outlined'>Watch Trailer</Button>
			</div>
		</div>
	</div>
);

export default MovieCardDetail;
