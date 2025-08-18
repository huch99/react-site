import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Homework0818 = () => {
    const [hws, setHws] = useState([
        { linkName: 'realvarpro', tagName: '전역변수 - context' },
        { linkName: 'exjs2', tagName: '전역변수 - store' },
        { linkName: 'exzustand', tagName: '전역변수 - zustand' },
        { linkName: 'exreduxtool', tagName: '전역변수 - Redux' },
        { linkName: 'comment', tagName: '댓글달기' },
        { linkName: 'notification', tagName: '생명주기' },
        { linkName: 'accommodate', tagName: '커스텀 훅 활용' },
        { linkName: 'confirmbutton', tagName: '클릭 이벤트 처리' },
        { linkName: 'rendering', tagName: '조건부 렌더링' },
        { linkName: 'signup', tagName: '사용자 정보 입력받기' },
        { linkName: 'calculator', tagName: '온도 입력하기' },
        { linkName: 'darkorlight', tagName: '테마변경' }

    ]);

    return (
        <div>
            <ul className='hwul'>
                {hws.map((hw, index) => (
                    <li>
                        <Link to={`/react-site/0818/${hw.linkName}`} key={index}> {hw.tagName} </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Homework0818;