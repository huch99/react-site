import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css'
import Layout from './compo/Layout';
import Home from './compo/Home';
import Homework0811 from './js/js_0811/index0811';
import ColorChange from './js/js_0811/colorChange'
import Comment from './js/js_0811/comment';
import ToDoList from './js/js_0811/toDoList';
import ToggleButton from './js/js_0811/toggleButton';
import { useState } from 'react';


function App() {
  const [mainList, setMainList] = useState([
    {linkName: '0811/colorChange', tagName : <ColorChange />},
    {linkName: '0811/comment', tagName : <Comment />},
    {linkName: '0811/toDoList', tagName : <ToDoList />},
    {linkName: '0811/toggleButton', tagName : <ToggleButton />},
  ]);
  return (
    <>
      <h1>과제방</h1>
      <BrowserRouter>
        <Routes>          
          <Route index element={<Home />}/>
          <Route path='/react-site/' element={<Layout />}/>
          <Route path='/react-site/0811/' element={<Homework0811 />}/>


          {mainList.map((main, index) => (
            <Route path={`/react-site/${main.linkName}`} element={main.tagName} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
