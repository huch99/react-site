import React, { createContext, useContext, useState } from 'react';
const GlobalContext = createContext();

const VarProj01 = ( {children} ) => {   

    const [count, setCount] = useState(0);

    return (
        <div>
            <GlobalContext.Provider value = {{ count, setCount }} >
                { children }
            </GlobalContext.Provider>
        </div>
    );
};

export default VarProj01;

export const useGlobal = () => useContext(GlobalContext);