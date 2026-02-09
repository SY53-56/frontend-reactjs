import React, { useState } from "react"
import Input from "../components/Input"
import Button from "../components/Button"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { signupThunk } from "../features/authThunk"

export default function Signup() {
  const { user, loading, error } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleForm = async e => {
    e.preventDefault()
    await dispatch(signupThunk(form))
    navigate("/")
  }

  return (
    <div className="w-full h-screen bg-gradient-to-br from-cyan-500 to-blue-600 flex justify-center items-center px-4">
      <form
        onSubmit={handleForm}
        className="w-full max-w-md bg-white px-6 py-8 flex flex-col gap-5 rounded-2xl shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Create your account ✨
        </h1>
        <p className="text-center text-gray-500 text-sm">
          Join us and start your journey
        </p>

        <Input
          name="username"
          value={form.username}
          onChange={handleChange}
          placeHolder="Enter your name"
          label="Username"
        />

        <Input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeHolder="Enter your email"
          type="email"
          label="Email"
        />

        <Input
          name="password"
          value={form.password}
          onChange={handleChange}
          placeHolder="Create a password"
          type="password"
          label="Password"
        />

        {error && (
          <p className="text-red-500 text-sm text-center">{error}</p>
        )}

        <Button
          type="submit"
          name={loading ? "Creating account..." : "Sign up"}
          className="bg-cyan-600 hover:bg-cyan-700 transition text-lg text-white py-2 rounded-xl"
          disabled={loading}
        />

        <p className="text-sm text-center text-gray-600">
          Already have an account?
          <Link
            to="/login"
            className="text-cyan-600 ml-1 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}
