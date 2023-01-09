import MovieList from 'constant';
import { useState } from 'react';

const useDiscover = () => {
	const [movieList, setMovieList] = useState(MovieList);

	const [movieDetail, setMovieDetail] = useState<any>(null);

	const handleChange = (val: string) => {
		if (val) {
			const filteredArray = MovieList.filter(_item =>
				_item.Title.toLowerCase().includes(val.toLowerCase())
			);
			setMovieList(filteredArray);
		} else {
			setMovieList(MovieList);
		}
	};

	return {
		movieList,
		handleChange,
		movieDetail,
		setMovieDetail,
	};
};

export default useDiscover;
