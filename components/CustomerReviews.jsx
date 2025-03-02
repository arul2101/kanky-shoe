import Image from "next/image";
import Cust1 from "@/public/img/customer1.jpeg";
import Customer2 from "@/public/img/customer2.svg";
import { Star } from "lucide-react";

export default function CustomerReviews() {
  return (
    <section className="bg-[#a0deff4f] px-4 py-16">
      <div className="max-container">
        <h3 className="font-bold text-4xl text-center">
          What Our
          <span className="text-primary"> Customers </span>
          Say?
        </h3>

        <p className="mt-4 mx-auto max-w-lg text-center text-slate-400 text-[1.2rem]">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>

        <div className="flex flex-1 max-lg:flex-col flex-row justify-evenly gap-8 mt-16">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={Cust1}
              alt="profile-cust"
              className="rounded-full w-[120px] h-[120px]"
            />

            <p className="mt-6 max-w-sm text-center text-slate-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At nobis
              incidunt velit hic delectus perferendis.
            </p>

            <div className="mt-3 flex items-center gap-2">
              <div className="text-orange-400">
                <Star fill="orange" />
              </div>

              <span className="text-slate-400">(4.5)</span>
            </div>

            <h2 className="font-bold text-2xl">Morich Brown</h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src={Customer2}
              alt="profile-cust"
              className="rounded-full w-[120px] h-[120px]"
            />

            <p className="mt-6 max-w-sm text-center text-slate-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              reiciendis exercitationem possimus accusantium fugit dolorum dolor
              doloremque quaerat nobis praesentium!
            </p>

            <div className="mt-3 flex items-center gap-2">
              <div className="text-orange-400">
                <Star fill="orange" />
              </div>

              <span className="text-slate-400">(4.5)</span>
            </div>

            <h2 className="font-bold text-2xl">Lota Mongeskar</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
