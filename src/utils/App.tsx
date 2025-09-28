import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

import Home from "../components/pages/Home"
import About from "../components/pages/About"
import Menu from "../components/pages/MenuP"
import Gallery from "../components/pages/Gallery"
import Contact from "../components/pages/Contact"

import '../styles/global.css'

function App() {
  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App
