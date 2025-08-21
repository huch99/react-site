import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Homework0813 = () => {
    const [hws, setHws] = useState([
        {linkName: 'myuseref', tagName: 'useRef', date: '0813'},
        {linkName: 'myusereducer', tagName: 'useReducer', date: '0813'},
        {linkName: 'myusereducerex', tagName: 'useReducer EX', date: '0813'},
        {linkName: 'myusecallback', tagName: 'useCallback', date: '0813'},
        {linkName: 'myusememo', tagName: 'useMemo', date: '0813'}
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

export default Homework0813;