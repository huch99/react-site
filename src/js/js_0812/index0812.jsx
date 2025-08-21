import { Link } from 'react-router-dom';
import { useState } from 'react';

const Homework0812 = () => {
    const [hws, setHws] = useState([
            { linkName: 'myeffect01', tagName: 'useEffect - 1', date: '0812' },
            { linkName: 'myeffect02', tagName: 'useEffect - 2', date: '0812' },
            { linkName: 'myeffect03', tagName: 'useEffect - 3', date: '0812' },
            { linkName: 'myeffect04', tagName: 'useEffect - 4', date: '0812' },
            { linkName: 'myeffect05', tagName: 'useEffect - 5', date: '0812' }
        ])

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

export default Homework0812;