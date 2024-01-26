"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Page = () => {
  const controls = useAnimation();
  useEffect(() => {
    // Add animation sequence here
    controls.start({
      scale: [1, 1.2, 1.5, 1], // Scaling animation
      opacity: [1, 0.5, 0, 0], // Fading out animation
      transition: { duration: 2, delay: 0.5 },
    });
  }, [controls]);

  return (
    <div className="relative overflow-x-hidden min-h-screen">
      <div className="z-10">
        <Navbar cutsomPage={true} />
      </div>
      <div className="absolute h-screen w-screen bg-[url(/pages/4.jpg)] bg-top bg-cover inset-0 -z-10" />
      <motion.div
        className="absolute h-screen w-screen bg-[url(/pages/2.svg)] bg-top bg-cover inset-0 -z-[8]"
        initial={{ scale: 0, opacity: 1 }}
        animate={controls}
      />
    </div>
  );
};

export default Page;
