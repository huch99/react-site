import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css'
import Layout from './compo/Layout';
import Home from './compo/Home';
import Homework0811 from './js/js_0811/index0811';
import Homework0812 from './js/js_0812/index0812';
import Homework0813 from './js/js_0813/Homework0813';
import Homework0818 from './js/js_0818/Homework0818';
import ColorChange from './js/js_0811/colorChange'
import Comment from './js/js_0811/comment';
import ToDoList from './js/js_0811/toDoList';
import ToggleButton from './js/js_0811/toggleButton';


import MyEffect from './js/js_0812/MyEffect';
import MyEffect02 from './js/js_0812/MyEffect02';
import MyEffect03 from './js/js_0812/MyEffect03';
import MyEffect04 from './js/js_0812/MyEffect04';
import MyEffect05 from './js/js_0812/MyEffect05';

import MyuseRef from './js/js_0813/MyuseRef'
import MyuseReducer from './js/js_0813/MyuseReducer';
import MyuseReducerEx from './js/js_0813/MyuseReducerEx';
import MyuseCallback from './js/js_0813/MyuseCallback';
import MyuseMemo from './js/js_0813/MyuseMemo';
import RealVarProj from './js/js_0818/RealVarProj';
import Ex_js_2 from './js/js_0818/Ex_js_2';



function App() {
  const [mainList, setMainList] = useState([
    { linkName: '0811/colorChange', tagName: <ColorChange /> },
    { linkName: '0811/comment', tagName: <Comment /> },
    { linkName: '0811/toDoList', tagName: <ToDoList /> },
    { linkName: '0811/toggleButton', tagName: <ToggleButton /> },

    { linkName: '0812/myeffect01', tagName: <MyEffect /> },
    { linkName: '0812/myeffect02', tagName: <MyEffect02 /> },
    { linkName: '0812/myeffect03', tagName: <MyEffect03 /> },
    { linkName: '0812/myeffect04', tagName: <MyEffect04 /> },
    { linkName: '0812/myeffect05', tagName: <MyEffect05 /> },

    { linkName: '0813/myuseref', tagName: <MyuseRef /> },
    { linkName: '0813/myusereducer', tagName: <MyuseReducer /> },
    { linkName: '0813/myusereducerex', tagName: <MyuseReducerEx /> },
    { linkName: '0813/myusecallback', tagName: <MyuseCallback /> },
    { linkName: '0813/myusememo', tagName: <MyuseMemo /> },

    { linkName: '0818/realvarpro', tagName: <RealVarProj /> },
    { linkName: '0818/exjs2', tagName: <Ex_js_2 /> },
  ]);
  return (
    <>
      <h1>과제방</h1>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/react-site/' element={<Layout />} />
          <Route path='/react-site/0811/' element={<Homework0811 />} />
          <Route path='/react-site/0812/' element={<Homework0812 />} />
          <Route path='/react-site/0813/' element={<Homework0813 />} />
          <Route path='/react-site/0818/' element={<Homework0818 />} />

          {mainList.map((main, index) => (
            <Route path={`/react-site/${main.linkName}`} element={main.tagName} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
