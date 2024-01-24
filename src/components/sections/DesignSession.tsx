import Image from "next/image";
import React from "react";
const DesignItem = [
  {
    title: "Step 1. Meet Your Designer",
    icon: "/DesignSession/1.svg",
  },
  {
    title: "Step 2. Walkthrough Our Portfolio",
    icon: "/DesignSession/2.svg",
  },
  {
    title: "Step 3. Get an Instant Quote",
    icon: "/DesignSession/3.svg",
  },
];
const DesignSession = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-7xl my-10 mx-auto px-[73px] py-10">
      <div className="text-[#222] text-[24px] font-bold leading-[24px] mb-10">
        <h3>What is a Design Session ?</h3>
      </div>
      <div className="flex items-center justify-between w-full">
        {DesignItem.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-center flex-col gap-1"
          >
            <Image
              src={item.icon}
              alt=""
              width={500}
              height={150}
              className="h-[150px] w-auto"
            />
            <span className="text-[#212529] text-base text-center leading-[19px]">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignSession;
