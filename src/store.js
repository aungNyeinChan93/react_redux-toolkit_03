import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';
import { testApi } from './services/dummyData';
import { productApi } from './services/productData';
import { userApi } from './services/userData';
import { setupListeners } from '@reduxjs/toolkit/query';
import { postApi } from './services/postData';
import { quoteApi } from './services/quoteData';
import { dogApi } from './services/dogData';

const store = configureStore({
    reducer: {
        counterReducer: counterSlice.reducer,
        [testApi.reducerPath]: testApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
        [postApi.reducerPath]: postApi.reducer,
        [quoteApi.reducerPath]: quoteApi.reducer,
        [dogApi.reducerPath]: dogApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(testApi.middleware,
            productApi.middleware, userApi.middleware,
            postApi.middleware, quoteApi.middleware,
            dogApi.middleware,
        ),
});

setupListeners(store.dispatch)

export default store;
