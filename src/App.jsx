import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css'

function App() {

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App