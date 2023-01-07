import clsx from 'clsx';
import { FC } from 'react';
import { AvatarImageSize } from 'types';

import styles from './styles.module.scss';

type AvatarProps = {
	url: string;
	size?: AvatarImageSize;
	className?: string;
};

const Avatar: FC<AvatarProps> = ({ url, size, className }) => (
	<div
		className={clsx(
			styles.avatar,
			{
				[styles.extraSmall]: size === 'xs',
				[styles.small]: size === 'sm',
				[styles.large]: size === 'lg',
			},
			className
		)}
	>
		<img src={url} alt='' />
	</div>
);

export default Avatar;

Avatar.defaultProps = {
	size: 'md',
	className: '',
};
