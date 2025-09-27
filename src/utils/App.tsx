import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from "../components/layout/Header"
import Home from "../components/pages/Home"
import About from "../components/pages/About"
import Menu from "../components/pages/Menu"
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
    </Router>
  )
}

export default App
