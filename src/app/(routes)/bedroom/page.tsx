"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";

const Page = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["center end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const hOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.8, 1, 1.1],
    [0, 0.5, 1, 1, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1.2, 1.5]);
  const navpos = useTransform(scrollYProgress, (pos) =>
    pos == 0.6 ? "relative" : "fixed"
  );
  const hpos = useTransform(scrollYProgress, (pos) =>
    pos == 0.6 ? "relative" : "fixed"
  );
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  return (
    <>
      <div className="relative overflow-x-clip lg:block hidden">
        <div ref={targetRef} className="min-h-screen">
          <motion.div
            className="z-10 fixed w-full"
            style={{ position: navpos }}
          >
            <Navbar cutsomPage={true} />
          </motion.div>
          <motion.div
            className={`${
              opacity.get() == 0 ? "relative" : "sticky"
            } h-screen w-screen bg-[url(/pages/3.jpg)] bg-top bg-cover inset-0 -z-10`}
            // style={{ position }}
          />
          <motion.div
            className="sticky h-screen w-screen bg-[url(/pages/2.svg)] bg-top bg-cover inset-0 -z-[8]"
            initial={{ scale: 0, opacity: 1 }}
            style={{ scale, opacity }}
          />
          <motion.div
            style={{ opacity: hOpacity, position: hpos }}
            className="text-black text-4xl font-bold drop-shadow-lg fixed top-[40%] left-1/2 m-auto"
          >
            Modular Kitchen
          </motion.div>
        </div>

        <div className="bg-white">
          <Footer />
        </div>
      </div>
      <div className="block lg:hidden">
        <Navbar />
        <motion.div
          className={`${
            opacity.get() == 0 ? "relative" : "sticky"
          } h-screen w-screen bg-[url(/pages/3.jpg)] bg-top bg-cover inset-0 -z-10`}
          // style={{ position }}
        />
        <motion.div
          style={{ opacity: hOpacity, position: hpos }}
          className="text-black text-4xl font-bold drop-shadow-lg absolute mb-10 top-[30%] left-1/2 m-auto"
        >
          Modular Kitchen
        </motion.div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
