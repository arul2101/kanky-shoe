export default function Footer() {
  return (
    <footer className="px-4 py-16 bg-black text-white">
      <div className="max-container flex justify-between flex-wrap max-lg:flex-col gap-8">
        <div className="">
          <h2 className="text-2xl font-bold">KANKY</h2>

          <p className="font-light mt-4 max-w-md text-[.9rem]">
            Get shoes ready for the new term at your rearest Kanky Store. Find
            your perfect Size in Store. Get Rewards!
          </p>

          <div className="flex items-center gap-2 mt-4">
            <a
              href="https://www.facebook.com/kankyofficial"
              target="_blank"
              className="size-10 flex justify-center items-center rounded-full bg-white text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="black"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/sepatukanky/"
              target="_blank"
              className="size-10 flex justify-center items-center rounded-full bg-white text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href=""
              className="size-10 flex justify-center items-center rounded-full bg-white text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="black"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="">
          <h2 className="text-2xl font-bold">Products</h2>

          <ul className="space-y-2 mt-4 font-light text-[.9rem]">
            <li>Kanky Story Honjo</li>
            <li>Kanky Story Kenshin</li>
            <li>Kanky x Tirta Story</li>
            <li>Kanky Story Gozen</li>
          </ul>
        </div>

        <div className="">
          <h2 className="text-2xl font-bold">Get in touch</h2>

          <ul className="space-y-2 mt-4 font-light text-[.9rem]">
            <li>customer@kanky.com</li>
            <li>+021-7251855</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
