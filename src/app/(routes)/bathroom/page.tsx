"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";
import Image from "next/image";
import Fading from "@/components/Carousel/Fading";
import Carousel from "@/components/Carousel/Carousel";
import Lottie from "react-lottie";
import l1 from "../../../../public/pages/bathroom/15.json";
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
      title: "Designing a bathroom with a monochrome marvel aesthetic.",
      desc: "Size | 13' X 12'",
      img: [
        "/pages/bathroom/1.jpeg",
        "/pages/bathroom/2.webp",
        "/pages/bathroom/3.webp",
      ],
    },
    {
      title: "Crafting a bathroom design inspired by Terrazzo Lagoon.      ",
      desc: "Size | 13' X 12'",
      img: [
        "/pages/bathroom/4.webp",
        "/pages/bathroom/5.jpeg",
        "/pages/bethroom/6.webp",
      ],
    },
    {
      title: "enchanted garden theme inpired bathroom design",
      desc: "Size | 13' X 12'",
      img: [
        "/pages/bathroom/7.jpeg",
        "/pages/bathroom/8.jpeg",
        "/pages/bathroom/9.webp",
      ],
    },
    {
      title: "Spruce Mirrored Bathroom Cabinet",
      desc: "Size | 13' X 12'",
      img: ["/pages/bathroom/10.webp"],
    },
    {
      title: " ",
      desc: " ",
      img: [],
      lottie: <Lottie options={defaultOptions} height={400} width={350} />,
    },
    {
      title: "Elegance Single Shutter Mirrored Bathroom",
      desc: "Size | 13' X 12'",
      img: ["/pages/bathroom/11.webp"],
    },
    {
      title: "Muse Common Area Vanity Unit",
      desc: "Size | 13' X 12'",
      img: ["/pages/bathroom/12.jpeg"],
    },
    {
      title: "Gleam Bathroom Cabinet with Open Storage ",
      desc: "Size | 13' X 12'",
      img: ["/pages/bathroom/13.webp"],
    },
    {
      title: "Opulence Extra Large Master Bathroom",
      desc: "Size | 13' X 12'",
      img: ["/pages/bathroom/14.jpeg"],
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
              Derrevo&#39;s Expertise in Transformative Bathroom Designs
            </h3>
            <p className="text-gray-600 p-10 pl-0">
              Designing a bathroom involves achieving an ideal blend of both
              aesthetics and practicality. With thoughtful planning and
              creativity, it&#39;s possible to craft a space that not only looks
              beautiful but also serves its purpose effectively.
            </p>
          </motion.div>
        </div>
        <div className="w-full text-black   max-w-7xl grid grid-cols-12 mx-auto relative gap-5 h-auto my-10">
          <div className="col-span-12">
            <h3 className="font-bold text-3xl leading-loose tracking-widest">
              Bathroom Designs
            </h3>
            <p className="text-gray-600 p-10 pl-0">
              Creating a well-designed bathroom involves striking the right
              balance between aesthetics and functionality. Through careful
              planning and a touch of creativity, it&#39;s possible to develop a
              space that is not just visually appealing but also serves its
              purpose effectively.
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
