import React, { useState } from 'react'
import "./Register.scss"
import upload from '../../utils/upload'
import newRequest from "../../utils/newRequest"
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [file, setFile] = useState(null)
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const url = await upload(file)
    try {
      await newRequest.post("/auth/register", {
        ...user,
        img: url
      })
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>Sign Up a new account</h1>
          <label htmlFor="">Username</label>
          <input
            name="username"
            type="text"
            placeholder="Enter your username"
            onChange={handleChange}
          />
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            onChange={handleChange}
          />
          <label htmlFor="">Password</label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
          />
          <label htmlFor="">Profile Picture</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])} />
          <label htmlFor="">Country</label>
          <input
            name="country"
            type="text"
            placeholder="Enter your country"
            onChange={handleChange}
          />
          <button type="submit">Register</button>
        </div>
        <div className="right">
          <h1>Become a seller</h1>
          <div className="toggle">
            <label htmlFor="">Activate the seller account</label>
            <label className="switch">
              <input
                type="checkbox"
                onChange={handleSeller}
              />
              <span className="slider round"></span>
            </label>
          </div>
          {user.isSeller && (
            <>
              <label htmlFor="">Phone Number</label>
              <input
                name="phone"
                type="text"
                placeholder="+62 081 234 567"
                onChange={handleChange}
              />
              <label htmlFor="">Description</label>
              <textarea
                placeholder="Enter a short description of yourself"
                name="desc"
                cols="30"
                rows="10"
                onChange={handleChange}
              ></textarea>
            </>
          )}
        </div>
      </form>
    </div>
  )
}

export default Register