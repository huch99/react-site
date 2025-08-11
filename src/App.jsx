import { BrowserRouter, Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css'
import Layout from './compo/Layout';
import Login from './compo/Login';
import Home from './compo/Home';
import ColorChange from './js/colorChange';
import ToDoList from './js/toDoList';

function App() {

  return (
    <>
      <h1>과제방</h1>
      <BrowserRouter>
        <Routes>          
          <Route index element={<Home />}/>
          <Route path='/react-site/' element={<Layout />}/>
          <Route path='/react-site/login' element={<Login />}/>
          <Route path='/react-site/colorChange' element={<ColorChange />} />
          <Route path='/react-site/toDoList' element={<ToDoList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
