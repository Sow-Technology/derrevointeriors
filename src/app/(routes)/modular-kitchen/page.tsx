"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";
import Image from "next/image";
import Fading from "@/components/Carousel/Fading";
import Carousel from "@/components/Carousel/Carousel";
import Lottie from "react-lottie";
import l1 from "../../../../public/pages/kitchen/4.json";
const Page = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["center end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const hOpacity = useTransform(
    scrollYProgress,
    [0.5, 0.6, 0.8, 1],
    [0, 0.5, 1, 1]
  );
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 1.2, 1.5]);
  const navpos = useTransform(scrollYProgress, (pos) =>
    pos == 0.6 ? "relative" : "fixed"
  );
  const hpos = useTransform(scrollYProgress, (pos) =>
    pos >= 0.6 ? "relative" : "fixed"
  );
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: l1,
  };

  const data = [
    {
      title: "Contemporary Oasis Bedroom Design",
      desc: "Size | 13' X 12'",
      img: [
        "/pages/kitchen/1.jpeg",
        "/pages/kitchen/2.webp",
        "/pages/kitchen/3.webp",
      ],
    },
    {
      title: "Contemporary Oasis Bedroom Design",
      desc: "Size | 13' X 12'",
      img: [
        "/pages/kitchen/1.jpeg",
        "/pages/kitchen/2.webp",
        "/pages/kitchen/3.webp",
      ],
    },
    {
      title: "Contemporary Oasis Bedroom Design",
      desc: "Size | 13' X 12'",
      img: [
        "/pages/kitchen/1.jpeg",
        "/pages/kitchen/2.webp",
        "/pages/kitchen/3.webp",
      ],
    },
    {
      title: "Contemporary Oasis Bedroom Design",
      desc: "Size | 13' X 12'",
      img: [
        "/pages/kitchen/1.jpeg",
        "/pages/kitchen/2.webp",
        "/pages/kitchen/3.webp",
      ],
    },
    {
      title: " ",
      desc: " ",
      img: [],
      lottie: <Lottie options={defaultOptions} height={300} width={300} />,
    },
    {
      title: "Contemporary Oasis Bedroom Design",
      desc: "Size | 13' X 12'",
      img: [
        "/pages/kitchen/1.jpeg",
        "/pages/kitchen/2.webp",
        "/pages/kitchen/3.webp",
      ],
    },
    {
      title: "Contemporary Oasis Bedroom Design",
      desc: "Size | 13' X 12'",
      img: [
        "/pages/kitchen/1.jpeg",
        "/pages/kitchen/2.webp",
        "/pages/kitchen/3.webp",
      ],
    },
    {
      title: "Contemporary Oasis Bedroom Design",
      desc: "Size | 13' X 12'",
      img: [
        "/pages/kitchen/1.jpeg",
        "/pages/kitchen/2.webp",
        "/pages/kitchen/3.webp",
      ],
    },
    {
      title: "Contemporary Oasis Bedroom Design",
      desc: "Size | 13' X 12'",
      img: [
        "/pages/kitchen/1.jpeg",
        "/pages/kitchen/2.webp",
        "/pages/kitchen/3.webp",
      ],
    },
  ];

  return (
    <>
      <div className="relative overflow-x-clip lg:block hidden">
        <div ref={targetRef} className="min-h-screen relative">
          <motion.div
            className="z-10 fixed w-full"
            style={{ position: navpos }}
          >
            <Navbar cutsomPage={true} />
          </motion.div>
          <motion.div
            className={`${
              opacity.get() == 0 ? "relative" : "sticky"
            } h-screen w-screen bg-[url(/pages/1.jpg)] bg-top bg-cover inset-0 -z-10`}
            // style={{ position }}
          />
          <motion.div
            className="sticky h-screen w-screen bg-[url(/pages/2.svg)] bg-top bg-cover inset-0 -z-[8]"
            initial={{ scale: 0, opacity: 1 }}
            style={{ scale, opacity }}
          />
          {/* <motion.div
            style={{ opacity: hOpacity, position: hpos }}
            className="text-black text-4xl font-bold drop-shadow-lg fixed top-[40%] left-1/2 m-auto"
          >
            Modular Kitchen
          </motion.div> */}
          <motion.div
            className="absolute z-0 bottom-[10%] right-[20%] p-5 rounded-md w-[350px] bg-white"
            style={{ opacity: hOpacity }}
          >
            <h3 className="font-bold text-3xl leading-loose tracking-widest">
              Modular Kitchen Designs
            </h3>
            <p className="text-gray-600 p-10 pl-0">
              Elevate the heart of your home by entrusting Derrevo to transform
              your kitchen. Whether it&#39;s casual coffee gatherings or
              elaborate dinner parties, our comprehensive design and
              installation services ensure your kitchen becomes a blend of style
              and functionality. Are you prepared for the upgrade?
            </p>
          </motion.div>
        </div>
        <div className="w-full text-black   max-w-7xl grid grid-cols-12 mx-auto relative gap-5 h-auto my-10">
          <div className="col-span-12">
            <h3 className="font-bold text-3xl leading-loose tracking-widest">
              Modular Kitchen Designs
            </h3>
            <p className="text-gray-600 p-10 pl-0">
              Elevate the heart of your home by entrusting Derrevo to transform
              your kitchen. Whether it&#39;s casual coffee gatherings or
              elaborate dinner parties, our comprehensive design and
              installation services ensure your kitchen becomes a blend of style
              and functionality. Are you prepared for the upgrade?
            </p>
          </div>
          {data.map((item, index) => (
            <div
              key={index}
              className="flex w-[300px] items-center justify-center  col-span-4"
            >
              <div>
                {item.img.length > 0 && (
                  <Fading>
                    {item.img.map((data, index) => (
                      <div key={index}>
                        <Image
                          src={data}
                          alt=""
                          width={300}
                          height={300}
                          className="object-cover rounded-md"
                        />
                      </div>
                    ))}
                  </Fading>
                )}
                {item.lottie}
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="text-base text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white">
          <Footer />
        </div>
      </div>
      <div className="block lg:hidden relative">
        <Navbar />
        <motion.div
          className={`${
            opacity.get() == 0 ? "relative" : "sticky"
          } h-screen w-screen bg-[url(/pages/1.jpg)] bg-top bg-cover inset-0 -z-10`}
          // style={{ position }}
        />
        <motion.div
          className="absolute z-0 top-60 right-[20%] p-5 rounded-md w-[350px] bg-white"
          style={{ opacity: hOpacity }}
        >
          <h3 className="font-bold text-3xl leading-loose tracking-widest">
            Modular Kitchen Designs
          </h3>
          <p className="text-gray-600 p-10 pl-0">
            Elevate the heart of your home by entrusting Derrevo to transform
            your kitchen. Whether it&#39;s casual coffee gatherings or elaborate
            dinner parties, our comprehensive design and installation services
            ensure your kitchen becomes a blend of style and functionality. Are
            you prepared for the upgrade?
          </p>
        </motion.div>

        <div className="w-full text-black   max-w-7xl flex flex-wrap mx-auto relative gap-5 h-auto my-10 items-center justify-center p-5">
          <div className="col-span-12">
            <h3 className="font-bold text-3xl leading-loose tracking-widest">
              Modular Kitchen Designs
            </h3>
            <p className="text-gray-600 p-10 pl-0">
              Elevate the heart of your home by entrusting Derrevo to transform
              your kitchen. Whether it&#39;s casual coffee gatherings or
              elaborate dinner parties, our comprehensive design and
              installation services ensure your kitchen becomes a blend of style
              and functionality. Are you prepared for the upgrade?
            </p>
          </div>
          {data.map((item, index) => (
            <div
              key={index}
              className="flex w-[300px] items-center justify-center  col-span-12 "
            >
              <div>
                {item.img.length > 0 && (
                  <Fading>
                    {item.img.map((data, index) => (
                      <div key={index}>
                        <Image
                          src={data}
                          alt=""
                          width={300}
                          height={300}
                          className="object-cover rounded-md"
                        />
                      </div>
                    ))}
                  </Fading>
                )}
                {item.lottie}
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="text-base text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
