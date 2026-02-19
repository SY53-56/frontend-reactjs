import React from "react";
import { Link } from "react-router-dom";
import { FacebookIcon, InstagramIcon, TwitchIcon } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6 md:px-20">
      
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold text-emerald-400 mb-4">
            Jedo
          </h1>
          <p className="text-gray-400 leading-relaxed">
            Shop whatever you want because it’s available at the lowest price.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-emerald-400 transition">
             <FacebookIcon/>
            </a>
            <a href="#" className="hover:text-emerald-400 transition">
            <InstagramIcon/>
            </a>
            <a href="#" className="hover:text-emerald-400 transition">
              <TwitchIcon/>
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Products
          </h2>
          <ul className="space-y-2">
            <li><Link to="/products/smartphones" className="hover:text-emerald-400">Smartphones</Link></li>
            <li><Link to="/products/laptops" className="hover:text-emerald-400">Laptops</Link></li>
            <li><Link to="/products/furniture" className="hover:text-emerald-400">Furniture</Link></li>
            <li><Link to="/products/groceries" className="hover:text-emerald-400">Groceries</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Company
          </h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-emerald-400">Home</Link></li>
            <li><Link to="/product" className="hover:text-emerald-400">All Products</Link></li>
            <li><Link to="/cart" className="hover:text-emerald-400">Cart</Link></li>
            <li><Link to="/login" className="hover:text-emerald-400">Login</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">
            Contact
          </h2>
          <ul className="space-y-2 text-gray-400">
            <li>Email: support@jedo.com</li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: India</li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Jedo. All rights reserved.
      </div>
    </footer>
  );
}
