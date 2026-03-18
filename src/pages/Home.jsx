import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsThunk } from "../features/productThunk";
import Card from "../components/Card";
import img from "../assets/Spring Sale Promotion - Made with PosterMyWall.jpg";
import { Link, useOutletContext } from "react-router";
import Input from "../components/Input";
import { SearchCheckIcon, SearchIcon } from "lucide-react";

export default function Home() {
  const { products } = useSelector((state) => state.product);
  const { searchText, handleChange } =useOutletContext()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsThunk());
  }, [dispatch]);

  
  const photo = [
    {
      name: "furniture",
      img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600",
    },
    {
      name: "laptops",
      img: "https://plus.unsplash.com/premium_photo-1681302427948-2fd0eca629b1?w=600",
    },
    {
      name: "beauty",
      img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600",
    },
    {
      name: "smartphones",
      img: "https://images.unsplash.com/photo-1603184017968-953f59cd2e37?w=600",
    },
    {
      name: "fragrances",
      img: "https://images.unsplash.com/photo-1672848700906-2b8ca62639e4?w=600",
    },
    {
      name: "groceries",
      img: "https://images.unsplash.com/photo-1753288589313-3030a6d3c1d7?w=600",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Banner */}
<div className="lg:px-24 px-10 py-10">
  <div className="w-full mb-10 flex justify-center items-center border px-3.5  lg:hidden">
    <Input className="w-full border-none outline-none" value={searchText} name="search" id="search" onChange={(e)=> handleChange(e.target.value)} placeHolder="search your product"/>
   <SearchIcon size={28}/>
  </div>
  <div className="relative w-full h-96 lg:h-[420px] rounded-xl overflow-hidden shadow-lg">

    <img
      src={img}
      alt="Spring Sale Banner"
      className="w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">

      <h1 className="text-4xl font-bold mb-4">
        Spring Mega Sale
      </h1>

      <p className="mb-6 text-lg">
        Up to 50% Off on Top Products
      </p>

      <Link
        to="#Product"
        className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
      >
        Shop Now
      </Link>

    </div>
  </div>
</div>

      {/* Categories */}
      <div className="lg:px-24 px-6 mb-14">
        <h1 className="text-3xl font-bold mb-8">Shop by Category</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {photo.map((item, index) => (
            <Link key={index} to={`/products/${item.name}`}>
              <div className="bg-white rounded-xl shadow hover:shadow-xl transition p-4 flex flex-col items-center cursor-pointer group">

                <img
                  src={item.img}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-full mb-3 group-hover:scale-110 transition"
                />

                <p className="font-semibold capitalize text-gray-700">
                  {item.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Products */}
      <div id="Product"  className="lg:px-24 px-6 pb-20">
        <h1 className="text-3xl font-bold mb-10">Popular Products</h1>

        <div className="  grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
          {products.map((item) => (
            <Card product={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}