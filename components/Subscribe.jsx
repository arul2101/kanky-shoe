import Button from "./Button";

export default function Subscribe() {
  return (
    <section
      className="max-container px-4 py-40 flex max-lg:flex-col max-lg:justify-center items-center flex-row justify-between"
      id="contact-us"
    >
      <h2 className="font-bold text-4xl max-w-lg max-lg:text-center">
        Sign Up for
        <span className="text-primary"> Updates </span>& Newsletter
      </h2>

      <div className="relative max-lg:mt-12">
        <input
          type="text"
          placeholder="subscribe@gmail.com"
          className="px-4 w-[450px] max-sm:w-[300px] h-[45px] border border-slate-400 rounded-full outline-none"
        />

        <Button className="absolute top-[2px] right-[2px]">Sign Up</Button>
      </div>
    </section>
  );
}
