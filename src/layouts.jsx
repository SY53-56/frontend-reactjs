import React, { useState } from "react";
import Header from "./components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import { useTheme } from "./context/ContextProvider";

export default function Layouts() {
  const {theme } = useTheme()
  const navigate= useNavigate()
  const [searchText, setSearchText] = useState("")
  const handleChange =(value)=>{
  setSearchText(value)
  if(value.length){
 navigate(`/product/search/${value}`)
  }
  
 
 }

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
