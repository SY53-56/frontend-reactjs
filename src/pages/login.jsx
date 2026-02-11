import React, { useState } from "react"
import Input from "../components/Input"
import Button from "../components/Button"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { loginThunk } from "../features/authThunk"

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
 const [form,setForm] = useState({
  email:"",
  password:""
 })
const {loading,error} = useSelector(state=> state.auth)

 const handleOnClick = (e)=>{
     const {name  ,value} = e.target
     setForm(prev=> ({...prev, [name]:value}))
 }

const handleForm = async (e) => {
  e.preventDefault();

  try {
    await dispatch(loginThunk(form)).unwrap();
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
console.log(error)

  return (
    <div className="w-full h-screen bg-gradient-to-br from-cyan-500 to-blue-600 flex justify-center items-center px-4">
      <form onSubmit={handleForm} className="w-full max-w-md bg-white px-6 py-8 flex flex-col gap-5 rounded-2xl shadow-2xl">
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
          value={form.email}
          onChange={handleOnClick}
          placeHolder="Enter your email"
        />

        <Input
          name="password"
          type="password"
          label="Password"
          value={form.password}
              onChange={handleOnClick}
          placeHolder="Enter your password"
        />

        <Button
          type="submit"
          name={loading?"login account...":"login"}

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
        {error&& (<p>{error}</p>)}
      </form>
    </div>
  )
}
