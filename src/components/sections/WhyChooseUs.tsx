import Image from "next/image";
import React from "react";
const ChooseItem = [
  {
    icon: "/WhyChooseUs/Calendar.svg",
    title: "Delivery in 40 days*",
  },
  {
    icon: "/WhyChooseUs/Cost.svg",
    title: "No Hidden Costs",
  },
  {
    icon: "/WhyChooseUs/Warranty.svg",
    title: "Flat 10 Year Warranty",
  },
  {
    icon: "/WhyChooseUs/EMI.svg",
    title: "Easy EMIs",
  },
  {
    icon: "/WhyChooseUs/Designer.svg",
    title: "In-House Designers",
  },
];
const WhyChooseUs = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-7xl my-10 mx-auto px-[73px] py-10">
      <div className="text-[#222] text-[24px] font-bold leading-[24px] mb-10">
        <h3>Why Choose Us</h3>
      </div>
      <div className="flex items-center justify-between w-full">
        {ChooseItem.map((item) => (
          <div
            key={item.title}
            className="flex items-center justify-center flex-col"
          >
            <Image
              src={item.icon}
              alt=""
              width={75}
              height={83}
              className="h-[83px] w-auto"
            />
            <span className="text-xs text-center font-bold text-[#212529] leading-[19px]">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
