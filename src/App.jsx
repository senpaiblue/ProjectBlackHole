import React from 'react'
import "./index.css"
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Product from "./Pages/Product"
import Home from './Pages/Home'

function App() {

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  
  )
}

export default App
