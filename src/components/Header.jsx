import React from 'react'
import Button from './Button'
import Icon from './Icon'
import { ShoppingCartIcon } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { logout } from '../features/authSlice'

export default function Header() {
  const {user , users}= useSelector((state)=>state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleLogout= async()=>{
       await dispatch(logout())
       navigate("/")
  }
console.log(user)
console.log(users)
  return (
   <header className='w-full bg-gray-950 text-white flex justify-between items-center h-auto py-5  px-4 lg:px-28'>
    <div className=''>
        <h1 className='text-4xl font-bold'>jedo</h1>
    </div>
    {/*desktop  */}
    <nav className='flex'>
      <ul className='flex gap-6'>
        <li><a href="#">Home</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/customer">Customer service</a></li>
              <li><a href="/dashboard">Dashboard</a></li>
      </ul>
    </nav>
    <div className='flex gap-5'>
        <Icon Icon={ShoppingCartIcon} size={24}/>
     {user ?(
      <div className='flex gap-4'>
          <p>{user.username}</p>
          <Button onClick={handleLogout} className="px-3 py-1 rounded-md bg-amber-500 text-white hover:bg-amber-600 transition-all duration-300" name="logout"/>
      </div>
     ): <div className='flex gap-4'>
        <Button to='/login' className=" px-3.5 py-1 rounded-md  transition-all duration-300 bg-emerald-400 hover:bg-amber-600" name="login"/>
       <Button to="/signup"  className=" px-3.5 py-1 rounded-md  transition-all duration-300 bg-fuchsia-600 hover:bg-fuchsia-700" name="signup"/>
       
      </div>}
    </div>
   </header>
  )
}
