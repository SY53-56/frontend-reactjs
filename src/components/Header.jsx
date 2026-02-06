import React from 'react'
import Button from './Button'

export default function Header() {
  return (
   <header className='w-full h-auto py-5  px-4 lg:px-28'>
    <div className=''>
        <h1>jedo</h1>
    </div>
    {/*desktop  */}
    <nav className='flex'>

    </nav>
    <div className='flex'>
        
       <Button to='/login' name="login"/>
       <Button to="/signup" name="signup"/>
    </div>
   </header>
  )
}
