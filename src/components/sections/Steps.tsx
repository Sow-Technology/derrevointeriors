import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Carousel from "../Carousel/Carousel";

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
  const images = [
    "/Carousel/20.jpg",
    "/Carousel/2.jpg",
    "/Carousel/3.jpg",
    "/Carousel/4.jpg",
    "/Carousel/5.jpg",
    "/Carousel/6.jpg",
    "/Carousel/7.jpg",
    "/Carousel/8.jpg",
    "/Carousel/9.jpg",
  ];
  const images2 = [
    "/Carousel/10.jpg",
    "/Carousel/11.jpg",
    "/Carousel/12.jpg",
    "/Carousel/13.jpg",
    "/Carousel/14.jpg",
    "/Carousel/15.jpg",
    "/Carousel/16.jpg",
    "/Carousel/17.jpg",
    "/Carousel/18.jpg",
    "/Carousel/19.jpg",
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
    <div className="max-w-7xl mx-auto overflow-hidden my-20">
      <div>
        <h3 className="text-[#222] text-center text-2xl font-bold mb-[69px]">
          Transform your entire home interior with just 3 simple steps.
        </h3>
        <div
          className={`flex justify-center items-center ml-[40%] relative pb-20 `}
        >
          {stepsItem.map((step, i) => (
            <div key={i} className="flex w-full items-start flex-col">
              <div className="flex w-full items-center h-[41px]">
                <div
                  className={`h-[41px] w-[41px] rounded-full flex items-center justify-center p-4 font-bold leading-[29px] text-xl ${
                    active >= i ? "bg-[#618365] text-white" : "bg-[#D9D9D9]"
                  }`}
                >
                  {i + 1}
                </div>
                {step.line && (
                  <div
                    className={`h-[5px] w-full ${
                      active > i ? "bg-[#618365]" : "bg-[#D9D9D9]"
                    }`}
                  />
                )}
              </div>
              <div className="absolute top-10 left-0 text-2xl font-bold leading-[29px] mt-[14px] w-[80%]">
                {active === i && <div>{step.name}</div>}
                {active === i && (
                  <div className="text-base">{step.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="mt-20 lg:mt-0 lg:mb-[69px]">
          <Carousel images={images} />
        </div>
        <div>
          <Carousel images={images2} />
        </div>
      </div>
    </div>
  );
};

export default Steps;
