import React, { useEffect } from "react";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { singleProduct } from "../features/productThunk";
import { useParams } from "react-router";

export default function ShowProducts() {
  const dispatch = useDispatch()
  const {id} = useParams()
   const {product , products , loading} = useSelector(state=> state.product)
   console.log(  'sahul',product)
    console.log(products)
    useEffect(()=>{
      dispatch(singleProduct(id))
    },[dispatch ])

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      {loading ?(<p className="text-center text-5xl font-bold">Loading .....</p>):(
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 grid md:grid-cols-2 gap-10 items-center">
        {/* Product Image */}
        <div className="w-full bg-gray-100 rounded-2xl p-6 flex justify-center items-center">
          <img
            className="max-h-[450px] object-contain rounded-xl"
            src={ product.image ||`https://images.unsplash.com/photo-1713470599405-3ca0ae1363f8?q=80&w=1074&auto=format&fit=crop`}
            alt="Product"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
           {product.title}
          </h1>

          <p className="text-gray-600 leading-relaxed text-base">
          {product.description}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-indigo-600">
              ${product.price}
            </span>
            <span className="text-sm bg-green-100 text-green-600 px-3 py-1 rounded-full">
              In Stock
            </span>
          </div>

          <div className="flex gap-4 mt-4">
            <Button
              className="px-6 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white"
              name="Add to Cart"
            />

            <Button
              className="px-6 py-3 rounded-2xl border border-gray-300 bg-white hover:bg-gray-100 text-gray-700"
              name="Buy Now"
            />
          </div>
        </div>
      </div>
      )}
    </section>
  );
}
