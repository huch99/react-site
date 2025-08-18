import React from 'react';
import { useGlobal } from './VarProj01';

const Ex_context_02 = () => {
    const {count, setCount} = useGlobal();
    return (
        <>
            <h2>카운트 : {count}</h2>
            <button onClick={() => setCount(count + 1)}> +1 </button>
        </>
    );
};

export default Ex_context_02;