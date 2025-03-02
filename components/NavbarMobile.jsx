import Link from "next/link";

export default function NavbarMobile({ toggleMenu, setToggleMenu }) {
  return (
    <nav
      className={`${
        toggleMenu ? "visible absolute z-[999]" : "invisible"
      } top-20 shadow-2xl p-4 rounded-xl bg-white right-10`}
    >
      <ul className="space-y-2 border-b border-primary pb-4">
        <li>
          <Link href="/#home" onClick={() => setToggleMenu(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/#about-us" onClick={() => setToggleMenu(false)}>
            About Us
          </Link>
        </li>
        <li>
          <Link href="/#products" onClick={() => setToggleMenu(false)}>
            Products
          </Link>
        </li>
        <li>
          <Link href="/#contact-us" onClick={() => setToggleMenu(false)}>
            Contact Us
          </Link>
        </li>
      </ul>

      <a
        target="_blank"
        href={"https://www.instagram.com/sepatukanky/"}
        className="mt-4 block"
        onClick={() => setToggleMenu(false)}
      >
        Explore Now
      </a>
    </nav>
  );
}
