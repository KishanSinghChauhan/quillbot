import { ReactComponent as SearchIcon } from 'assets/search.svg';

import styles from './styles.module.scss';

const Search = () => (
	<div className={styles.inputWrapper}>
		<SearchIcon />
	</div>
);

export default Search;
