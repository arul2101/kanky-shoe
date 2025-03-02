import { HandHeart, ShieldCheck, Truck } from "lucide-react";

const services = [
  {
    icon: <Truck />,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    icon: <ShieldCheck />,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    icon: <HandHeart />,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export default function Services() {
  return (
    <section className="max-container flex justify-center flex-wrap px-4 py-16 gap-9">
      {services.map((service) => (
        <div
          key={service.label}
          className="flex-1 shadow-lg px-10 py-16 sm:w-[350px] sm:min-w-[350px] min-w-full rounded-[20px]"
        >
          <div className="size-10 bg-primary text-white rounded-full flex justify-center items-center">
            {service.icon}
          </div>

          <h2 className="font-bold text-2xl mt-4">{service.label}</h2>

          <p className="text-slate-400 mt-4">{service.subtext}</p>
        </div>
      ))}
    </section>
  );
}
