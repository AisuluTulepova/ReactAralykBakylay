import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Registr from './components/Registr'

function App() {
  

  return (
    <div className='AppStyle'>
    <Login/>
    <Registr/>
      
    </div>
  )
}

export default App
