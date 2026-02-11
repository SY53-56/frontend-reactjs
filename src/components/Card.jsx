 import { Link } from "react-router";
 import { StarIcon } from "lucide-react";
 import Button from "./Button";
export default function Card({ product }) {

  const star = Math.floor(product?.rating?.rate || 0);

  return (
    <div className="w-80 h-auto bg-gray-200 rounded-lg p-3 flex flex-col items-start shadow-lg">

      <Link to={`/product/${product.id}`}>
        <img
          className="w-72 h-52 p-3 hover:scale-105 transition-all duration-500 object-contain rounded-md"
          src={product?.image || "https://via.placeholder.com/150"}
        />
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
            className="px-3 py-2 rounded-md bg-blue-600 text-white"
            name="Add cart"
          />
        </div>

      </div>
    </div>
  );
}
