import React, { useEffect, useState } from 'react'
import './home.css'
import axios from 'axios';
const Home = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [error,setError] = useState(false)
  const [user,setUser] = useState(null)

  useEffect(() =>{
    const userLogn = async () =>{
      const response = await axios.post('http://localhost:3000/login',
      JSON.stringify({email, password}),
      {
          headers: { 'Content-Type': 'application/json' }
      }            
  );

  console.log(response.data);
  setUser(response.data);
    }
  })


  return (
    <div>
       <h2> Olá {user} </h2>
    </div>
  )
}

export default Home
