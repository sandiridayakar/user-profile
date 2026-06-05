import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './pages/Home';
import Create from './pages/Create';
import Edit from './pages/Edit';
import Login from './common/Login';
import Contact from './common/Contact';

function App() {
  return (
   <div>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}>Home</Route>
      <Route path="/Create" element={<Create/>}>Create profile</Route>
      <Route path="/Contactus" element={<Contact/>} >Contact us</Route>
      <Route path="/login" element = {<Login/>}>Login</Route>
      <Route path="/edit/:userid" element={<Edit/>}></Route>
    </Routes>
    </BrowserRouter>
    
   </div>
  )
}

export default App
