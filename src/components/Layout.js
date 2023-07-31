import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="layout relative overflow-hidden">
      <div className="w-[16.813rem] h-[16.813rem] opacity-[0.23999999463558197] rounded-[16.813rem] bg-circleBg blur-[9.375rem] absolute top-0 left-[-3.625rem] mt-[1.875rem] sm:block hidden"></div>

      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}

