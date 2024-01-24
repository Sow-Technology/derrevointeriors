import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
const InteriorItem = [
  {
    title: "Modular Kitchen",
    icon: "/Interior/1.svg",
  },
  {
    title: "Storage and wardrobe",
    icon: "/Interior/2.svg",
  },
  {
    title: "Crockery Units",
    icon: "/Interior/3.svg",
  },
  {
    title: "Space Saving Furniture",
    icon: "/Interior/4.svg",
  },
  {
    title: "Study Tables",
    icon: "/Interior/5.svg",
  },
  {
    title: "False Ceiling",
    icon: "/Interior/6.svg",
  },
  {
    title: "Lights",
    icon: "/Interior/7.svg",
  },
  {
    title: "Wallpaper",
    icon: "/Interior/8.svg",
  },
  {
    title: "Bathroom",
    icon: "/Interior/9.svg",
  },
  {
    title: "Pooja Unit",
    icon: "/Interior/10.svg",
  },
  {
    title: "Foyer Designs",
    icon: "/Interior/11.svg",
  },
  {
    title: "Movable furniture",
    icon: "/Interior/12.svg",
  },
  {
    title: "TV Units",
    icon: "/Interior/13.svg",
  },
  {
    title: "Kids Bedroom",
    icon: "/Interior/14.svg",
  },
  {
    title: "Wall Paint",
    icon: "/Interior/15.svg",
  },
];
const Interior = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-7xl my-10 mx-auto px-[73px] py-10 bg-[rgba(97,131,101,0.10)] rounded-[36px]">
      <div className="text-[#222] text-[24px] font-bold leading-[24px] mb-10">
        <h3>End-to-end interior solutions</h3>
      </div>
      <div className="flex items-center justify-start w-full flex-wrap gap-[10px] lg:gap-x-[159px] lg:gap-y-[60px]">
        {InteriorItem.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-center flex-col gap-1 h-[130px] w-[150px]"
          >
            <Image
              src={item.icon}
              alt=""
              width={100}
              height={150}
              className="w-[100px] max-h-[61px]"
            />
            <span className="text-[#222] text-sm lato-med text-center leading-[17px]">
              {item.title}
            </span>
          </div>
        ))}
      </div>
      <Button variant="primary">BOOK FREE DESIGN SESSION</Button>
    </div>
  );
};

export default Interior;
