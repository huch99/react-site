import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Homework0818 = () => {
    const [hws, setHws] = useState([
        {linkName: 'realvarpro', tagName: '전역변수 - context'},
        {linkName: 'exjs2', tagName: '전역변수 - store'},
        {linkName: 'exzustand', tagName: '전역변수 - zustand'},
        {linkName: 'exreduxtool', tagName: '전역변수 - Redux'},
        {linkName: 'comment', tagName: '댓글달기'}
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