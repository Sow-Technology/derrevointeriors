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
      lottie: <Lottie options={defaultOptions} height={400} width={350} />,
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
            } h-screen w-screen bg-[url(/pages/4.jpg)] bg-top bg-cover inset-0 -z-10`}
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
              Derrevo&#39;s Expertise in Transformative Kitchen Designs
            </h3>
            <p className="text-gray-600 p-10 pl-0">
              Enhance the focal point of your home by relying on Derrevo to
              revamp your kitchen. Whether you&#39;re hosting casual coffee
              meet-ups or elaborate dinner parties, our extensive design and
              installation services guarantee that your kitchen seamlessly
              combines style and practicality. Are you ready for the makeover?
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
      <div className="flex flex-col items-center w-full lg:hidden relative">
        <div className="w-full">
          <Navbar />
        </div>
        <motion.div
          className=" z-0  p-20 bg-green-300/30 rounded-xl w-auto my-5 "
          style={{ opacity: hOpacity }}
        >
          <h3 className="font-bold text-3xl leading-loose tracking-widest">
            Derrevo&#39;s Expertise in Transformative Kitchen Designs
          </h3>
          <p className="text-gray-600 p-10 pl-0">
            Enhance the focal point of your home by relying on Derrevo to revamp
            your kitchen. Whether you&#39;re hosting casual coffee meet-ups or
            elaborate dinner parties, our extensive design and installation
            services guarantee that your kitchen seamlessly combines style and
            practicality. Are you ready for the makeover?
          </p>
        </motion.div>
        <Lottie options={defaultOptions} />

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
