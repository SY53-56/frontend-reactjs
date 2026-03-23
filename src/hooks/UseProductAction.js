

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../features/cartSlice'
import toast from 'react-hot-toast'
export default function UseProductAction() {
    const {user}= useSelector(state=> state.auth)
  const {cart} = useSelector(state=> state.cart)
    const dispatch = useDispatch()
    const handleAddToCart = (product)=>{
      if (!user) {
  toast.error("Please login first");
  return;
}
const existItem = cart.map(item => item.id === product.id)
 if(existItem){
    toast.success("product is allready added", { id: "cart-exists"  });
 }
       dispatch(addCart(product))
      toast.success("Added to cart", { id: "cart-add" });
    }
  return {handleAddToCart}
}
