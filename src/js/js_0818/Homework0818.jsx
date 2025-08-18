import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Homework0818 = () => {
    const [hws, setHws] = useState([
        {linkName: 'realvarpro', tagName: '전역변수 - 1'},
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