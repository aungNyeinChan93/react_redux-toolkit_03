import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import { testApi } from './services/dummyData';
import { productApi } from './services/productData';
import { userApi } from './services/userData';


const store = configureStore({
    reducer: {
        counterReducer: counterSlice.reducer,
        [testApi.reducerPath]: testApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(testApi.middleware, productApi.middleware, userApi.middleware),
});

export default store;