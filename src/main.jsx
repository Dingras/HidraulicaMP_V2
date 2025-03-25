import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Home  from './pages/Home/Home'
import Navbar from './components/Navigator/Navbar.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Categories from './pages/Products/Categories.jsx'
import Products from './pages/Products/Products.jsx'
import Services from './pages/Services/Services.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Works from './pages/Works/Works.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productos' element={<Categories />} />
          <Route path='/productos/:id' element={<Products />} />
          <Route path='/servicios' element={<Services />} />
          <Route path='/trabajos' element={<Works />} />
          <Route path='/nosotros' element={<About />} />
          <Route path='/contacto' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    <WhatsAppButton/>
    <Footer/>
  </StrictMode>
)
