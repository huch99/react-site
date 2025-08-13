import React, { useCallback, useState } from 'react';

const MyuseCallback = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(prevCount => prevCount +1);
    }, [])

    return (
        <div>
            <h1>count : {count}</h1>
            <button onClick={increment}>증가</button>
        </div>
    );
};

export default MyuseCallback;