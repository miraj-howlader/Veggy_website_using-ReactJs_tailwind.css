import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import FeaturesProduct from './components/FeaturesProduct'
import Discount from './components/Discount'
import Blogs from './components/Blogs'
import Footer from './components/Footer'

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <FeaturesProduct />
      <Discount />
      <Blogs />
      <Footer />
    </main>
  )
}

export default App
