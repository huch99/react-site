import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Homework0818 = () => {
    const [hws, setHws] = useState([
        { linkName: 'realvarpro', tagName: '전역변수 - context' , date: '0818'},
        { linkName: 'exjs2', tagName: '전역변수 - store' , date: '0818'},
        { linkName: 'exzustand', tagName: '전역변수 - zustand' , date: '0818'},
        { linkName: 'exreduxtool', tagName: '전역변수 - Redux' , date: '0818'},
        { linkName: 'comment', tagName: '댓글달기' , date: '0818'},
        { linkName: 'notification', tagName: '생명주기' , date: '0818'},
        { linkName: 'accommodate', tagName: '커스텀 훅 활용' , date: '0818'},
        { linkName: 'confirmbutton', tagName: '클릭 이벤트 처리' , date: '0818'},
        { linkName: 'rendering', tagName: '조건부 렌더링', date: '0818' },
        { linkName: 'signup', tagName: '사용자 정보 입력받기' , date: '0818'},
        { linkName: 'calculator', tagName: '온도 입력하기' , date: '0818'},
        { linkName: 'darkorlight', tagName: '테마변경' , date: '0818'}

    ]);

    return (
        <table>
        <thead>
            <tr>
                <th>날짜</th>
                <th>과제</th>
            </tr>
        </thead>

        <tbody>
            {hws.map((hw, index) => (
                <tr>
                    <td>{hw.date}</td>
                    <td><Link to={hw.linkName}>{hw.tagName}</Link></td>
                </tr>
            ))}
        </tbody>


    </table>
    );
};

export default Homework0818;