 import { Link } from "react-router";

 import { StarIcon } from "lucide-react";
 import Button from "./Button";

import { useDispatch, useSelector } from "react-redux";
import { saveProductsThunk } from "../features/authThunk";
import UseProductAction from "../hooks/UseProductAction";
import toast from "react-hot-toast";
 function Card({ product   }) {
  const dispatch = useDispatch()
  const { saveProducts , user}= useSelector(state=> state.auth)
  const {handleAddToCart} = UseProductAction()
  const star = Math.floor(product?.rating || 0);

const isSave = saveProducts.some(p => p.id === product.id);

 const handleData= (e)=>{
   e.preventDefault(); 
e.stopPropagation();
if(!user) return alert("please") 
  dispatch((saveProductsThunk(product)))
  toast.success("save")
 }

  return (
    <div className="w-80 h-auto bg-gray-200 rounded-lg p-3 flex flex-col items-start shadow-lg ">

      <Link to={`/product/${product.id}`} className="relative">
        <img 
          className="w-72 h-52 p-3 hover:scale-105 transition-all duration-500 object-contain rounded-md"
          src={product?.images[0] || "https://via.placeholder.com/150"}
        />
        <Button onClick={handleData} className="px-2 py-1 bg-gray-300 cursor-pointer rounded-lg absolute top-3 right-2 " name={isSave?"saved":"save"}/>
      </Link>
    
      <h1>{product.title}</h1>

      <div className="flex w-full mt-2">

        <div className="flex-1">
          <p>${product.price}</p>

          <div className="flex gap-1">
            {[...Array(star)].map((_, index) => (
              <StarIcon key={index} size={16} fill="gold" stroke="gold" />
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-end items-center">
          <Button
          onClick={()=>handleAddToCart(product)}
            className="px-3 py-2 rounded-md bg-blue-600 text-white"
            name="Add cart"
          />
        </div>

      </div>
    </div>
  );
}

export default Card