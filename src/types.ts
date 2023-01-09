export type AvatarImageSize = 'xs' | 'sm' | 'md' | 'lg';

export type MovieProps = {
	Title: string;
	Year: string;
	Runtime: string;
	Director: string;
	imdbRating: string;
	Plot: string;
	Language: string;
	Poster: string;
};

export type MenuProp = {
	handleMenu: () => void;
};
