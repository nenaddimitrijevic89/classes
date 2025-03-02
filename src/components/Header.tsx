import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center justify-between w-full px-5 sm:px-10 py-10 text-white fixed z-10 bg-gradient-to-t from-transparent to-black">
      <Link href="/">
        <div className="w-10 h-10 bg-white-logo hover:bg-orange-logo bg-cover transition-all duration-200 ease-in-out" />
      </Link>
      <nav>
        <ul className="flex gap-4">
          <li className="uppercase text-sm font-semibold tracking-[1px] leading-[13px] shadow-custom">
            <Link href="/contact">Join Now</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
