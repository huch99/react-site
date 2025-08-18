import React, { useState } from 'react';

const Rendering = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <>
           {isOn && <p>환영합니다!</p>}

           {isOn ? (
            <button onClick={() => setIsOn(false)}>로그아웃</button>
           ) : (
            <button onClick={() => setIsOn(true)}>로그인</button>
           )}
        </>
    );
};

export default Rendering;