
import './App.css';
// eslint-disable-next-line no-unused-vars
import About from'../src/Componets/About/About'
import Blog from'../src/Componets/Blog/Blog'


import Home from './Componets/Home/Home';
import NavBar from './Componets/NavBar/NavBar';

import { Route, Routes } from 'react-router-dom';
function App() {
  return (
  <>
  
    <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/Blog' element={<Blog/>}></Route>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/' element={<Home></Home>}></Route>
    </Routes>
    
   
    </>
    
    
   
     

    
  );
}

export default App;
