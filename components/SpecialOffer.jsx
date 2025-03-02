"use client";

import Image from "next/image";
import Offer from "@/public/img/offer.png";
import Button from "./Button";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SpecialOffer() {
  const router = useRouter();

  return (
    <section className="max-container px-4 py-16 flex lg:flex-row flex-col justify-center items-center gap-4">
      <div className="flex-1">
        <Image src={Offer} alt="offer-1" className="rounded-full" />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-bold">
          <span className="text-primary">Special</span> Offer
        </h2>

        <p className="mt-4 text-slate-400 text-[1.2rem]">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>

        <p className="mt-6 text-slate-400 text-[1.2rem]">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>

        <div className="mt-11">
          <Button
            onClick={() =>
              router.push("https://www.instagram.com/sepatukanky/")
            }
          >
            <span>Shop now</span>
            <span className="size-5 bg-white text-primary rounded-full flex items-center justify-center">
              <MoveRight size={16} />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
