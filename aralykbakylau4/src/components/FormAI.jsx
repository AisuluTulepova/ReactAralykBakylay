import React, { useState } from 'react'
import axios from 'axios'

let apiKey = import.meta.env.VITE_GEMINI_API_KEY




export default function FormAI() {
  let [userInput, setUserInput] = useState('')
  let [error, setError] = useState('')
  let [answerToggle, setAnswerToggle] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let response = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          contents: [{ parts: [{ text: userInput }] }]
        },
        {
          headers: { 'Content-Type': 'application/json' }
        })

      let answer = response.data.candidates?.[0]?.content?.parts?.[0]?.text
      if (answer) {
        setAnswerToggle(answer)
      }


    }
    catch (err) {
      setError(err.message)
    }
  }



  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='border-1 p-3 flex flex-row  justify-between w-250 rounded-lg gap-2'>
        <input className='border-0 flex justify-center items-center w-full'
          type="text"
          placeholder='Сұрағыңызды жазыңыз....'
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button type='submit' className='bg-blue-500  text-white border-none p-2 rounded px-7'>Жіберу</button>
      </form>

      <div>
        <p>{answerToggle}</p>
      </div>


      <p>{error}</p>

    </div>

  )
}
























