import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Authentication from './components/Authentication'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BookGallery from './components/BookGallery'

function App() {


  return (
  
    <BrowserRouter>
      <Routes>
          <Route path="/BookDetailsPage" element={<BookDetailsPage />} />
          <Route path="/BookGallery" element={<BookGallery />} /> 
          <Route path="/" element={<BookGallery />} />
          <Route path="/Authentication" element={<Authentication />} />
      </Routes>
    </BrowserRouter>


    

  )
}

export default App
