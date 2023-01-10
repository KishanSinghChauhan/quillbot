import { FC, ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface IPortalProps {
	children: ReactNode;
}

const Portal: FC<IPortalProps> = ({ children }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);

		return () => setMounted(false);
	}, []);

	return mounted
		? createPortal(children, document.querySelector('#portal') as HTMLDivElement)
		: null;
};

export default Portal;
