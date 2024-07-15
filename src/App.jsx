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
    <div className='d-flex flex-column min-vh-100'>
      <NavBar />
      <div className="flex-grow-1">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App