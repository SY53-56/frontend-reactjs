import React from "react"
import Input from "../components/Input"
import Button from "../components/Button"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <div className="w-full h-screen bg-gradient-to-br from-cyan-500 to-blue-600 flex justify-center items-center px-4">
      <form className="w-full max-w-md bg-white px-6 py-8 flex flex-col gap-5 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome back 👋
        </h1>
        <p className="text-center text-gray-500 text-sm">
          Please sign in to your account
        </p>

        <Input
          name="email"
          type="email"
          label="Email"
          placeHolder="Enter your email"
        />

        <Input
          name="password"
          type="password"
          label="Password"
          placeHolder="Enter your password"
        />

        <Button
          type="submit"
          name="Login"
          className="bg-cyan-600 hover:bg-cyan-700 transition text-lg text-white py-2 rounded-xl"
        />

        <p className="text-sm text-center text-gray-600">
          Don’t have an account?
          <Link
            to="/signup"
            className="text-cyan-600 ml-1 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  )
}
