import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Authentication() {
  const [name, setName] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState()




  let navigate = useNavigate()
  const handleClick = () => {

    navigate("/BookDetailsPage")
  }


  
  let nameRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/;

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!nameRegex.test(name)) {
      setError("Invalid email format")
      return
    }
    if(password.length < 4) {
      setError("Құпия сөз 4 таңбадан кем болмауы керек")
      return
    }

  }
  return (
    <div className='authentication'>
      <h1>Welcome Back</h1>
      <p>Login to your BookShelf account</p>


      <form className='form' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Email</label><br />
        <input
          type="text"
          placeholder="your@gemail.com" /><br />
          onChange={(e) => setName(e.target.value)}
          required

      </div>

      <div>
      <label htmlFor="">Password</label> <br />
      <input
        type="password"
        placeholder="****" /><br />
        onChange={(e) => setPassword(e.target.value)}
      
      </div>
      

      <button onClick={handleClick} type="submit">Login</button>
    
    </form>
       
      
    </div >
  )
}
