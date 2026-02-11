import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'
import { StarIcon } from 'lucide-react';



export default function Card({product}) {
  return (
    <div className="w-80 h-auto rounded-lg p-3 flex flex-col items-start shadow-2xl">
      <Link to="/add">
        <img
          className="w-72 h-52 hover:scale-105 transition-all duration-500 object-contain rounded-md"
          src={ product?.image || ` https://th.bing.com/th/id/OIP.zQlff-hmX9FjYCLBI9fGpgHaE5?w=277&h=183&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3`}
        />
      </Link>

     <div className="flex w-full mt-2">
  {/* Left section */}
  <div className="flex-1">
    <h1>{product.title}</h1>
    <p>${product.price}</p>
    <div className="flex gap-1">
     {product.rating.rate}
    </div>
  </div>

  {/* Right section */}
  <div className="flex-1 flex justify-end items-center">
    <Button
      className="px-3 py-2 rounded-md bg-blue-600 text-white"
      name="Add cart"
    />
  </div>
</div>

    </div>
  );
}
