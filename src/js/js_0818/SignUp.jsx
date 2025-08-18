import React, { useState } from 'react';

const SignUp = () => {
    const [name, setName] = useState('');
    const [isOn, setIsOn] = useState(false);
    const [text, setText] = useState('');
    const [bgColor, setBgColor] = useState('');
    const [gender, setGender] = useState('남자');

    return (
        <div>
            {isOn && <h3 style={{backgroundColor: bgColor === '남자' ? 'blue' : 'pink'}}>{text}님 안녕하세요.</h3>}
            <form onSubmit={(e) => {
                e.preventDefault();
                setText(name);
                setBgColor(gender);
                setIsOn(true);
                setName('');
            }}>
                <label>이름 :
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='이름' />
                </label>
                <br />
                <label>
                    성별:
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="남자">남자</option>
                        <option value="여자">여자</option>
                    </select>
                </label>
                <br />
                <button type="submit">제출</button>
            </form>
        </div>
    );
};

export default SignUp;