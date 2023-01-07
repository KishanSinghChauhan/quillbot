import { ReactComponent as LikeIcon } from 'assets/like.svg';
import { ReactComponent as MyList } from 'assets/list.svg';
import { ReactComponent as Logout } from 'assets/logout.svg';
import { ReactComponent as MovieIcon } from 'assets/movie.svg';
import { ReactComponent as PlayList } from 'assets/playlist.svg';
import { ReactComponent as SearchIcon } from 'assets/search.svg';
import { ReactComponent as Settings } from 'assets/settings.svg';
import { ReactComponent as ShowsIcon } from 'assets/shows.svg';
import { ReactComponent as WatchLater } from 'assets/watchlater.svg';

const sidebarMenuItem = [
	[
		{
			title: 'Discover',
			path: '/',
			icon: <SearchIcon />,
		},
		{
			title: 'Playlist',
			path: '/coming-soon',
			icon: <PlayList />,
		},
		{
			title: 'Movie',
			path: '/coming-soon',
			icon: <MovieIcon />,
		},
		{
			title: 'TV Shows',
			path: '/coming-soon',
			icon: <ShowsIcon />,
		},
		{
			title: 'My List',
			path: '/coming-soon',
			icon: <MyList />,
		},
	],
	[
		{
			title: 'Watch Later',
			path: '/coming-soon',
			icon: <WatchLater />,
		},
		{
			title: 'Recommended',
			path: '/coming-soon',
			icon: <LikeIcon />,
		},
	],
	[
		{
			title: 'Settings',
			path: '/coming-soon',
			icon: <Settings />,
		},
		{
			title: 'Logout',
			path: '/coming-soon',
			icon: <Logout />,
		},
	],
];

export default sidebarMenuItem;
