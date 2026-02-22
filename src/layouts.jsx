import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { useTheme } from "./context/ContextProvider";

export default function Layouts() {
  const {theme } = useTheme()
  return (
    <div className={`min-h-screen flex flex-col ${theme}`}>
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
