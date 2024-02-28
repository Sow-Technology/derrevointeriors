"use client";
import Image from "next/image";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import Lottie from "react-lottie";
import l1 from "../../../../public/1.json";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Hero = () => {
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
    } catch (error) {
      console.log("Error sending form data:", error);
    }
  };

  return (
    <div className="flex max-w-7xl mx-auto items-center  lg:items-start justify-center  h-max  flex-col">
      <div className="w-full">
        <Navbar />
      </div>
      <Toaster />
      <div className="flex lg:flex-row flex-col my-20 lg:gap-[125px] gap-[30px]">
        <div className="px-10 flex items-center justify-center h-full my-auto">
          <Lottie options={defaultOptions} className=" w-[300px] h-[300px]" />
        </div>
        <div className="p-10">
          <h4 className="text-[#474A50] font-[700] leading-[25px] text-[24px] mb-3">
            Contact Us
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
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[11px] leading-[13px] text-[#616161]">
                        You can reach me on WhatsApp
                      </span>
                      <FormControl>
                        <Switch
                          {...field}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </div>
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
                Contact Us
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Hero;
