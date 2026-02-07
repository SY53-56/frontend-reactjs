import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'
import { Link } from 'react-router'

export default function login() {
  return (
    <div className='w-full bg-gray-300 h-screen flex justify-center items-center  '>
    
   <form className='w-[500px] bg-white h-auto px-5 py-5 flex  flex-col gap-4 border-none rounded-lg shadow-2xl' action="">
      <h1 className='text-4xl font-bold text-center'>Login here</h1>
    <Input name="email"  placeHolder="Enter your Email" type="email" label="Email"/>
    <Input name="password" placeHolder="Enter your password" type='password' label="Password"/>
    <Button  name="login" className="bg-cyan-600 text-2xl text-white py-1 rounded-lg"/>
    <p className='text-[18px]'>if you want to create new accounts <Link className='text-emerald-600' to="/signup">Signup</Link></p>
   </form> 
    </div>
  )
}
