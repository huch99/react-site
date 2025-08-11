import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../homework.css'

export default function Homework0811() {
    const [hws, setHws] = useState([
        { linkName: 'colorChange', tagName: '색깔 바꾸기' },
        { linkName: 'comment', tagName: '댓글 달기' },
        { linkName: 'todolist', tagName: '할 일 목록' },
        { linkName: 'togglebutton', tagName: '토글 버튼' }
    ])
    return (
        <>
            <ul className='hwul'>
                {hws.map((hw, index) => (
                    <li>
                        <Link to={`/react-site/0811/${hw.linkName}`} key={index}> {hw.tagName} </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}