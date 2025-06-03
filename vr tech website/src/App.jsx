import React, { lazy } from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScroolToTop'
import WhatsAppContact from './components/WhatsappContact';

// Lazy load less-frequent pages
const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const Services = lazy(() => import('./pages/Services'));


// Optional preload functions (can trigger on hover)
Navbar.preload = () => import('./components/Navbar');
Home.preload = () => import('./pages/Home');
About.preload = () => import('./pages/About');
Contact.preload = () => import('./pages/Contact');
Footer.preload = () => import('./components/Footer');
Services.preload = () => import('./pages/Services');


const App = () => {
  return (
    <div>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/services' element={<Services/>}/>
      </Routes>
      <Footer/>
      <WhatsAppContact/>
    </div>
  )
}

export default App