import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import EstimateForm from "@/components/sections/EstimateForm";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Navbar />
      <EstimateForm />
      <Footer />
    </div>
  );
};

export default page;
