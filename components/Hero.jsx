"use client";

import { MoveRight } from "lucide-react";
import Button from "./Button";
import Image from "next/image";
import Shoes1 from "@/public/img/shoes-1.png";
import Shoes2 from "@/public/img/shoes-2.png";
import Shoes3 from "@/public/img/shoes-3.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

const statistics = [
  {
    label: "Brands",
    description: "1k+",
  },
  {
    label: "Shops",
    description: "500+",
  },
  {
    label: "Customers",
    description: "250k+",
  },
];

export default function Hero() {
  const [selectedImg, setSelectedImg] = useState(Shoes1);
  const router = useRouter();
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen max-container gap-10"
    >
      <div className="relative xl:w-2/5 w-full flex flex-col justify-center items-start pt-28 px-4 animate-from-left">
        <p className="text-xl text-primary">Our Summer Collections</p>

        <h1 className="text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold relative mt-10 lg:z-10">
          <span className="xl:whitespace-nowrap xl:bg-white">
            The New Arrival
          </span>
          <br />
          <span className="text-primary">Kanky</span> Shoes
        </h1>

        <p className="text-lg leading-8 text-slate-400 mt-6 mb-16">
          Discover stylish Kanky arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button
          onClick={() => router.push("https://www.instagram.com/sepatukanky/")}
        >
          <span>Shop now</span>
          <span className="size-5 bg-white text-primary rounded-full flex items-center justify-center">
            <MoveRight size={16} />
          </span>
        </Button>

        <div className="flex items-center flex-wrap w-full mt-20 gap-16">
          {statistics.map(({ label, description }, index) => (
            <div key={index}>
              <p className="text-4xl font-bold">{description}</p>
              <p className="leading-7 text-slate-400">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col gap-16 justify-center items-center bg-[#a0deff4f] relative xl:min-h-screen pb-8 animate-fade-in">
        <Image
          src={selectedImg}
          alt="big shoe"
          className="w-[750px] h-[600px] max-sm:w-[500px] max-sm:h-[400px]"
        />

        <div className="flex justify-center w-3/5 items-center gap-10">
          <div
            className={`${
              selectedImg === Shoes1 && "border-2 border-primary"
            } overflow-hidden rounded-xl cursor-pointer bg-[#a0deff4f] relative w-[125px]`}
            onClick={() => setSelectedImg(Shoes1)}
          >
            <div className="bg-black absolute top-0 left-0 h-full w-full opacity-30"></div>
            <Image src={Shoes1} alt="shoe" className="w-full" />
          </div>
          <div
            className={`${
              selectedImg === Shoes2 && "border-2 border-primary"
            } overflow-hidden rounded-xl cursor-pointer bg-[#a0deff4f] relative w-[125px]`}
            onClick={() => setSelectedImg(Shoes2)}
          >
            <div className="bg-black absolute top-0 left-0 h-full w-full opacity-30"></div>
            <Image src={Shoes2} alt="shoe" className="w-full" />
          </div>
          <div
            className={`${
              selectedImg === Shoes3 && "border-2 border-primary"
            } overflow-hidden rounded-xl cursor-pointer bg-[#a0deff4f] relative w-[125px]`}
            onClick={() => setSelectedImg(Shoes3)}
          >
            <div className="bg-black absolute top-0 left-0 h-full w-full opacity-30"></div>
            <Image src={Shoes3} alt="shoe" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
