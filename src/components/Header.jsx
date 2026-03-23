import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate  } from "react-router-dom";
import { ShoppingCartIcon, MenuIcon, X, LayoutDashboardIcon, MessageCircleCodeIcon, MoreVertical, PhoneCallIcon, HistoryIcon, SaveAllIcon, SearchAlertIcon, SearchIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import Button from "./Button";
import Input from "./Input";
import toast from "react-hot-toast";



export default function Header({search, setSearchText , handleChange}) {
  const { user } = useSelector((state) => state.auth);
  const cart = useSelector(state=> state.cart.cart)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation()
  const [show, setShow] = useState(false);
  const [showBox, setShowBox]=useState(false)
  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };

const cartNavigate = useCallback(() => {
  if (cart.length === 0) {
    toast.error("There are no products");
  } else {
    navigate(`/user/${user?.id}`);
  }
}, [cart, user, navigate]);
  const handleBox= ()=>{
    setShowBox(prev=> !prev)
  }
 useEffect(()=>{
  if(location.pathname){
    setShowBox(false)
  }
  console.log("page navigate", location.pathname)

 },[location.pathname])
  



  return (
    <header className="w-full bg-slate-900 text-slate-100 border-b border-slate-800 sticky top-0 z-50">
      <div className="w-full relative mx-auto flex items-center border-b-2 border-emerald-500 lg:border-none justify-between px-6 lg:px-20 py-4">
        {/* Logo */}
        <Link to="/" className="text-4xl font-bold text-emerald-400 tracking-wide">
          Jedo
        </Link>

        {/* Desktop Navigation */}
       <div className="w-[500px] hidden lg:flex items-center rounded-md border px-3">
         <Input type="text"  className="w-full border-none outline-none " name="search" value={search} onChange={(e)=>handleChange(e.target.value)}  placeHolder="search product..."/>
         <SearchIcon className="cursor-pointer "   size={28}/>
       </div>
      
        {/* Desktop Right Section */}
        <div className="hidden lg:flex items-center gap-6">


          {user ? (
            <div className="flex items-center justify-center gap-4">
            
<button className="cursor-pointer" onClick={cartNavigate}>
  <div className="relative">
    <ShoppingCartIcon className="text-slate-300 hover:text-emerald-400" />
    <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
      {cart.length}
    </span>
  </div>
</button>
    <div className="rounded-full bg-white shadow-2xl px-3">
                <span className=" text-3xl   text-center  text-emerald-500 font-medium">{user.username.charAt(0)}</span>
    </div>
              <Button
              name=" Logout"
                onClick={handleLogout}
                className="rounded-xl bg-rose-600 py-2 hover:bg-rose-700 text-white px-4"
              />
               
      

                <button className="cursor-pointer" onClick={handleBox}><MoreVertical/></button>
                {showBox&& (<div className="w-60 absolute px-6 top-18 right-18 h-auto rounded-md flex gap-3 flex-col shadow-2xl items-center py-5 bg-white">
          <Link className="w-full" to={`/users/saveproduct/${user?.id}`}> <p className="flex w-full gap-1.5 cursor-pointer bg-gray-400 hover:bg-gray-700 px-3.5 rounded-md py-2"><SaveAllIcon/>SaveBoard</p></Link>
          <Link to={`/customerService/${user?.id}`} className="flex gap-1.5 w-full cursor-pointer bg-gray-400 hover:bg-gray-700 px-3.5 rounded-md py-2"><PhoneCallIcon/> customer service</Link>
                   <p className="flex gap-1.5 w-full cursor-pointer bg-gray-400 hover:bg-gray-700 px-3.5 rounded-md py-2"><HistoryIcon/> cart history</p>
                    <Link className="w-full" to={`/user/dashboard/${user?.id}`}> <p className="flex w-full gap-1.5 cursor-pointer bg-gray-400 hover:bg-gray-700 px-3.5 rounded-md py-2"><LayoutDashboardIcon/> DashBoard</p></Link>
                </div>)}
            </div>
          ) : (
            <div className="flex items-center gap-3">
           
                <Button name=" Login" to="/login" className="rounded-xl bg-emerald-500 hover:bg-emerald-600 py-2 text-white px-4">
                 
                </Button>
            
              
                <Button to="/signup"  name="  Signup" className="rounded-xl border py-2 bg-emerald-500 border-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-4" />
                
              
          
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
