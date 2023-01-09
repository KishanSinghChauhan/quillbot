import clsx from 'clsx';
import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import styles from './styles.module.scss';

export type HTMLButtonProps = DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>;

type CustomProps = {
	variant?: 'outlined' | 'filled';
};

type ButtonProps = HTMLButtonProps & CustomProps;

const Button: FC<ButtonProps> = ({ children, variant }) => (
	<button
		className={clsx(styles.button, {
			[styles.outlined]: variant === 'outlined',
			[styles.filled]: variant === 'filled',
		})}
		type='button'
	>
		{children}
	</button>
);

export default Button;

Button.defaultProps = {
	variant: 'filled',
};
