import React from "react"
import { Routes, Route } from "react-router-dom"
import { MainProvider } from "./context/MainContext"
import Main from "./pages/Main"
import Aboutus from "./pages/AboutUs"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import AdminPage from "./pages/AdminPage"

function App() {
  return (
    <MainProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </MainProvider>
  )
}

export default App
