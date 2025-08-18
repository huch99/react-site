import React, { useCallback, useState } from 'react';
import ThemeContext from './ThemeContext';
import MainContent from './MainContent';

const DarkOrLight = (props) => {
    const [theme, setTheme] = useState('light');
    const toggleTheme = useCallback(() => {
        if (theme == 'light') {
            setTheme('dark');
        } else if (theme == 'dark') {
            setTheme('light');
        }
    } , [theme]);

    return (
        <div>
            <ThemeContext.Provider value={{theme, toggleTheme}} >
                <MainContent />
            </ThemeContext.Provider>
        </div>
    );
};

export default DarkOrLight;