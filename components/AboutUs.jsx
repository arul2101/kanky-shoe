"use client";

import Image from "next/image";
import Button from "./Button";
import Shoes from "@/public/img/shoes-about-us.png";
import { useRouter } from "next/navigation";

export default function AboutUs() {
  const router = useRouter();
  return (
    <section
      id="about-us"
      className="max-container justify-between items-center flex max-lg:flex-col gap-10 px-4 py-16"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold">
          We Provide You
          <span className="text-primary"> Super Quality </span>
          Shoes
        </h2>

        <p className="mt-4 lg:max-w-lg text-[1.2rem] text-slate-400">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>

        <p className="mt-6 lg:max-w-lg text-[1.2rem] text-slate-400">
          Our dedication to detail and excellence ensures your satisfaction
        </p>

        <div className="mt-11">
          <Button
            onClick={() =>
              router.push("https://www.instagram.com/sepatukanky/")
            }
          >
            View details
          </Button>
        </div>
      </div>

      <div className="flex justify-center items-center relative rounded-xl">
        <div className="absolute bg-[#a0deff4f] h-[300px] w-[300px] -z-10 rounded-2xl"></div>
        <Image src={Shoes} alt="shoe" className="" />
      </div>
    </section>
  );
}
