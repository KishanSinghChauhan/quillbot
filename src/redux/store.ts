import { configureStore } from '@reduxjs/toolkit';

import discoverSlice from './discoverSlice';

export const store = configureStore({
	reducer: {
		discover: discoverSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
