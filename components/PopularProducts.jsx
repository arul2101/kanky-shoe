import StoryMizu from "@/public/img/product-1.png";
import StoryHonjo from "@/public/img/product-2.png";
import StoryGozen from "@/public/img/product-3.png";
import StorySuiko from "@/public/img/product-4.png";
import { Star } from "lucide-react";
import Image from "next/image";

const products = [
  {
    title: "Kanky x Tirta Story Mizu",
    rating: "4.5",
    price: "Rp. 309.000",
    img: StoryMizu,
  },
  {
    title: "Kanky Story Honjo",
    rating: "4.5",
    price: "Rp. 233.000",
    img: StoryHonjo,
  },
  {
    title: "Kanky Story Gozen",
    rating: "4.5",
    price: "Rp. 212.000",
    img: StoryGozen,
  },
  {
    title: "Kanky Story Suiko",
    rating: "4.5",
    price: "Rp. 187.000",
    img: StorySuiko,
  },
];

export default function PopularProducts() {
  return (
    <section id="products" className="max-container max-sm:mt-12 px-4 py-16">
      <div className="flex flex-col gap-5">
        <h2 className="text-4xl font-bold">
          Our <span className="text-primary">Popular</span> Products
        </h2>

        <p className="text-slate-400 lg:max-w-lg">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="grid mt-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {products.map((product) => (
          <div key={product.title} className="sm:w-[240px] w-full">
            <div className="bg-[#a0deff4f] mb-4 rounded-xl">
              <Image src={product.img} alt={product.title} />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <Star fill="orange" className="text-orange-400" />
                <span className="text-slate-400">({product.rating})</span>
              </div>

              <h2 className="font-bold">{product.title}</h2>

              <p className="text-primary font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
