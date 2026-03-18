import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import { useTheme } from "./context/ContextProvider";
import { useLocation } from "react-router-dom";

export default function Layouts() {
  const {theme } = useTheme()
  const navigate= useNavigate()
  const location  = useLocation()
  const [searchText, setSearchText] = useState("")
 const handleChange = (value) => {
  setSearchText(value)

  if (value.trim()) {
    navigate(`/product/search/${encodeURIComponent(value)}`)
  } else {
    navigate("/") // or "/product/search"
  }
}

  useEffect(()=>{
   if (!location.pathname.startsWith("/product/search")) {
    setSearchText("")
  }
  },[location.pathname])
  return (
    <div className={`min-h-screen flex flex-col ${theme}`}>
      <Header search={searchText} handleChange={handleChange} setSearchText={setSearchText}/>

      <main className="flex-1">
        <Outlet context={{searchText , handleChange , setSearchText}} />
      </main>

      <Footer />
    </div>
  );
}
