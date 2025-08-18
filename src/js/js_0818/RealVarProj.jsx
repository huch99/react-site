import React from 'react';
import VarProj01 from './VarProj01';
import Ex_context__01 from './Ex_context__01';
import Ex_context_02 from './Ex_context_02';

const RealVarProj = () => {
    return (
        <>
            <VarProj01>
                <p>useGlobal을 활용했기에 두 state는 공유됨.</p>
                <Ex_context__01/>
                <Ex_context_02/>
            </VarProj01>
            <hr />
            <VarProj01>
                <p>useGlobal을 활용했지만 다른 객체로 나누어져 있어 공유되지 않음.</p>
                <Ex_context_02/>
            </VarProj01>
        </>
    );
};

export default RealVarProj;