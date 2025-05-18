import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counter/counterSlice';



const store = configureStore({
    reducer: {
        counterReducer: counterSlice.reducer,

    }
});

export default store;