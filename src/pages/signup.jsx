import React, { useState } from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { authSign } from '../features/authSlice'
export default function Signup() {
  const {user} = useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [form , setForm] = useState({
    username:"",
    email:"",
    password:"",
  })
   
  const handleChange =(e)=>{
   const  {name ,value} = e.target
   setForm(prev=>({...prev , [name]:value}))
  }

  const handleForm= async(e)=>{
  e.preventDefault()
   try{
    await  dispatch(authSign( form ))
      navigate("/")
   }catch(e){
    alert(e)
   }
  }

  return (
     <div className='w-full h-screen bg-gray-300 flex justify-center items-center  '>
    
   <form onSubmit={handleForm} className='w-[500px] bg-white h-aut o px-5 py-5 flex  flex-col gap-4 border-none rounded-lg shadow-2xl' action="">
      <h1 className='text-4xl font-bold text-center'>Signup here here</h1>
    <Input  name="username" value={form.username} onChange={handleChange} placeHolder="Enter your name" label="username"/>
    <Input name="email" value={form.email}   onChange={handleChange}  placeHolder="Enter your Email" type="email" label="Email"/>

    <Input name="password" value={form.password}  onChange={handleChange}  placeHolder="Enter your password" type='password' label="Password"/>
    <Button type="submit"  name="Signup" className="bg-cyan-600 text-2xl text-white py-1 rounded-lg"/>
    <p className='text-[18px]'>if you have already accounts <Link className='text-emerald-600' to="/login">Login</Link></p>
   </form> 
    </div>
  )
}
