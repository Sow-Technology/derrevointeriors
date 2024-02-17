"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";
import Image from "next/image";
import Fading from "@/components/Carousel/Fading";
import Carousel from "@/components/Carousel/Carousel";
import Lottie from "react-lottie";
import l1 from "../../../../public/pages/livingroom/5.json";
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
      title: "Chic Contrast Open-Plan Living Room Design",
      img: ["/pages/livingroom/1.webp", "/pages/livingroom/1.webp"],
    },
    {
      title: "Retro Revival Living Room Design",
      img: ["/pages/livingroom/2.jpeg", "/pages/livingroom/2.jpeg"],
    },
    {
      title: "Pastel Paradise Open-Plan Living Room",
      img: ["/pages/livingroom/3.webp", "/pages/livingroom/3.webp"],
    },
    {
      title: "Teal Treasures Living Room Design",
      img: ["/pages/livingroom/4.jpeg", "/pages/livingroom/4.jpeg"],
    },
    {
      title: " ",
      desc: " ",
      img: [],
      lottie: <Lottie options={defaultOptions} height={400} width={350} />,
    },
    {
      title: "Bohemian Jungle Living Room Design",
      img: ["/pages/livingroom/6.jpeg", "/pages/livingroom/6.jpeg"],
    },
    {
      title: "Urban Sunshine Living Room Design",
      img: ["/pages/livingroom/7.webp", "/pages/livingroom/7.webp"],
    },
    {
      title: "Urban Sunshine Living Room Design",
      img: ["/pages/livingroom/8.jpeg", "/pages/livingroom/8.jpeg"],
    },
    {
      title: "Artsy Opulence Living Room Design",
      desc: "Size | 13' X 12'",
      img: ["/pages/livingroom/9.webp", "/pages/livingroom/9.webp"],
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
            } h-screen w-screen bg-[url(/pages/5.jpg)] bg-top bg-cover inset-0 -z-10`}
            // style={{ position }}
          />
          <motion.div
            className="sticky h-screen w-screen bg-[url(/pages/2.svg)] bg-top bg-cover inset-0 -z-[8]"
            initial={{ scale: 0, opacity: 1 }}
            style={{ scale, opacity }}
          />

          <motion.div
            className="absolute z-0 bottom-[10%] right-[20%] p-5 rounded-md w-[400px] bg-white"
            style={{ opacity: hOpacity }}
          >
            <h3 className="font-bold text-3xl leading-loose tracking-widest">
              Unveiling Your Style: Living Room Designs for Every Taste
            </h3>
            <p className="text-gray-600 p-10 pl-0">
              Living room designs serve as a canvas for expressing personal
              style and preferences. Whether embracing a modern, minimalist vibe
              or opting for a cozy, traditional ambiance, the options are
              limitless. Crafting a living space that seamlessly combines
              functionality with style offers the ideal setting for relaxation,
              entertaining guests, and cherishing moments with family.
            </p>
          </motion.div>
        </div>
        <div className="w-full text-black   max-w-7xl grid grid-cols-12 mx-auto relative gap-5 h-auto my-10">
          <div className="col-span-12">
            <h3 className="font-bold text-3xl leading-loose tracking-widest">
              Living Room Designs
            </h3>
            <p className="text-gray-600 p-10 pl-0">
              Living room designs are a distinctive reflection of personal style
              and taste. Whether you lean towards the modern and minimalist or
              prefer the warmth of a cozy, traditional setting, the
              possibilities are boundless. Creating a well-designed living room
              opens the door to a space that is not only functional but also
              stylish, perfect for relaxation, entertaining guests, and
              cherished family moments.
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
      <div className="flex flex-col items-center w-full lg:hidden relative">
        <div className="w-full">
          <Navbar />
        </div>
        <motion.div
          className=" z-0  p-20 bg-green-300/30 rounded-xl w-auto my-5 "
          style={{ opacity: hOpacity }}
        >
          <h3 className="font-bold text-3xl leading-loose tracking-widest">
            Unveiling Your Style: Living Room Designs for Every Taste
          </h3>
          <p className="text-gray-600 p-10 pl-0">
            Living room designs serve as a canvas for expressing personal style
            and preferences. Whether embracing a modern, minimalist vibe or
            opting for a cozy, traditional ambiance, the options are limitless.
            Crafting a living space that seamlessly combines functionality with
            style offers the ideal setting for relaxation, entertaining guests,
            and cherishing moments with family.
          </p>
        </motion.div>
        <Lottie options={defaultOptions} />

        <div className="w-full text-black   max-w-7xl flex flex-wrap mx-auto relative gap-5 h-auto my-10 items-center justify-center p-5">
          <div className="col-span-12">
            <h3 className="font-bold text-3xl leading-loose tracking-widest">
              Living Room Designs
            </h3>
            <p className="text-gray-600 p-10 pl-0">
              Living room designs are a distinctive reflection of personal style
              and taste. Whether you lean towards the modern and minimalist or
              prefer the warmth of a cozy, traditional setting, the
              possibilities are boundless. Creating a well-designed living room
              opens the door to a space that is not only functional but also
              stylish, perfect for relaxation, entertaining guests, and
              cherished family moments.
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
                {/* {item.lottie} */}
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
