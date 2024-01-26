import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
const ProductItem = [
  {
    icon1: "/product/1.svg",
    icon2: "/product/2.svg",
    title: "Full Home Interiors",
    description: "Get the estimate price for your full home interiors",
  },
  {
    icon1: "/product/3.svg",
    icon2: "/product/2.svg",
    title: "Kitchen",
    description: "Get costing for your kitchen interiors.",
  },
];
const Product = () => {
  return (
    <div className="flex max-w-7xl mx-auto text-center flex-col bg-[rgba(97,131,101,0.10)] py-[44px] px-[50px] gap-[35px] rounded-[36px]">
      <div className="max-w-[544px] text-[#000] text-[24px] font-bold leading-normal mx-auto ">
        <h3>
          Elevate your space! Request a home estimate and discover the cost of
          transforming your interiors into a masterpiece.
        </h3>
      </div>
      <div className="flex justify-between gap-[30px] md:gap-[13px] md:flex-row flex-col items-center">
        {ProductItem.map((item) => (
          <div
            key={item.title}
            className="flex md:w-1/2 w-full md:shadow-2xl shadow-lg border p-[41px] gap-[26px]"
          >
            <div className="flex flex-col gap-[13px]">
              <Image
                src={item.icon1}
                alt=""
                height={60}
                width={72}
                className="min-h-[60px] min-w-[72px]"
              />
              <Image
                src={item.icon2}
                alt=""
                height={54}
                width={54}
                className="min-h-[54px] min-w-[54px]"
              />
            </div>
            <div className="flex items-start justify-between flex-col text-left">
              <h4 className="text-[#000] font-bold leading-normal text-base">
                {item.title}
              </h4>
              <p className="text-[#333] text-base font-normal leading-[24px]">
                {item.description}
              </p>
              <Button variant="primary" className="mt-[22px]">
                Get Free Estimate
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
