import React, { useState } from 'react'
import "./Login.scss"
import newRequest from '../../utils/newRequest'
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await newRequest.post("/auth/login", { username, password })
      localStorage.setItem("currentUser", JSON.stringify(res.data))
      navigate("/")
    } catch (error) {
      setError(error.response.data)
    }
  }

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="">Username</label>
        <input name='username' type="text" placeholder='Enter your username' onChange={e => setUsername(e.target.value)} />

        <label htmlFor="">Password</label>
        <input name='password' type="password" placeholder='Enter your password' onChange={e => setPassword(e.target.value)} />
        <button type='submit'>Login</button>
        {error && error}
      </form>
    </div>
  )
}

export default Login