import { Link } from 'react-router-dom';
import { useState } from 'react';

const Homework0812 = () => {
    const [hws, setHws] = useState([
            { linkName: 'myeffect01', tagName: 'useEffect - 1' },
            { linkName: 'myeffect02', tagName: 'useEffect - 2' },
            { linkName: 'myeffect03', tagName: 'useEffect - 3' },
            { linkName: 'myeffect04', tagName: 'useEffect - 4' },
            { linkName: 'myeffect05', tagName: 'useEffect - 5' }
        ])

    return (
        <div>
            <ul className='hwul'>
                {hws.map((hw, index) => (
                    <li>
                        <Link to={`/react-site/0812/${hw.linkName}`} key={index}> {hw.tagName} </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Homework0812;