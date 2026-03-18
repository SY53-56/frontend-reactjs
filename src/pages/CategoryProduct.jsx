import React, { useEffect,} from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryProduct } from "../features/productThunk";
import Card from "../components/Card";
import { useParams, useNavigate } from "react-router-dom";

export default function CategoryProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category: urlCategory } = useParams();
  const { category, loading } = useSelector((state) => state.product);

  const categories = [
    "beauty",
    "fragrances",
    "furniture",
    "groceries",
    "laptops",
    "smartphones",
  ];

  useEffect(() => {
    if (urlCategory) {
      dispatch(categoryProduct(urlCategory));
    }
  }, [dispatch, urlCategory]);

  return (
    <section className="w-full  flex flex-col lg:flex-row gap-8 px-6  lg:px-20 my-8">
      {/* Sidebar */}
      <aside className="w-full lg:w-72 bg-white   shadow-lg rounded-2xl p-6 h-96 lg:h-[85vh] overflow-y-auto   lg:sticky top-6 border">
      <div className="flex gap-9">
          <h2 className="text-2xl font-bold mb-6 border-b pb-3">
          Filter Products
        </h2>

      </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-gray-700">
            Categories
          </h3>

          {categories.map((item, index) => (
            <label
              key={index}
              className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg transition"
            >
              <input
                type="radio"
                name="category"
                checked={urlCategory === item}
                onChange={() => navigate(`/products/${item}`)}
                className="w-5 h-5 accent-black"
              />
              <span className="capitalize text-gray-700">{item}</span>
            </label>
          ))}
        </div>
      </aside>

      {/* Products Area */}
      <div className="flex-1 bg-gray-50 rounded-2xl p-6 border  overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6 capitalize">
          {urlCategory} Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <p className="text-2xl text-center font-bold">Loading...</p>
          ) : category.length > 0 ? (
            category.map((item) => (
              <Card key={item.id} product={item} />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </section>
  );
}
