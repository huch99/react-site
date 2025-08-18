import React from 'react';
import Ex_reduxTool from './js/js_0818/Ex_reduxTool';
import { store_redux_configure } from './js/js_0818/store_redux_configure';
import { Provider } from 'react-redux';

const RealRedux = () => {
    return (
        <>
            <Provider store={store_redux_configure}>
                <Ex_reduxTool/>
            </Provider>
        </>
    );
};

export default RealRedux;