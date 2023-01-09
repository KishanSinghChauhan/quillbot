import { useEffect, useRef, useState } from 'react';

const useSearchInput = () => {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);
	const inputRef = useRef<HTMLInputElement | null>(null);

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

	return {
		handleClear,
		open,
		ref,
		inputRef,
		setOpen,
	};
};

export default useSearchInput;
