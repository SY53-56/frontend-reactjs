import React, {  useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsThunk } from '../features/productThunk'
import Card from '../components/Card'

import { Link } from 'react-router'

export default function Home() {
  const {user}= useSelector(state=> state.auth)
  const {products}= useSelector(state=>state.product)
  const dispatch = useDispatch()
  const {cart} = useSelector(state=>state.cart)
  console.log( "gdhhfjd",products)

  console.log(user)
 console.log("cart",cart)

  useEffect(()=>{
    dispatch(productsThunk())
    
  },[dispatch])

 let photo =[
 {name:"furniture",img:"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlfGVufDB8fDB8fHww"}
  ,{name:"laptops",img:"https://plus.unsplash.com/premium_photo-1681302427948-2fd0eca629b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fHww"},
  {name:  "beauty",img:"https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
{name:"smartphones",img:  "https://images.unsplash.com/photo-1603184017968-953f59cd2e37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNtYXJ0cGhvbmV8ZW58MHx8MHx8fDA%3D"},
{name:"fragrances", img:"https://images.unsplash.com/photo-1672848700906-2b8ca62639e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JTIyZnJhZ3JhbmNlc3xlbnwwfHwwfHx8MA%3D%3D"},
{name:"groceries", img:"https://images.unsplash.com/photo-1753288589313-3030a6d3c1d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fCUyMmdyb2Nlcmllc3xlbnwwfHwwfHx8MA%3D%3D"}
 ]
  return (
   <>
  <div className='flex flex-col lg:px-24 px-16 gap-7'>
    <h1 className='text-3xl font-bold'>category of product </h1>
     <div className='w-full gap-10 grid grid-cols-2 lg:grid-cols-6'>
  {photo.map((item, index) => (
    <div
      className='flex flex-col items-center gap-5 px-5 py-3 bg-gray-300 rounded-md'
      key={index}
    >
     <Link to={`/products/${item.name}`}>
      <img
        src={item.img}
        className='w-36 lg:w-44 h-24 object-cover rounded-lg hover:scale-105 cursor-pointer transition-all duration-500'
        alt={item.name}
      />
     </Link>
      <p className="font-semibold capitalize">{item.name}</p>
    </div>
  ))}
</div>
  </div>

     <div className='w-full px-15  grid lg:px-24 gap-y-10 mt-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
   {products.map(item=>(<Card product={item}   key={item.id} />))}
     </div>
   </>
  )
}
