import { useState } from "react";
import './colorChange.css'

export default function ColorChange() {
    const [color, setColor] = useState('purple');

    const [colorList, setColorList] = useState(['red','blue', 'yellow', 'green']);

    return (
        <>
            <h3>스타일 값의 상태 변화 체크</h3>
            <h2 style={{color}}>색상 변경</h2>

            {colorList.map((clr, index) => (
                <button className="changeBtn" value={clr} onClick={(e) => (setColor(e.target.value))} key={index}> {clr} </button>
            ))}
        </>
    );
}