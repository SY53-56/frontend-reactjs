

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../features/cartSlice'
import toast from 'react-hot-toast'
export default function UseProductAction() {
    const {user}= useSelector(state=> state.auth)

    const dispatch = useDispatch()
    const handleAddToCart = (product)=>{
       if(!user) return
       dispatch(addCart(product))
       toast.success("addCart successfull")
    }
  return {handleAddToCart}
}
