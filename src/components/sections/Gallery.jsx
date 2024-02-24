"use client";
import React from "react";
import { Link } from "react-feather";
import Lottie from "react-lottie";
import l1 from "../../../public/pages/kitchen/4.json";
import l2 from "../../../public/pages/bedroom/5.json";
import l3 from "../../../public/pages/livingroom/5.json";
import l4 from "../../../public/pages/bathroom/15.json";
import l5 from "../../../public/pages/wardrobe/10.json";
import l6 from "../../../public/2.json";

const GalleryItem = [
  {
    title: "Modular Kitchen",
    url: "/modular-kitchen",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: l1,
    },
  },
];
const Gallery = () => {
  return (
    <div className="flex flex-wrap gap-5 items-center justify-center">
      {GalleryItem.map((item, index) => (
        <Link href={item.url} key={index}>
          <div
            className={`h-[300px] w-[320px] relative rounded-[8px] overflow-clip`}
          >
            <div>{/* <Lottie options={item.defaultOptions} /> */}</div>
            <div className="absolute bottom-0 text-white bg-black/60 w-full  left-0 drop-shadow-xl">
              {item.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
