import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import { testApi } from './services/dummyData';
import { productApi } from './services/productData';


const store = configureStore({
    reducer: {
        counterReducer: counterSlice.reducer,
        [testApi.reducerPath]: testApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(testApi.middleware, productApi.middleware),
});

export default store;