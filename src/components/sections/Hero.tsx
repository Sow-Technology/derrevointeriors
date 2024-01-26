"use client";
import Image from "next/image";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";

const Hero = () => {
  const form = useForm();

  return (
    <div className="flex max-w-7xl mx-auto items-center gap-[30px] lg:items-start justify-center py-20 lg:gap-[125px] h-max flex-col lg:flex-row">
      <div className="px-10 flex items-center justify-center h-full my-auto">
        <Image
          src="/hero.svg"
          alt="hero image"
          height={500}
          width={500}
          className="h-full w-full my-auto self-center"
        />
      </div>
      <div className="p-10">
        <h4 className="text-[#474A50] font-[700] leading-[25px] text-[24px] mb-3">
          Meet a designer
        </h4>
        <Form {...form}>
          <form className="space-y-8 placeholder:text-[#bfbfbf]/85 text-[#474A50] lato-med leading-normal text-sm md:min-w-[400px]">
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
                    <div className="relative mt-2.5 w-full flex justify-between">
                      <div className=" flex items-center w-1/5">
                        <select
                          id="country"
                          name="country"
                          className="h-full  bg-transparent bg-none py-0  text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                        >
                          <option>US</option>
                          <option>CA</option>
                          <option>EU</option>
                        </select>
                      </div>
                      <Input
                        type="tel"
                        {...field}
                        name="phone-number"
                        placeholder="Enter your mobile number"
                        id="phone-number"
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
                      <Switch {...field} defaultChecked />
                    </div>
                  </FormControl>
                  <FormDescription className="text-[10px] lato-med text-[#a7a7a7] leading-[12px]">
                    Uncheck to opt-out of upcoming meetings and offer alerts
                  </FormDescription>
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
  );
};

export default Hero;
