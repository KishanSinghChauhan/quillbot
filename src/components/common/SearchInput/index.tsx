import { ReactComponent as CloseIcon } from 'assets/close.svg';
import { ReactComponent as SearchIcon } from 'assets/search.svg';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { handleSearch } from 'redux/discoverSlice';

import styles from './styles.module.scss';
import useSearchInput from './useSearchInput';

const SearchInput = () => {
	const dispatch = useDispatch();
	const { ref, inputRef, handleClear, open, setOpen } = useSearchInput();

	return (
		<div
			className={clsx(styles.inputWrapper, {
				[styles.open]: open,
			})}
			role='button'
			tabIndex={0}
			onClick={() => setOpen(true)}
			onKeyPress={() => setOpen(true)}
			ref={ref}
		>
			<SearchIcon className={styles.icon} />
			<input
				placeholder='Title, Movies, Keyword'
				ref={inputRef}
				onChange={e => dispatch(handleSearch(e.target.value))}
			/>
			<CloseIcon
				className={styles.closeIcon}
				onClick={() => {
					handleClear();
					dispatch(handleSearch(''));
				}}
			/>
		</div>
	);
};

export default SearchInput;
