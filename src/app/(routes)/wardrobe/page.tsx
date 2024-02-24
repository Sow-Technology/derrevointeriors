"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";
import Image from "next/image";
import Fading from "@/components/Carousel/Fading";
import Carousel from "@/components/Carousel/Carousel";
import Lottie from "react-lottie";
import l1 from "../../../../public/pages/wardrobe/10.json";
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
      title: "Stately in Greige Walk-in Wardrobe",
      desc: "Size | 13' X 12'",
      img: ["/pages/wardrobe/1.webp", "/pages/wardrobe/1.webp"],
    },
    {
      title: "The Floral Escape white design",
      desc: "Size | 13' X 12'",
      img: ["/pages/wardrobe/2.webp", "/pages/wardrobe/2.webp"],
    },
    {
      title: "The Grey wardrobe design",
      desc: "Size | 13' X 12'",
      img: ["/pages/wardrobe/3.webp", "/pages/wardrobe/3.webp"],
    },
    {
      title: "A Tinge of Earth Design",
      desc: "Size | 13' X 12'",
      img: ["/pages/wardrobe/4.webp", "/pages/wardrobe/4.webp"],
    },
    {
      title: " ",
      desc: " ",
      img: [],
      lottie: <Lottie options={defaultOptions} height={400} width={350} />,
    },
    {
      title: "The Grand Millennial Style Kids’ Wardrobe",
      desc: "Size | 13' X 12'",
      img: ["/pages/wardrobe/6.webp", "/pages/wardrobe/6.webp"],
    },
    {
      title: "Modern Meadow Master Wardrobe",
      desc: "Size | 13' X 12'",
      img: ["/pages/wardrobe/7.jpeg", "/pages/wardrobe/7.jpeg"],
    },
    {
      title: "Mallow Mauve Sliding Door Wardrobe",
      desc: "Size | 13' X 12'",
      img: ["/pages/wardrobe/8.webp", "/pages/wardrobe/8.webp"],
    },
    {
      title: "Ocean Blue Lacquered Glass ",
      desc: "Size | 13' X 12'",
      img: ["/pages/wardrobe/9.jpeg", "/pages/wardrobe/9.jpeg"],
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
            } h-screen w-screen bg-[url(/pages/6.jpg)] bg-top bg-cover inset-0 -z-10`}
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
              Elevate Your Bedroom Storage with Stylish Wardrobes
            </h3>
            <p className="text-gray-600 p-10 pl-0">
              Wardrobes play a pivotal role in bedroom design by providing
              storage and organization for clothing and personal items. They
              come in various designs, from straightforward single-door units to
              expansive multi-door armoires, constructed from materials like
              wood, metal, or plastic and adaptable to diverse decor styles.
              Elevate the functionality and aesthetics of your bedrooms by
              integrating these essential pieces – shall we?
            </p>
          </motion.div>
        </div>
        <div className="w-full text-black   max-w-7xl grid grid-cols-12 mx-auto relative gap-5 h-auto my-10">
          <div className="col-span-12">
            <h3 className="font-bold text-3xl leading-loose tracking-widest">
              Wardrobe Designs
            </h3>
            <p className="text-gray-600 p-10 pl-0">
              Wardrobes are indispensable furniture pieces, essential for
              storing and organizing clothing and personal belongings in any
              bedroom. From simple, single-door units to expansive, multi-door
              armoires, they come in diverse materials such as wood, metal, or
              plastic, and cater to a range of decor styles. Let&#39;s enhance
              the functionality and aesthetic appeal of your bedrooms together,
              shall we?
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
            Elevate Your Bedroom Storage with Stylish Wardrobes
          </h3>
          <p className="text-gray-600 p-10 pl-0">
            Wardrobes play a pivotal role in bedroom design by providing storage
            and organization for clothing and personal items. They come in
            various designs, from straightforward single-door units to expansive
            multi-door armoires, constructed from materials like wood, metal, or
            plastic and adaptable to diverse decor styles. Elevate the
            functionality and aesthetics of your bedrooms by integrating these
            essential pieces – shall we?
          </p>
        </motion.div>
        <Lottie options={defaultOptions} />

        <div className="w-full text-black   max-w-7xl flex flex-wrap mx-auto relative gap-5 h-auto my-10 items-center justify-center p-5">
          <div className="col-span-12">
            <h3 className="font-bold text-3xl leading-loose tracking-widest">
              Wardrobe Designs
            </h3>
            <p className="text-gray-600 p-10 pl-0">
              Wardrobes are indispensable furniture pieces, essential for
              storing and organizing clothing and personal belongings in any
              bedroom. From simple, single-door units to expansive, multi-door
              armoires, they come in diverse materials such as wood, metal, or
              plastic, and cater to a range of decor styles. Let&#39;s enhance
              the functionality and aesthetic appeal of your bedrooms together,
              shall we?
            </p>
          </div>
          {data.map((item, index) => (
            <div
              key={index}
              className="flex w-[300px] items-center justify-center  col-span-12 "
            >
              {" "}
              {item.img.length > 1 && (
                <div>
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

                  {/* {item.lottie} */}
                  <h2 className="text-2xl font-semibold">{item.title}</h2>
                  <p className="text-base text-gray-600">{item.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
