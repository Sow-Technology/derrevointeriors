"use client";
import Carousel from "@/components/Carousel/Carousel";
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
const images = [
  "/new/1.jpg",
  "/new/2.jpg",
  "/new/3.jpg",
  "/new/4.jpg",
  "/new/5.jpg",
  "/new/6.jpg",
   "/Carousel/20.jpg",
  "/Carousel/2.jpg",
  "/Carousel/3.jpg",
  "/Carousel/4.jpg",
  "/Carousel/5.jpg",
 
 
  "/Carousel/6.jpg",
  "/Carousel/7.jpg",
  "/Carousel/8.jpg",
  "/Carousel/9.jpg",
];
const images2 = [
  "/Carousel/10.jpg",
  "/Carousel/11.jpg",
  "/Carousel/12.jpg",
  "/Carousel/13.jpg",
  "/Carousel/14.jpg",
  "/Carousel/15.jpg",

  "/Carousel/16.jpg",
  "/Carousel/17.jpg",
  "/Carousel/18.jpg",
  "/Carousel/19.jpg",
   "/new/7.jpg",
  "/new/8.jpg",
  "/new/9.jpg",
  "/new/10.jpg",
  "/new/11.jpg",
  "/new/12.jpg",
  "/new/13.jpg",
];
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
      <div className="max-w-7xl mx-auto flex flex-col gap-20 py-10">
        <Carousel images={images} />

        <Carousel images={images2} />
      </div>
      <Footer />
    </div>
  );
}
