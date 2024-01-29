"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { TiMinus, TiPlus } from "react-icons/ti";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { Switch } from "../ui/switch";
import { Input } from "../ui/input";
import * as z from "zod";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
type RefCallBack = (instance: HTMLButtonElement | null) => void;

interface SwitchProps {
  onChange: (...event: any[]) => void;
  value: boolean;
  disabled?: boolean;
  name: string;
  ref: RefCallBack;
}
const EstimateForm = () => {
  const percentage = 30;
  const [step, setStep] = useState(1);
  const [selectedFloorplan, setSelectedFloorplan] = useState("");
  const [selectedPurpose, setSelectedPurpose] = useState("");
  const [kitchen, setKitchen] = useState(true);
  const [wardrobe, setWardrobe] = useState(1);
  const [entertainmentUnit, setEntertainmentUnit] = useState(1);
  const [studyUnit, setStudyUnit] = useState(1);
  const [crockeryUnit, setCrockeryUnit] = useState(1);
  const step1Validation = selectedFloorplan && selectedPurpose ? true : false;

  const wardrobeLimit = useMemo(() => {
    if (selectedFloorplan === "1BHK") return 1;
    if (selectedFloorplan === "2BHK") return 2;
    if (selectedFloorplan === "3BHK") return 3;
    if (selectedFloorplan === "3+BHK") return 4;
    return 1;
  }, [selectedFloorplan]);
  const otherLimit = 3;

  const entertainmentUnitLimit = useMemo(() => otherLimit, []);
  const studyUnitLimit = useMemo(() => otherLimit, []);
  const crockeryUnitLimit = useMemo(() => otherLimit, []);

  const handleWardrobeChange = useCallback(
    (newValue: number) => {
      const updatedWardrobeCount = Math.min(newValue, wardrobeLimit);

      // Ensure the updated value does not exceed the general limit for all other cases
      setWardrobe((prevWardrobe) => Math.max(0, updatedWardrobeCount));
    },
    [wardrobeLimit]
  );
  const handleEntertainmentUnitChange = useCallback((newValue: number) => {
    const updatedValue = Math.min(newValue, otherLimit);

    // Ensure the updated value does not go below zero
    setEntertainmentUnit((prev) => Math.max(0, updatedValue));
  }, []);

  const handleStudyUnitChange = useCallback((newValue: number) => {
    const updatedValue = Math.min(newValue, otherLimit);

    // Ensure the updated value does not go below zero
    setStudyUnit((prev) => Math.max(0, updatedValue));
  }, []);

  const handleCrockeryUnitChange = useCallback((newValue: number) => {
    const updatedValue = Math.min(newValue, otherLimit);

    // Ensure the updated value does not go below zero
    setCrockeryUnit((prev) => Math.max(0, updatedValue));
  }, []);

  const handleNextButton = useCallback(() => {
    // Your existing logic
    if (step <= 2) setStep((prevStep) => prevStep + 1);
  }, [step]);

  const handleBackButton = useCallback(() => {
    // Your existing logic
    setStep((prevStep) => prevStep - 1);
  }, []);
  const { handleSubmit, register } = useForm();
  const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be atleast 2 characters",
    }),
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    mobileNumber: z.number().refine((value) => value.toString.length === 10, {
      message: "Mobile number should contain 10 digits",
    }),

    whatsapp: z.string(),
    pincode: z.number(),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // Extract specific values from data
    const { name, email, mobileNumber, whatsapp } = data as {
      name: string;
      email: string;
      mobileNumber: string;
      whatsapp: boolean;
      pincode: number;
    };

    // Your custom submission logic
    console.log({ name, email, mobileNumber, whatsapp });
  };
  useEffect(() => {
    console.log(selectedFloorplan);
  }, [selectedFloorplan, selectedPurpose]);
  const backButtonDisabled = step == 1;
  const nextButtonDisabled = !step1Validation;

  return (
    <div className="flex flex-col bg-gray-100/50 mb-10">
      <div className="flex items-center justify-center text-center  flex-col bg-gray-100/50 p-5 gap-4">
        <div className="text-[#222] text-[24px] font-bold leading-[24px] ">
          <h3>
            {step == 1 && <>LET&#39;S GET STARTED</>}
            {step == 2 && <>TELL US WHAT YOU NEED</>}
            {step == 3 && <>GIVE US YOUR DETAILS</>}
          </h3>
        </div>
        <p className="text-xs text-[#8d99ae]">STEP {step} of 3 </p>
        <div className="bg-[#dee2e6] h-[8px] w-[300px] md:w-[400px] rounded-[20px]">
          <div
            className={`bg-[#43aaa8b] w-[${percentage}px] h-[8px] rounded-[20px]`}
          ></div>
        </div>
      </div>
      <div className="lg:w-[950px] mx-auto ">
        {step === 1 && (
          <div className="lg:w-[950px] mx-auto flex flex-col gap-5">
            <div className="flex lg:w-[950px] min-h-[400px] mx-auto bg-white">
              <div className="lg:w-1/2 w-full border border-gray-100 p-6">
                <div>
                  <h1 className="font-bold my-5 text-base text-[#222]">
                    Your floorplan
                  </h1>
                  <RadioGroup
                    className="flex"
                    value={selectedFloorplan}
                    onValueChange={(val) => setSelectedFloorplan(val)}
                  >
                    <Label htmlFor="1BHK">
                      <div className="flex items-center space-x-2 bg-[#618365] p-3 px-4 rounded-xl text-white cursor-pointer">
                        <RadioGroupItem
                          value="1BHK"
                          id="1BHK"
                          onChange={() => setSelectedFloorplan("1BHK")}
                        />
                        <span className="inline-block">1 BHK</span>
                      </div>
                    </Label>
                    <Label htmlFor="2BHK">
                      <div className="flex items-center space-x-2 bg-[#618365] p-3 px-4 rounded-xl text-white cursor-pointer">
                        <RadioGroupItem
                          value="2BHK"
                          id="2BHK"
                          onChange={() => setSelectedFloorplan("2BHK")}
                        />
                        <span className="inline-block">2 BHK</span>
                      </div>
                    </Label>
                    <Label htmlFor="3BHK">
                      <div className="flex items-center space-x-2 bg-[#618365] p-3 px-4 rounded-xl text-white cursor-pointer">
                        <RadioGroupItem
                          value="3BHK"
                          id="3BHK"
                          onChange={() => setSelectedFloorplan("3BHK")}
                        />
                        <span className="inline-block">3 BHK</span>
                      </div>
                    </Label>
                    <Label htmlFor="3+BHK">
                      <div className="flex items-center space-x-2 bg-[#618365] p-3 px-4 rounded-xl text-white cursor-pointer">
                        <RadioGroupItem
                          value="3+BHK"
                          id="3+BHK"
                          onChange={() => setSelectedFloorplan("3+BHK")}
                        />
                        <span className="inline-block">3+ BHK</span>
                      </div>
                    </Label>
                  </RadioGroup>
                </div>
                <div>
                  <h1 className="font-bold my-5 text-base text-[#222]">
                    Purpose
                  </h1>
                  <RadioGroup
                    className="flex"
                    value={selectedPurpose}
                    onValueChange={(val) => setSelectedPurpose(val)}
                  >
                    <Label htmlFor="moveIn">
                      <div className="flex items-center space-x-2 bg-[#618365] p-3 px-[28px] rounded-xl text-white cursor-pointer">
                        <RadioGroupItem
                          value="moveIn"
                          id="moveIn"
                          onChange={() => setSelectedPurpose("moveIn")}
                        />
                        <span className="inline-block">Move In</span>
                      </div>
                    </Label>
                    <Label htmlFor="rentOut">
                      <div className="flex items-center space-x-2 bg-[#618365] p-3 px-[28px] rounded-xl text-white cursor-pointer">
                        <RadioGroupItem
                          value="rentOut"
                          id="rentOut"
                          onChange={() => setSelectedPurpose("rentOut")}
                        />
                        <span className="inline-block">Rent Out</span>
                      </div>
                    </Label>
                    <Label htmlFor="renovate">
                      <div className="flex items-center space-x-2 bg-[#618365] p-3 px-[28px] rounded-xl text-white cursor-pointer">
                        <RadioGroupItem
                          value="renovate"
                          id="renovate"
                          onChange={() => setSelectedPurpose("renovate")}
                        />
                        <span className="inline-block">Renovate</span>
                      </div>
                    </Label>
                  </RadioGroup>
                </div>
              </div>
              <div className="w-1/2 border border-gray-100 hidden lg:flex flex-col items-center justify-center gap-4">
                <Image src="/estimate/1.jpg" alt="" width={308} height={200} />
                <h4 className="text-base leading-[19px] text-center text-[#222] font-bold">
                  Your Vision. Our Skill.
                </h4>
                <p className="text-[#4a4a4a] text-[13px] mt-[2px] w-[355px]">
                  Harnessing the power of cutting-edge 3D design technology,
                  SpaceCraft, our team of over 600 design professionals is
                  dedicated to delivering flawless designs for your home.
                  Don&#39;t delay any further! Embark on your home interiors
                  journey with us.
                </p>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="lg:w-[950px] mx-auto flex flex-col gap-5">
            <div className="flex lg:w-[950px] min-h-[400px] mx-auto bg-white">
              <div className="lg:w-1/2 w-full border border-gray-100 p-6">
                <div>
                  <h1 className="font-bold my-5 text-base text-[#222]">
                    Your requirements for {selectedFloorplan}*
                  </h1>

                  <label htmlFor="kitchen">
                    <div className="border-b pb-4 mb-4 flex justify-between">
                      <span className="inline-flex text-sm">Kitchen</span>
                      <div>
                        <Checkbox
                          id="kitchen"
                          defaultChecked={kitchen}
                          disabled
                          onChange={() => setKitchen(false)}
                        />
                      </div>
                    </div>
                  </label>
                  <label htmlFor="wardrobe">
                    <div className="border-b pb-4 ">
                      <div className="mb-4 flex justify-between">
                        <span className="inline-flex text-sm">Wardrobe</span>
                        <div className="flex items-center gap-3">
                          <div
                            className="p-2 border cursor-pointer"
                            onClick={() => handleWardrobeChange(wardrobe + 1)}
                          >
                            <TiPlus />
                          </div>
                          <div className="p-2">{wardrobe}</div>
                          <div
                            className="p-2 border cursor-pointer"
                            onClick={() => handleWardrobeChange(wardrobe - 1)}
                          >
                            <TiMinus />
                          </div>
                        </div>
                      </div>
                      <span className="block text-xs text-gray-500 -mt-4">
                        (Number of wardrobes can&#39;t exceed the number of
                        bedrooms)
                      </span>
                    </div>
                  </label>
                  <label htmlFor="entertainment" className="">
                    <div className="border-b  mt-4">
                      <div className="mb-4 flex justify-between">
                        <span className="inline-flex text-sm">
                          Entertainment Unit
                        </span>
                        <div className="flex items-center gap-3">
                          <div
                            className="p-2 border cursor-pointer"
                            onClick={() =>
                              handleEntertainmentUnitChange(
                                entertainmentUnit + 1
                              )
                            }
                          >
                            <TiPlus />
                          </div>
                          <div className="p-2">{entertainmentUnit}</div>
                          <div
                            className="p-2 border cursor-pointer"
                            onClick={() =>
                              handleEntertainmentUnitChange(
                                entertainmentUnit - 1
                              )
                            }
                          >
                            <TiMinus />
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                  <label htmlFor="study" className="">
                    <div className="border-b  mt-4">
                      <div className="mb-4 flex justify-between">
                        <span className="inline-flex text-sm">Study Unit</span>
                        <div className="flex items-center gap-3 ">
                          <div
                            className="p-2 border cursor-pointer"
                            onClick={() => handleStudyUnitChange(studyUnit + 1)}
                          >
                            <TiPlus />
                          </div>
                          <div className="p-2">{studyUnit}</div>
                          <div
                            className="p-2 border cursor-pointer"
                            onClick={() => handleStudyUnitChange(studyUnit - 1)}
                          >
                            <TiMinus />
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                  <label htmlFor="crockery" className="">
                    <div className="border-b  mt-4">
                      <div className="mb-4 flex justify-between">
                        <span className="inline-flex text-sm">
                          Crockery Unit
                        </span>
                        <div className="flex items-center gap-3">
                          <div
                            className="p-2 border cursor-pointer"
                            onClick={() =>
                              handleCrockeryUnitChange(crockeryUnit + 1)
                            }
                          >
                            <TiPlus />
                          </div>
                          <div className="p-2">{crockeryUnit}</div>
                          <div
                            className="p-2 border cursor-pointer"
                            onClick={() =>
                              handleCrockeryUnitChange(crockeryUnit - 1)
                            }
                          >
                            <TiMinus />
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="w-1/2 border border-gray-100 hidden lg:flex flex-col items-center justify-center gap-4">
                <Image src="/estimate/1.jpg" alt="" width={308} height={200} />
                <h4 className="text-base leading-[19px] text-center text-[#222] font-bold">
                  Your Vision. Our Skill.
                </h4>
                <p className="text-[#4a4a4a] text-[13px] mt-[2px] w-[355px]">
                  Harnessing the power of cutting-edge 3D design technology,
                  SpaceCraft, our team of over 600 design professionals is
                  dedicated to delivering flawless designs for your home.
                  Don&#39;t delay any further! Embark on your home interiors
                  journey with us.
                </p>
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="lg:w-[950px] mx-auto flex flex-col gap-5">
            <div className="flex lg:w-[950px] min-h-[400px] mx-auto bg-white ">
              <div className="lg:w-1/2 w-full border border-gray-100 p-6">
                <div className="p-10">
                  <h4 className="text-[#474A50] font-[700] leading-[25px] text-[24px] mb-3">
                    We&#39;ll reach out to you soon!
                  </h4>
                  <Form {...form}>
                    <form className="space-y-8 placeholder:text-[#bfbfbf]/85 text-[#474A50] lato-med leading-normal text-sm lg:min-w-[400px]">
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
                                <Switch {...field} />
                              </div>
                            </FormControl>
                            <FormDescription className="text-[10px] lato-med text-[#a7a7a7] leading-[12px]">
                              Uncheck to opt-out of upcoming meetings and offer
                              alerts
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
                      {/* <Button
                        type="submit"
                        className="bg-[#618365] hover:bg-[#618365]/80 rounded-[6px]border border-solid border-[rgba(231,28,36,0.00)] w-full py-[11px]"
                      >
                        Book Design Session
                        <span className="bg-[#FFC700] text-[#1E1E1E] rounded-[2px] py-1 px-2.5 font-bold tracking-[-0.12px] leading-[10px] text-[10px] ml-[12.5px]">
                          FREE
                        </span>
                      </Button> */}
                    </form>
                  </Form>
                </div>
              </div>

              <div className="w-1/2 border border-gray-100 hidden lg:flex flex-col items-center justify-center gap-4">
                <Image src="/estimate/1.jpg" alt="" width={308} height={200} />
                <h4 className="text-base leading-[19px] text-center text-[#222] font-bold">
                  Your Vision. Our Skill.
                </h4>
                <p className="text-[#4a4a4a] text-[13px] mt-[2px] w-[355px]">
                  Harnessing the power of cutting-edge 3D design technology,
                  SpaceCraft, our team of over 600 design professionals is
                  dedicated to delivering flawless designs for your home.
                  Don&#39;t delay any further! Embark on your home interiors
                  journey with us.
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="my-10 flex justify-between">
          <Button
            variant="primary"
            disabled={backButtonDisabled}
            className="w-[120px] font-bold text-xl py-6 px-12"
            onClick={handleBackButton}
          >
            Back
          </Button>
          <Button
            variant="primary"
            disabled={nextButtonDisabled}
            className="w-[120px] font-bold text-xl py-6 px-12"
            onClick={handleNextButton}
          >
            {step == 3 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EstimateForm;
