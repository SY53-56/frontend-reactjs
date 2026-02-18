import React, { useCallback, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productsThunk } from '../features/productThunk'
import Card from '../components/Card'
import axios from 'axios'
import { addCart } from '../features/cartSlice'

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

 useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      // Now response.data will contain your items
      console.log("sahul new data", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchProducts();
}, []);
 
 const handleAddCart = useCallback((product)=>{
   try{
   dispatch(addCart(product))
   }catch(e){
    alert(e)
   }
 },[dispatch])
  return (
   <>
     <div className=''>

     </div>
     <div className='w-full px-15  grid lg:px-24 gap-y-10 mt-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
   {products.map(item=>(<Card product={item}   key={item.id} addCart={()=>handleAddCart(item)}/>))}
     </div>
   </>
  )
}
