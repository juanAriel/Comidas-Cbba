import React,{useState,useEffect} from 'react';
import NavBar from './components/NavBar';
import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';
import {Routes,Route} from 'react-router-dom'
import About from './pages/about';
import Menu from './pages/menu'
import Dropdow from './components/Dropdow';

function App() {
  const [isOpen,setIsOpen]=useState(false)
  const toggle =()=>{
    setIsOpen(!isOpen)
  }
  useEffect(()=>{
    const hideMenu=()=>{
      if(window.innerWidth>768 && isOpen){
        setIsOpen(false)
        console.log('i resizeedddd')
      }
    }
    window.addEventListener('resize', hideMenu)
    return ()=>{
      window.removeEventListener('resize',hideMenu)
    }
  })
  return <div>
       <NavBar toggle={toggle}/>
       <Dropdow isOpen={isOpen} toggle={toggle}/>
       <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/menu' element={<Menu></Menu>}></Route>
         <Route path='/about' element={<About></About>}></Route>
       </Routes>
       
       
       <Footer/>
    </div>
  
}

export default App;
