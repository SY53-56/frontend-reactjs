import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartIcon, MenuIcon, X, LayoutDashboardIcon, MessageCircleCodeIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import Button from "./Button";

export default function Header() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };

  return (
    <header className="w-full bg-slate-900 text-slate-100 border-b border-slate-800 sticky top-0 z-50">
      <div className="w-full mx-auto flex items-center justify-between px-6 lg:px-20 py-4">
        {/* Logo */}
        <Link to="/" className="text-4xl font-bold text-emerald-400 tracking-wide">
          Jedo
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 font-medium text-slate-300">
          <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
          <Link to="/products" className="hover:text-emerald-400 transition-colors">Products</Link>
          <Link to="/customer" className="hover:text-emerald-400 transition-colors">Customer Service</Link>
          <Link to="/dashboard" className="hover:text-emerald-400 transition-colors">Dashboard</Link>
        </nav>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex items-center gap-6">
          <ShoppingCartIcon className="cursor-pointer text-slate-300 hover:text-emerald-400 transition-colors" />

          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-white font-medium">{user.username}</span>
              <Button
              name=" Logout"
                onClick={handleLogout}
                className="rounded-xl bg-rose-600 hover:bg-rose-700 text-white px-4"
              />
               
             
            </div>
          ) : (
            <div className="flex items-center gap-3">
           
                <Button name=" Login" to="/login" className="rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white px-4">
                 
                </Button>
            
              
                <Button to="/signup"  name="  Signup" className="rounded-xl border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-4" />
                
              
          
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShow(!show)}
          className="lg:hidden text-slate-200"
        >
          {show ? <X size={26} /> : <MenuIcon size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {show && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-800 px-6 py-6 space-y-6 text-slate-300">
          <Link to="/" className="block hover:text-emerald-400">Home</Link>
          <Link to="/products" className="block hover:text-emerald-400">Products</Link>
          <Link to="/customer" className="flex items-center gap-2 hover:text-emerald-400">
            <MessageCircleCodeIcon size={18} /> Customer Service
          </Link>
          <Link to="/dashboard" className="flex items-center gap-2 hover:text-emerald-400">
            <LayoutDashboardIcon size={18} /> Dashboard
          </Link>

          {user ? (
            <Button
              onClick={handleLogout}
              className="w-full rounded-xl bg-rose-600 hover:bg-rose-700 text-white"
            >
              Logout
            </Button>
          ) : (
            <div className="flex flex-col gap-3">
              <Link to="/login">
                <Button className="w-full rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="w-full rounded-xl border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900">
                  Signup
                </Button>
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
