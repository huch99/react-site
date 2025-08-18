import React, { useState } from 'react';

const ConfirmButton = () => {
    const [isOn, setIsOn] = useState(false);
    return (
        <div>
            <button onClick={() => {
                setIsOn(!isOn);
            }} disabled={isOn}>
                {isOn ? '확인됨' : '확인하기'}
            </button>
        </div>
    );
};

export default ConfirmButton;