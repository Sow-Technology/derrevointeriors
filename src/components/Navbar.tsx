"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
interface NavItem {
  name: string;
  link: string;
}

// Define the prop type for Navbar
interface NavbarProps {
  cutsomPage?: boolean;
}

const NavItem = [
  {
    name: "Design Gallery",
    link: "/design-gallery",
  },
  {
    name: "Modular Kitchen",
    link: "/modular-kitchen",
  },
  {
    name: "Wardrobe",
    link: "/wardrobe",
  },
  {
    name: "Bedroom",
    link: "/bedroom",
  },
  {
    name: "Living Room",
    link: "/living-room",
  },
  {
    name: "Bathroom",
    link: "/bathroom",
  },
  {
    name: "Magazine",
    link: "/magazine",
  },
];
const Navbar: React.FC<NavbarProps> = ({ cutsomPage }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="flex justify-between items-center mx-auto max-w-7xl py-5 relative px-7  ">
      <div className="flex items-center justify-center h-full">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt="logo"
            height={94}
            width={79}
            className="h-[94px] w-[79px]"
          />
        </Link>
      </div>
      <div className="hidden lg:flex flex-col items-end gap-[26px] ">
        <Link href="/contact">
          <div className="flex items-center text-[#E71C24] text-xs font-[500] leading-[22px] tracking-[-0.12px] gap-[2.2px] cursor-pointer hover:scale-105 transition-transform bg-white rounded-3xl p-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="11"
              height="18"
              viewBox="0 0 11 18"
              fill="none"
            >
              <path
                d="M5.5 4.1875C3.23125 4.1875 1.375 6.00938 1.375 8.27813V9.48125C1.375 9.51562 1.375 9.51562 1.375 9.55C1.375 9.58437 1.375 9.65313 1.375 9.6875C1.375 10.65 2.13125 11.4062 3.09375 11.4062C3.3 11.4062 3.4375 11.2688 3.4375 11.0625V8.3125C3.4375 8.10625 3.3 7.96875 3.09375 7.96875C2.71563 7.96875 2.3375 8.10625 2.0625 8.3125V8.24375C2.0625 6.3875 3.60938 4.875 5.5 4.875C7.39062 4.875 8.9375 6.3875 8.9375 8.27813V8.3125C8.6625 8.10625 8.28438 7.96875 7.90625 7.96875C7.7 7.96875 7.5625 8.10625 7.5625 8.3125V11.0625C7.5625 11.2688 7.7 11.4062 7.90625 11.4062C8.14687 11.4062 8.3875 11.3375 8.59375 11.2688C8.25 11.9906 7.63125 12.5406 6.875 12.85C6.875 12.8156 6.875 12.8156 6.875 12.7812C6.875 12.575 6.7375 12.4375 6.53125 12.4375H5.5C5.29375 12.4375 5.15625 12.575 5.15625 12.7812V13.4688C5.15625 13.675 5.29375 13.8125 5.5 13.8125C7.76875 13.8125 9.625 12.025 9.625 9.825V9.48125V8.65625V8.27813C9.625 6.00938 7.76875 4.1875 5.5 4.1875Z"
                fill="#E71C24"
              />
            </svg>
            Customer Support
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="18"
              viewBox="0 0 12 18"
              fill="none"
            >
              <path
                d="M8.8074 7.39606L5.59908 10.6044L2.39075 7.39606"
                fill="white"
              />
              <path
                d="M8.8074 7.39606L5.59908 10.6044L2.39075 7.39606"
                stroke="#E71C24"
                strokeWidth="1.375"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
        <div
          className={` text-[13px] font-[500] leading-[22px] tracking-[-0.12px] gap-[25px] flex lato-med  ${
            cutsomPage
              ? "text-white bg-[#618365] p-3 px-7 rounded-3xl"
              : "text-[#4A4A4A]"
          }`}
        >
          {NavItem.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              className="hover:scale-105 transition-transform"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div>
          <Link href="/estimate">
            <Button variant="primary">Get Free Estimate</Button>
          </Link>
        </div>
      </div>
      <div
        className="cursor-pointer block lg:hidden"
        onClick={() => setModalOpen(!modalOpen)}
      >
        <Image src="/menu.png" alt="" width={30} height={30} />
      </div>
      {modalOpen && (
        <div className="glassmorphism p-5 top-14 right-32 flex flex-col absolute gap-5 px-10 rounded-lg">
          <Link href="/contact">
            <div className="flex items-center text-[#E71C24] text-xs font-[500] leading-[22px] tracking-[-0.12px] gap-[2.2px] cursor-pointer hover:scale-105 transition-transform ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="18"
                viewBox="0 0 11 18"
                fill="none"
              >
                <path
                  d="M5.5 4.1875C3.23125 4.1875 1.375 6.00938 1.375 8.27813V9.48125C1.375 9.51562 1.375 9.51562 1.375 9.55C1.375 9.58437 1.375 9.65313 1.375 9.6875C1.375 10.65 2.13125 11.4062 3.09375 11.4062C3.3 11.4062 3.4375 11.2688 3.4375 11.0625V8.3125C3.4375 8.10625 3.3 7.96875 3.09375 7.96875C2.71563 7.96875 2.3375 8.10625 2.0625 8.3125V8.24375C2.0625 6.3875 3.60938 4.875 5.5 4.875C7.39062 4.875 8.9375 6.3875 8.9375 8.27813V8.3125C8.6625 8.10625 8.28438 7.96875 7.90625 7.96875C7.7 7.96875 7.5625 8.10625 7.5625 8.3125V11.0625C7.5625 11.2688 7.7 11.4062 7.90625 11.4062C8.14687 11.4062 8.3875 11.3375 8.59375 11.2688C8.25 11.9906 7.63125 12.5406 6.875 12.85C6.875 12.8156 6.875 12.8156 6.875 12.7812C6.875 12.575 6.7375 12.4375 6.53125 12.4375H5.5C5.29375 12.4375 5.15625 12.575 5.15625 12.7812V13.4688C5.15625 13.675 5.29375 13.8125 5.5 13.8125C7.76875 13.8125 9.625 12.025 9.625 9.825V9.48125V8.65625V8.27813C9.625 6.00938 7.76875 4.1875 5.5 4.1875Z"
                  fill="#E71C24"
                />
              </svg>
              Customer Support
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="18"
                viewBox="0 0 12 18"
                fill="none"
              >
                <path
                  d="M8.8074 7.39606L5.59908 10.6044L2.39075 7.39606"
                  fill="white"
                />
                <path
                  d="M8.8074 7.39606L5.59908 10.6044L2.39075 7.39606"
                  stroke="#E71C24"
                  strokeWidth="1.375"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
          {NavItem.map((item) => (
            <Link
              href={item.link}
              key={item.name}
              className="hover:scale-105 transition-transform"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
