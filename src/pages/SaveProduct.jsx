import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
export default function SaveProduct() {
  const {saveProducts} = useSelector(state => state.auth)
  console.log(saveProducts)
  return (
 <main>
 <h1 className='text-3xl text-center font-bold mt-5'>your save product</h1>
  <div className='w-full px-11 lg:px-28 my-10 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
   {saveProducts.map(product =>(
     <Card keys={product.id} product={product}/>
   ))}
   
  </div>
 </main> 
  )
}
