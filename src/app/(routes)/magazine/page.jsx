"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Lottie from "react-lottie";
import l1 from "../../../../public/pages/magazine/1.json";
const options = {
  loop: true,
  autoplay: true,
  animationData: l1,
};
const page = () => {
  return (
    <div className="max-h-screen h-screen">
      <Navbar />
      <div className="h-[600px]">
        <Lottie options={options} />
      </div>
      <Footer />
    </div>
  );
};

export default page;
