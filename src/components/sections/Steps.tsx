import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Carousel from "../Carousel/Carousel";
import Lottie from "react-lottie";
import l1 from "../../../public/pages/kitchen/4.json";
import l2 from "../../../public/pages/bedroom/5.json";
import l3 from "../../../public/pages/livingroom/5.json";
import l4 from "../../../public/pages/bathroom/15.json";
import l5 from "../../../public/pages/wardrobe/10.json";
import l6 from "../../../public/2.json";
import Link from "next/link";

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
  {
    title: "Bedroom",
    url: "/bedroom",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: l2,
    },
  },
  {
    title: "Living Room",
    url: "/living-room",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: l3,
    },
  },
  {
    title: "Bathroom",
    url: "/bathroom",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: l4,
    },
  },
  {
    title: "Wardrobe",
    url: "/wardrobe",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: l5,
    },
  },
  {
    title: "Home Office",
    url: "/design-gallery",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: l6,
    },
  },
];
interface Step {
  name: string;
  description: string;
  line: boolean;
}

const Steps: React.FC = () => {
  const stepsItem: Step[] = [
    {
      name: "Uncover",
      description:
        "Go beyond modular design ideas as you explore with our experts.",
      line: true,
    },
    { name: "Enhance", description: "", line: true },
    {
      name: "Settle In",
      description:
        "Experience a seamless move-in with our stress-free civil work and installation services.",
      line: false,
    },
  ];

  const [active, setActive] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % stepsItem.length);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [stepsItem.length]);

  return (
    <div className="max-w-7xl mx-auto overflow-hidden my-20 p-5">
      <div className="text-[#222] text-[24px] font-bold leading-[50px] mb-10 text-center flex items-center justify-center flex-col gap-7">
        <h3 className="text-5xl font-bold">Our Designs</h3>
        <div className="flex flex-wrap gap-10 gap-y-20 items-center justify-between">
          {GalleryItem.map((item, index) => (
            <Link href={item.url} key={index}>
              <div
                className={`h-[300px] w-[300px] relative rounded-[8px] overflow-clip`}
              >
                <div>
                  <Lottie options={item.defaultOptions} />
                </div>
                <div className="absolute bottom-0 text-white bg-black/60 w-full  left-0 drop-shadow-xl">
                  {item.title}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
