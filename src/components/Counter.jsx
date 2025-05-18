import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease, reset } from '../features/counter/counterSlice'

const Counter = () => {
    const { count } = useSelector((store) => store.counterReducer);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increase())}>+</button>
            <button onClick={() => dispatch(decrease())}>-</button>
            <button onClick={() => dispatch(reset())}>reset</button>
        </React.Fragment>
    );
};


export default Counter;