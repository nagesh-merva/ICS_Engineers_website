import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Aboutus from './pages/AboutUs'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
