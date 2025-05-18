import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import { testApi } from './services/dummyData';


const store = configureStore({
    reducer: {
        counterReducer: counterSlice.reducer,
        [testApi.reducerPath]: testApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(testApi.middleware),
});

export default store;