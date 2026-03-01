import { useState } from 'react'
import './App.css'
// Navbar को import करें (ध्यान दें कि पाथ सही हो)
import Navbar from '../src/components/Navbar' 
import Hero from '../src/components/Hero'
import FeaturesSection from '../src/components/FeaturesSection'
import FeaturedProducts from '../src/components/FeaturedProducts'
import OurCollection from './components/OurCollection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      {/* हमने यहाँ Navbar को रेंडर किया है */}
      <Navbar />
      <Hero />
      <FeaturesSection />
      <FeaturedProducts />
      <OurCollection />
      <AboutSection />
      <ContactSection />
      <Footer />
      
      {/* यहाँ आप आगे का कंटेंट (Hero, Products, etc.) डाल सकते हैं */}
      <main style={{ marginTop: '120px' }}> 
        {/* marginTop इसलिए दिया है ताकि कंटेंट Navbar के पीछे न छुप जाए */}
      </main>
    </>
  )
}

export default App