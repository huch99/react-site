import React, { useState } from 'react';
import { store_zustand } from './store_zustand';

const Ex_zustand_3 = () => {
    const { count, increment, decrement, reset } = store_zustand();

    return (
        <div>
            <h2>카운트 : {count}</h2>
            <button onClick={increment}> +1 </button>
            <button onClick={decrement}> -1 </button>
            <button onClick={reset}>reset</button>
        </div>
    );
};

export default Ex_zustand_3;