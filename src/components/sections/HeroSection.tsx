/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import { Button } from "../ui/button";
import quoteStart from "@/assets/quote-start.svg";
import quoteEnd from "@/assets/quote-end.svg";
import heroImg from "@/assets/hero-image.jpg";

export default function HeroSection() {
  return (
    <main>
      <div className="relative flex h-[calc(100vh-70px)] items-start ">
        <div className="mt-[100px]">
          <div className="">
            <h1 className="text-balance text-[70px] font-extrabold leading-[109%] tracking-tighter">
              Crafting premium Modular Furniture
            </h1>
            <p className="w-[70%] text-lg font-light">
              we blend tradition and innovation to transform spaces with
              precision-crafted modular designs
            </p>
          </div>
          <div className="mt-10">
            <Button>Discover More</Button>
          </div>
          <div className="relative mt-[100px] flex w-[300px] flex-col gap-y-4">
            <div className="absolute -left-8">
              <Image src={quoteStart} alt="Quote" />
            </div>
            <div>
              We have been proposing Multiflex as our manufacturers for high-end
              veneer for over 15 years
            </div>
            <div className="absolute -right-3 bottom-8">
              <Image src={quoteEnd} alt="Quote" />
            </div>
            <p className="font-extrabold tracking-tighter">
              Design Sparks, Interiors and Architecture
            </p>
          </div>
        </div>
        <div className="h-[calc(100%-10px)] w-[1000px] bg-black drop-shadow-[24px_24px_rgba(0,0,0,1)]">
          <Image
            src={heroImg}
            alt="heroimage"
            className=" h-full object-cover"
          />
        </div>
      </div>

      <div className="absolute inset-0 -z-20 bg-[url(/lines.svg)] bg-top opacity-55"></div>
    </main>
  );
}
