import Image from "next/image";
import Link from "next/link";
import React from "react";
const SocialIcons = [
  {
    icon: "/social/fb.svg",
    href: "",
  },
  {
    icon: "/social/twitter.svg",
    href: "",
  },
  {
    icon: "/social/yt.svg",
    href: "https://www.youtube.com/@derrevo.",
  },
  {
    icon: "/social/linkedin.svg",
    href: "",
  },
  {
    icon: "/social/instagram.svg",
    href: "https://www.instagram.com/derrevo.int.22",
  },
  {
    icon: "/social/pinterest.svg",
    href: "https://in.pinterest.com/derrevointerior/",
  },
];
const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-[100px]">
      <div className="flex items-center justify-between gap-[80px] flex-col-reverse lg:flex-row">
        <div className="leading-[30px] text-xs text-[#000]">
          <div>
            <h4 className="text-[#212529] text-[15px] font-bold ">Derrevo</h4>
            <div className=" hover:scale-110 transition-transform inline-block">
              <Link href="" className=" hover:scale-105 transition-transform">
                Join Us
              </Link>
            </div>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <div className=" hover:scale-110 transition-transform inline-block">
              <Link href="" className=" hover:scale-105 transition-transform">
                The Design Journal
              </Link>
            </div>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <div className=" hover:scale-110 transition-transform inline-block">
              <Link
                href="/estimate"
                className=" hover:scale-105 transition-transform"
              >
                Get Estimate
              </Link>
            </div>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <div className=" hover:scale-110 transition-transform inline-block">
              <Link href="" className=" hover:scale-105 transition-transform">
                Privacy Policy
              </Link>
            </div>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <div className=" hover:scale-110 transition-transform inline-block">
              <Link href="" className=" hover:scale-105 transition-transform">
                Book Virtual Meeting
              </Link>
            </div>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <div className=" hover:scale-110 transition-transform inline-block">
              <Link href="" className=" hover:scale-105 transition-transform">
                Modular Kitchen Cost
              </Link>
            </div>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <div className=" hover:scale-110 transition-transform inline-block">
              <Link href="" className=" hover:scale-105 transition-transform">
                Bathroom Designs
              </Link>
            </div>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <div className=" hover:scale-110 transition-transform inline-block">
              <Link href="" className=" hover:scale-105 transition-transform">
                Kids Bedroom
              </Link>
            </div>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <div className=" hover:scale-110 transition-transform inline-block">
              <Link
                href="/faq"
                className=" hover:scale-105 transition-transform"
              >
                FAQ
              </Link>
            </div>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <div className=" hover:scale-110 transition-transform inline-block">
              <Link href="" className=" hover:scale-105 transition-transform">
                Disclaimer
              </Link>
            </div>
          </div>
          <div className="mt-7">
            <h4 className="text-[#212529] text-[15px] font-bold ">
              Customer Support
            </h4>
            <div className=" hover:scale-110 transition-transform inline-block">
              <Link href="">Raise issue</Link>
            </div>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <div className=" hover:scale-110 transition-transform inline-block">
              <Link href="" className=" hover:scale-105 transition-transform">
                My issues
              </Link>
            </div>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <div className=" hover:scale-110 transition-transform inline-block">
              <Link href="" className=" hover:scale-105 transition-transform">
                Contact us
              </Link>
            </div>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <div className=" hover:scale-110 transition-transform inline-block">
              <Link href="" className=" hover:scale-105 transition-transform">
                Privacy Policy
              </Link>
            </div>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <div className=" hover:scale-110 transition-transform inline-block">
              <Link href="" className=" hover:scale-105 transition-transform">
                Terms of Use
              </Link>
            </div>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <div className=" hover:scale-110 transition-transform inline-block">
              <Link
                href="/terms-conditions"
                className=" hover:scale-105 transition-transform"
              >
                Terms & Conditions
              </Link>
            </div>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <div className=" hover:scale-110 transition-transform inline-block">
              <Link
                href="/faq"
                className=" hover:scale-105 transition-transform"
              >
                FAQs
              </Link>
            </div>
          </div>
        </div>
        <div>
          <Link href="/">
            <Image
              src="/logo.svg"
              alt=""
              height={257}
              width={216}
              className="h-[257px] w-[216px]"
            />
          </Link>
        </div>
      </div>

      <div className="flex gap-x-[17px] my-[23px] items-center justify-end">
        {SocialIcons.map((item, index) => (
          <Link href={item.href} key={index}>
            <Image
              src={item.icon}
              alt=""
              width={25}
              height={25}
              className="w-auto max-h-[25px] hover:scale-125 transition-transform"
            />
          </Link>
        ))}
      </div>
      <div className="w-full text-center mb-20 bg-green-500/50 py-10">
        Website designed & developed by{" "}
        <Link href="https://sowtech.in/contact">
          <b>Sow Tech</b>🔗
        </Link>
      </div>
    </div>
  );
};

export default Footer;
