import React, { useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useTheme } from "./context/ContextProvider";

export default function Layouts() {
  const {theme } = useTheme()
  const [searchText, setSearchText] = useState("")
  return (
    <div className={`min-h-screen flex flex-col ${theme}`}>
      <Header search={searchText} setSearchText={setSearchText}/>

      <main className="flex-1">
        <Outlet context={searchText}/>
      </main>

      <Footer />
    </div>
  );
}
