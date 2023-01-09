import { ReactComponent as CloseIcon } from 'assets/close.svg';
import { ReactComponent as SearchIcon } from 'assets/search.svg';
import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';
import useDiscover from 'views/Common/Discover/useDiscover';

import styles from './styles.module.scss';

const SearchInput = () => {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const { handleChange } = useDiscover();

	useEffect(() => {
		const handleClickOutside = (event: any) => {
			if (
				ref.current &&
				!ref.current.contains(event?.target) &&
				!inputRef.current?.value
			) {
				setOpen(false);
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, []);

	const handleClear = () => {
		if (inputRef.current) {
			inputRef.current.value = '';
		}
	};

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
				onChange={e => handleChange(e.target.value)}
			/>
			<CloseIcon className={styles.closeIcon} onClick={handleClear} />
		</div>
	);
};

export default SearchInput;
