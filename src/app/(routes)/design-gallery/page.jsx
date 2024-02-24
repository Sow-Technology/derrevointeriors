"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { TiMinus, TiPlus } from "react-icons/ti";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Carousel from "@/components/Carousel/Carousel";
import toast, { Toaster } from "react-hot-toast";
import Lottie from "react-lottie";
import l1 from "../../../../public/pages/kitchen/4.json";
import l2 from "../../../../public/pages/bedroom/5.json";
import l3 from "../../../../public/pages/livingroom/5.json";
import l4 from "../../../../public/pages/bathroom/15.json";
import l5 from "../../../../public/pages/wardrobe/10.json";
import l6 from "../../../../public/2.json";

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
    url: "",
    defaultOptions: {
      loop: true,
      autoplay: true,
      animationData: l6,
    },
  },
];
const images = [
  "/Carousel/20.jpg",
  "/Carousel/2.jpg",
  "/Carousel/9.jpg",
  "/Carousel/5.jpg",
  "/Carousel/7.jpg",
  "/Carousel/3.jpg",
  "/Carousel/4.jpg",
  "/Carousel/6.jpg",
  "/Carousel/8.jpg",
];
const images2 = [
  "/Carousel/10.jpg",
  "/Carousel/17.jpg",
  "/Carousel/19.jpg",
  "/Carousel/12.jpg",
  "/Carousel/14.jpg",
  "/Carousel/13.jpg",
  "/Carousel/15.jpg",
  "/Carousel/11.jpg",
  "/Carousel/16.jpg",
  "/Carousel/18.jpg",
];
const Page = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: l1,
  };
  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be atleast 2 characters",
    }),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    mobileNumber: z.string().refine((value) => value.length === 10, {
      message: "Mobile number should contain 10 digits",
    }),

    whatsapp: z.boolean().default(true).optional(),
    pincode: z.string(),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobileNumber: "",
      whatsapp: true,
      pincode: "",
    },
  });
  const onSubmit = async (data) => {
    toast.loading("Submitting!...", {
      icon: "◌",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

    // Extract specific values from data
    const { name, email, mobileNumber, whatsapp, pincode } = data;
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      toast.dismiss();
      toast("We will reach out to you soon!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log("Error sending form data:", error);
    }
    console.log({ name, email, mobileNumber, whatsapp, pincode });
  };

  return (
    <div className="relative overflow-x-hidden min-h-screen mx-auto">
      <div className="z-10 relative">
        <Navbar /> <Toaster />
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-5 justify-end lg:gap-[20%] p-8 bg-[#618365]/80">
        <div className="px-10 flex items-center justify-center h-full my-auto">
          <h2 className="font-bold tracking-wide leading-10 max-w-[550px] drop-shadow-2xl text-4xl text-white">
            Designing Dreams: Crafting Inspirational Spaces for Your Dream Home
          </h2>
        </div>
        <div className="p-10 bg-white rounded-md">
          <h4 className="text-[#474A50] font-[700] leading-[25px] text-[24px] mb-3">
            Meet a designer
          </h4>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 placeholder:text-[#bfbfbf]/85 text-[#474A50] lato-med leading-normal text-sm md:min-w-[400px]"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your name"
                        {...field}
                        className="placeholder:text-[#bfbfbf]/85 text-[#474A50] lato-med leading-normal text-sm"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your email"
                        {...field}
                        className=" placeholder:text-[#bfbfbf]/85 text-[#474A50] lato-med leading-normal text-sm"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobileNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative mt-2.5 w-full flex justify-between gap-2">
                        <div className=" flex items-center justify-center w-1/5">
                          <span className="h-full text-center  bg-transparent bg-none py-0  text-gray-400 focus:ring-2 flex items-center justify-center focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                            IN +91
                          </span>
                        </div>
                        <Input
                          type="tel"
                          {...field}
                          name="phone-number"
                          placeholder="Enter your mobile number"
                          id="phone-number"
                          pattern="[0-9]{10}"
                          autoComplete="tel"
                          className="placeholder:text-[#bfbfbf]/85 text-[#474A50] lato-med leading-normal text-sm w-4/5"
                        />
                      </div>
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[11px] leading-[13px] text-[#616161]">
                          You can reach me on WhatsApp
                        </span>
                        <Switch
                          {...field}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </div>
                    </FormControl>
                    <FormDescription className="text-[10px] lato-med text-[#a7a7a7] leading-[12px]">
                      Uncheck to opt-out of upcoming meetings and offer alerts
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pincode"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Enter your current residence pincode"
                        {...field}
                        className=" placeholder:text-[#bfbfbf]/85 text-[#474A50] lato-med leading-normal text-sm"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="bg-[#618365] hover:bg-[#618365]/80 rounded-[6px]border border-solid border-[rgba(231,28,36,0.00)] w-full py-[11px]"
              >
                Book Design Session
                <span className="bg-[#FFC700] text-[#1E1E1E] rounded-[2px] py-1 px-2.5 font-bold tracking-[-0.12px] leading-[10px] text-[10px] ml-[12.5px]">
                  FREE
                </span>
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="mx-auto max-w-7xl my-20 flex items-center justify-center p-5">
        <div className="text-[#222] text-[24px] font-bold leading-[50px] mb-10 text-center flex items-center justify-center flex-col gap-7">
          <h3>Design Gallery</h3>
          <p className="text-sm max-w-[500px] text-gray-600 font-normal">
            If you&#39;re seeking straightforward home interior designs, your
            search ends with HomeLane. Explore comprehensive interior design
            services tailored to your needs.
          </p>
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
      <WhyChooseUs />
      <div className="max-w-7xl mx-auto my-5 flex flex-col gap-10">
        <div>
          <Carousel images={images} />
        </div>
        <div>
          <Carousel images={images2} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
