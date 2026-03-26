import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Dashboard() {
  const dispatch= useDispatch()

  const products =  useSelector(state=> state.product.products)
  const cart = useSelector(state=> state.cart.cart)
  console.log(cart)
  
  console.log(products)
  const isCartProduct = useMemo(()=>{
  const cartsId = new Set(cart.map(item=> item.id))
  return products.filter(item=> cartsId.has(item.id))
  },[products , cart])


  console.log("isCartDAta", isCartProduct)
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">Dashboard</h1>
        <div className="text-xs sm:text-sm text-slate-500">Overview</div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-8">
        
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm hover:shadow-md transition p-4 sm:p-5 flex justify-between items-center border border-slate-200">
          <div>
            <p className="text-xs sm:text-sm text-slate-500">Total Products</p>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">{products?.length || 0}</h2>
          </div>
          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">P</div>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm hover:shadow-md transition p-4 sm:p-5 flex justify-between items-center border border-slate-200">
          <div>
            <p className="text-xs sm:text-sm text-slate-500">In Cart</p>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">{isCartProduct.length||0}</h2>
          </div>
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">C</div>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm hover:shadow-md transition p-4 sm:p-5 flex justify-between items-center border border-slate-200">
          <div>
            <p className="text-xs sm:text-sm text-slate-500">Sold Quantity</p>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">0</h2>
          </div>
          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 font-bold">S</div>
        </div>

        <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm hover:shadow-md transition p-4 sm:p-5 flex justify-between items-center border border-slate-200">
          <div>
            <p className="text-xs sm:text-sm text-slate-500">Not in Cart</p>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800">0</h2>
          </div>
          <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600 font-bold">N</div>
        </div>
      </div>

      {/* Product Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
          <h2 className="text-lg sm:text-xl font-semibold text-slate-800">Product Details</h2>
          <input
            placeholder="Search product..."
            className="w-full sm:w-64 px-3 py-2 text-sm border rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b bg-slate-50 text-slate-600">
                <th className="p-3">Product</th>
                <th className="p-3">Price</th>
                <th className="p-3">Status</th>
                <th className="p-3">Quantity</th>
              </tr>
            </thead>

            <tbody>
              {/* Example Row */}
              <tr className="border-b hover:bg-slate-50 transition">
                <td className="p-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-lg"></div>
                  <span className="text-slate-700 font-medium">Product Name</span>
                </td>
                <td className="p-3 text-slate-700">$0</td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-600 font-medium">In Cart</span>
                </td>
                <td className="p-3 text-slate-700">1</td>
              </tr>

              <tr className="border-b hover:bg-slate-50 transition">
                <td className="p-3 flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-lg"></div>
                  <span className="text-slate-700 font-medium">Product Name</span>
                </td>
                <td className="p-3 text-slate-700">$0</td>
                <td className="p-3">
                  <span className="px-2 py-1 text-xs rounded-full bg-rose-100 text-rose-600 font-medium">Not Added</span>
                </td>
                <td className="p-3 text-slate-700">0</td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
