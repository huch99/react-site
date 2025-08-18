import React from 'react';
import VarProj01 from './VarProj01';
import Ex_context__01 from './Ex_context__01';
import Ex_context_02 from './Ex_context_02';

const RealVarProj = () => {
    return (
        <>
            <VarProj01>
                <Ex_context__01/>
                <Ex_context_02/>
            </VarProj01>
            <hr />
            <VarProj01>
                <Ex_context_02/>
            </VarProj01>
        </>
    );
};

export default RealVarProj;