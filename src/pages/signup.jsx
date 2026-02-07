import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
export default function signup() {
  return (
     <div className='w-full h-screen bg-gray-300 flex justify-center items-center  '>
    
   <form className='w-[500px] bg-white h-aut o px-5 py-5 flex  flex-col gap-4 border-none rounded-lg shadow-2xl' action="">
      <h1 className='text-4xl font-bold text-center'>Signup here here</h1>
    <Input  name="text" placeHolder="Enter your name" label="username"/>
    <Input name="email"  placeHolder="Enter your Email" type="email" label="Email"/>

    <Input name="password"  placeHolder="Enter your password" type='password' label="Password"/>
    <Button  name="login" className="bg-cyan-600 text-2xl text-white py-1 rounded-lg"/>
    <p className='text-[18px]'>if you have already accounts <Link className='text-emerald-600' to="/login">Login</Link></p>
   </form> 
    </div>
  )
}
