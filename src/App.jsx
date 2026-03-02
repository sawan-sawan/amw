import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import './App.css'

import Navbar from '../src/components/Navbar' 
import Hero from '../src/components/Hero'
import FeaturesSection from '../src/components/FeaturesSection'
import FeaturedProducts from '../src/components/FeaturedProducts'
import OurCollection from './components/OurCollection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import SocialMedia from './components/SocialMedia'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Yahan se maine <main style={{ marginTop: '120px' }}> hata diya hai */}
      <Routes>
        {/* --- 1. होमपेज रूट --- */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <FeaturesSection />
              <OurCollection />
              <SocialMedia />
              <AboutSection />
              <FeaturedProducts />
              <ContactSection />
            </>
          }
        />

        {/* --- 2. बाकी सभी पेज --- */}
        <Route path="/home" element={<Hero />} />
        <Route path="/featured-section" element={<FeaturesSection />} />
        <Route path="/featured-products" element={<FeaturedProducts />} />
        <Route path="/our-collection" element={<OurCollection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/contact" element={<ContactSection />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App  