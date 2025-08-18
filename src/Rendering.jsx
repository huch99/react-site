import React, { useState } from 'react';

const Rendering = () => {
    const [isOn, setIsOn] = useState(false);
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const users = [
        { id: '123', pw: '123' },
        { id: '456', pw: '456' },
        { id: 'qwer', pw: 'qwer' },
        { id: 'asdf', pw: 'asdf' }
    ]

     const handleLogin = () => {
        const userExists = users.some(
            (user) => user.id === userId && user.pw === userPw
        );

        if (userExists) {
            setIsOn(true);
        } else {
            alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
    };

    return (
        <>
            {isOn && <p>{userId}님 환영합니다!</p>}

            {!isOn && <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder='123'/>}
            {!isOn && <input type="password" value={userPw} onChange={(e) => setUserPw(e.target.value)} placeholder='123'/>}

            {isOn ? (
                <button onClick={() => {
                    setIsOn(false);
                    setUserId('');
                    setUserPw('');
                }}>로그아웃</button>
            ) : (
                <button onClick={handleLogin}>로그인</button>
            )}
        </>
    );
};

export default Rendering;