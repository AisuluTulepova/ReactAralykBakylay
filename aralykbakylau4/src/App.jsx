import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormAI from './components/FormAI'


function App() {


  return (
    <div className='p-10 mt-20 m-30 flex flex-col justify-center items-center gap-10  border-1 w-300 h-full  ' >

      <h1 className=' flex flex-col  items-center text-black-500 text-4xl italic font-bold' > Gemini AI Сұрақ-Жауап</h1>
      <FormAI/>
    </div>
  )
}

export default App
