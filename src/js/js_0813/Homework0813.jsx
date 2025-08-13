import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Homework0813 = () => {
    const [hws, setHws] = useState([
        {linkName: 'myuseref', tagName: 'useRef'},
        {linkName: 'myusereducer', tagName: 'useReducer'},
        {linkName: 'myusereducerex', tagName: 'useReducer EX'},
        {linkName: 'myusecallback', tagName: 'useCallback'},
        {linkName: 'myusememo', tagName: 'useMemo'}
    ]);

    return (
        <div>
            <ul className='hwul'>                
                {hws.map((hw, index) => (
                    <li>
                        <Link to={`/react-site/0813/${hw.linkName}`} key={index}> {hw.tagName} </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Homework0813;