import { createSlice } from '@reduxjs/toolkit';
import MovieList from 'constant';
import { MovieProps } from 'types';

export interface DiscoverState {
	movieList: MovieProps[];
	movieDetail: MovieProps | null;
}

const initialState: DiscoverState = {
	movieList: MovieList,
	movieDetail: null,
};

const handleChange = (val: string) => {
	if (val) {
		return MovieList.filter(_item =>
			_item.Title.toLowerCase().includes(val.toLowerCase())
		);
	}
	return MovieList;
};

export const counterSlice = createSlice({
	name: 'discover',
	initialState,
	reducers: {
		setMovieDetail: (state, action) => {
			state.movieDetail = action.payload;
		},
		handleSearch: (state, action) => {
			state.movieList = handleChange(action.payload);
		},
	},
});

export const { setMovieDetail, handleSearch } = counterSlice.actions;

export default counterSlice.reducer;
