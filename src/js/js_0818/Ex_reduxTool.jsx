import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './store_redux';

const Ex_reduxTool = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <>
            <h2>카운트 : {count}</h2>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(reset())}>reset</button>
            <button onClick={() => dispatch(incrementByAmount(2))}>+2</button>
        </>
    );
};

export default Ex_reduxTool;