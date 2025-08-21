import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../homework.css'

export default function Homework0811() {
    const [hws, setHws] = useState([
        { linkName: 'colorChange', tagName: '색깔 바꾸기', date: '0811' },
        { linkName: 'comment', tagName: '댓글 달기', date: '0811' },
        { linkName: 'todolist', tagName: '할 일 목록', date: '0811' },
        { linkName: 'togglebutton', tagName: '토글 버튼', date: '0811' }
    ])
    return (
        <>
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
        </>
    );
}