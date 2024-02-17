"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import Footer from "@/components/Footer";
import Image from "next/image";
import Fading from "@/components/Carousel/Fading";
import Carousel from "@/components/Carousel/Carousel";
import Lottie from "react-lottie";
import l1 from "../../../../public/pages/bedroom/5.json";
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
      title: "Candy Clouds Girls’ Bedroom",
      img: ["/pages/bedroom/1.jpeg"],
    },
    {
      title: "Color-me-fun Unisex Kids’ Room",
      img: ["/pages/bedroom/2.jpeg"],
    },
    {
      title: "Boisterously Beige Master Bedroom",
      img: ["/pages/bedroom/3.jpeg"],
    },
    {
      title: "Bright and Bohemian Master Bedroom",
      img: ["/pages/bedroom/4.jpeg"],
    },
    {
      title: " ",
      desc: " ",
      img: [],
      lottie: <Lottie options={defaultOptions} height={400} width={350} />,
    },
    {
      title: "Minimally Modern Guest Bedroom",
      img: ["/pages/bedroom/6.webp"],
    },
    {
      title: "Simply Contemporary Master Bedroom",
      img: ["/pages/bedroom/7.webp"],
    },
    {
      title: "A Tryst With Browns Master Bedroom",
      img: ["/pages/bedroom/8.webp"],
    },
    {
      title: "The Royal Welcome Guest Bedroom",
      img: ["/pages/bedroom/9.webp"],
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
            } h-screen w-screen bg-[url(/pages/3.jpg)] bg-top bg-cover inset-0 -z-10`}
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
              Crafting designs for bedrooms that blend comfort and style
              seamlessly.
            </h3>
            <p className="text-gray-600 p-10 pl-0">
              A bedroom should serve as a tranquil and rejuvenating sanctuary,
              meticulously designed to enhance relaxation and promote restful
              sleep. Opt for a soothing color palette characterized by soft,
              neutral tones, instilling a sense of tranquility. Ensure the
              furniture is both comfortable and practical, with the bed taking
              center stage as the focal point. Additionally, personalize the
              space by incorporating artwork or photographs to imbue the room
              with a sense of individuality and ownership.
            </p>
          </motion.div>
        </div>
        <div className="w-full text-black   max-w-7xl grid grid-cols-12 mx-auto relative gap-5 h-auto my-10">
          <div className="col-span-12">
            <h3 className="font-bold text-3xl leading-loose tracking-widest">
              Bedroom Designs
            </h3>
            <p className="text-gray-600 p-10 pl-0">
              A bedroom is envisioned as a serene and calming retreat,
              meticulously crafted to foster relaxation and a peaceful sleep
              environment. Utilize a color scheme featuring soft, neutral tones
              to instill a sense of tranquility. Prioritize comfortable and
              functional furniture, with the bed serving as the central focus.
              To make the space uniquely yours, consider adding personal touches
              like artwork or photographs that reflect your individual style and
              create a warm, inviting ambiance.
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
            Crafting designs for bedrooms that blend comfort and style
            seamlessly.
          </h3>
          <p className="text-gray-600 p-10 pl-0">
            A bedroom should serve as a tranquil and rejuvenating sanctuary,
            meticulously designed to enhance relaxation and promote restful
            sleep. Opt for a soothing color palette characterized by soft,
            neutral tones, instilling a sense of tranquility. Ensure the
            furniture is both comfortable and practical, with the bed taking
            center stage as the focal point. Additionally, personalize the space
            by incorporating artwork or photographs to imbue the room with a
            sense of individuality and ownership.
          </p>
        </motion.div>
        <Lottie options={defaultOptions} />

        <div className="w-full text-black   max-w-7xl flex flex-wrap mx-auto relative gap-5 h-auto my-10 items-center justify-center p-5">
          <div className="col-span-12">
            <h3 className="font-bold text-3xl leading-loose tracking-widest">
              Bedroom Designs
            </h3>
            <p className="text-gray-600 p-10 pl-0">
              A bedroom is envisioned as a serene and calming retreat,
              meticulously crafted to foster relaxation and a peaceful sleep
              environment. Utilize a color scheme featuring soft, neutral tones
              to instill a sense of tranquility. Prioritize comfortable and
              functional furniture, with the bed serving as the central focus.
              To make the space uniquely yours, consider adding personal touches
              like artwork or photographs that reflect your individual style and
              create a warm, inviting ambiance.
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
