import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const MainContent = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <>
            <div
                style={{
                    width: '100vw',
                    height: '100vh',
                    padding: '1.5em',
                    backgroundColor: theme == 'light' ? 'white' : 'black',
                    color: theme == 'light' ? 'black' : 'white'
                }}
            >

                <p>테마변경 가능</p>
                <button onClick={toggleTheme}>테마 변경</button>
            </div>
        </>
    );
};

export default MainContent;