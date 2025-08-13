import React, { useMemo, useState } from 'react';

const MyuseMemo = () => {
    const [count, setCount] = useState(0);
    const [anotherState, setAnotherState] = useState(0);

    const expensiveCalculation = (num) => {
        console.log('복잡한 계산 시작...');
        let result = 0;
        for(let i = 0; i < 100000000; i++) {
            result += i*num;
        }
        return result;
    }

    const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);
    return (
        <div>
            <h1>Count : {count}</h1>
            <h2>계산 결과 : {memoizedValue}</h2>
            <button onClick={() => setCount(prev => prev + 1)}>증가</button>
            <button onClick={() => setAnotherState(prev => prev + 1)}>다른 상태 변경</button>
        </div>
    );
};

export default MyuseMemo;