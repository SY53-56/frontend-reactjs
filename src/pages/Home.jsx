import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsThunk } from '../features/productThunk'
import Card from '../components/Card'

export default function Home() {
  const {user}= useSelector(state=> state.auth)
  const {products}= useSelector(state=>state.product)
  const dispatch = useDispatch()
  console.log( "gdhhfjd",products)

  console.log(user)
 

  useEffect(()=>{
    dispatch(productsThunk())
    
  },[dispatch])

   
  return (
   <>
     
     <div className='w-full m-auto grid px-24 gap-y-10 mt-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
   {products.map(item=>(<Card product={item}/>))}
     </div>
   </>
  )
}
