"use client";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import DesignSession from "@/components/sections/DesignSession";
import Hero from "@/components/sections/Hero";
import Interior from "@/components/sections/Interior";
import Product from "@/components/sections/Product";
import Steps from "@/components/sections/Steps";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  });
  if (isLoading) return <Loading />;
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <WhyChooseUs />
      <DesignSession />
      <Interior />
      <Steps />
      <Footer />
    </div>
  );
}
