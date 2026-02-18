import React ,{useCallback}from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseCartProduct,
  decreaseProductCart,
  removeCart
} from "../features/cartSlice";
import Button from "../components/Button";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
    
  const handleIncreaseProduct= useCallback((item)=>{
  dispatch(increaseCartProduct({id:item.id}))
  },[dispatch])

   const handleDecearseProduct = useCallback((item)=>{
    dispatch(decreaseProductCart({id:item.id}))
   },[dispatch])

  return (
    <section className="w-full flex flex-col lg:flex-row gap-10 px-6 lg:px-20 mt-10">

      {/* 🛒 Product List */}
      <div className="flex-1  gap-4 flex  flex-col ">
        <h2 className="text-2xl font-bold mb-6">Your Products</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          cart.map(item => (
            <div
              key={item.id}
              className="flex items-center border justify-center gap-80  rounded-md  px-5 shadow-2xl border-b py-4"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-gray-500">${item.price}</p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
              <Button className="bg-gray-400 py-1 px-2 font-bold rounded-md"  onClick={()=>decreaseProductCart(item)}  name="-"/>

                <span>{item.quantity}</span>
            <Button className="bg-gray-400 py-1 px-2 rounded-md" onClick={()=>{handleIncreaseProduct(item)}} name="+"/>
                
              </div>

              {/* Remove */}
              <button
                onClick={() => dispatch(removeCart({ id: item.id }))}
                className="text-red-500 font-semibold"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* 💳 Order Summary */}
      <div className="w-full lg:w-96 border rounded-lg p-6 shadow-md h-fit">
        <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

        <div className="flex justify-between mb-4">
          <span>Subtotal</span>
          <span>${total.toFixed(2)}</span>
        </div>

        <div className="flex justify-between mb-4">
          <span>Shipping</span>
          <span>$10.00</span>
        </div>

        <div className="flex justify-between font-bold text-lg border-t pt-4">
          <span>Total</span>
          <span>${(total + 10).toFixed(2)}</span>
        </div>

        <button className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:opacity-90">
          Checkout
        </button>
      </div>

    </section>
  );
}
