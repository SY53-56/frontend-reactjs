import React, { memo, useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate  } from "react-router-dom";
import { ShoppingCartIcon, MenuIcon, X, LayoutDashboardIcon, MessageCircleCodeIcon, MoreVertical, PhoneCallIcon, HistoryIcon, SaveAllIcon, SearchAlertIcon, SearchIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authSlice";
import Button from "./Button";
import Input from "./Input";
import toast from "react-hot-toast";



 function Header({search , handleChange}) {
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
    setShow(false)
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
  <div className="fixed inset-0 z-100 flex w-full h-full">
    
    {/* Overlay */}
    <div 
      className="w-full bg-black/50"
      onClick={() => setShow(false)}
    />

    {/* Drawer */}
    <div className=" w-full bg-slate-900 h-full p-5 flex flex-col gap-6 animate-slide-in">
      
      {/* Close */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl text-emerald-400 font-bold">jedo</h2>
        <button onClick={() => setShow(false)}>
          <X />
        </button>
      </div>

      {/* Search */}
      <div className="flex items-center border rounded px-2">
        <input
          type="text"
          value={search}
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Search..."
          className="w-full bg-transparent outline-none p-2"
        />
        <SearchIcon size={18} />
      </div>

      {/* Links */}
      <div className="flex flex-col gap-4 text-slate-300">
        <Link to="/" onClick={() => setShow(false)}>Home</Link>
        <Link to="/products" onClick={() => setShow(false)}>Products</Link>

        {user && (
          <>
            <Link to={`/user/dashboard/${user?.id}`} onClick={() => setShow(false)}>
              Dashboard
            </Link>

            <Link to={`/customerService/${user?.id}`} onClick={() => setShow(false)}>
              Customer Service
            </Link>
          </>
        )}
      </div>

      {/* Bottom Section */}
      <div className="mt-auto">
        {user ? (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="bg-white text-emerald-500 rounded-full w-10 h-10 flex items-center justify-center">
                {user?.username?.charAt(0)}
              </div>
              <span>{user.username}</span>
            </div>

            <button
              onClick={handleLogout}
              className="bg-rose-600 py-2 rounded text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <Link to="/login">
              <button className="w-full bg-emerald-500 py-2 rounded text-white">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button className="w-full border border-emerald-400 py-2 rounded text-emerald-400">
                Signup
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  </div>
)}
    </header>
  );
}

export default memo(Header)