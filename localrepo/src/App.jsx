import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {
  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/Product" element={<Product />} />
      <Route path="/Changelog" element={<Changelog />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Blog" element={<Blog />} />
      </Routes>
    </>
  )
}

export default App
