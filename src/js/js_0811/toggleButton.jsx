import { useState } from "react";

export default function ToggleButton() {
    const [isOn, setIsOn] = useState(false);
    const bodyColor = document.querySelector('body').style;

    return (
        <>
            <h3>Boolean 값의 상태 변화 체크</h3>
            <button onClick={() => {
                setIsOn(!isOn);
                bodyColor.backgroundColor = isOn ? 'black' : 'white';
                bodyColor.color = isOn ? 'white' : 'black';
                }}>{isOn ? 'ON' : 'OFF'}</button>
        </>
    );
}