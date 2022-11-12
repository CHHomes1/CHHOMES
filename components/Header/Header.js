import React from "react";
import Logo from "../UI/Logo";
import Link from "next/link";
import Logo1 from "../Logo/Logo";
const style = {
  header: "flex items-center justify-center text-blue-900 flex-col md:flex-row",
  logo: "flex-1 md:mx-4",
  nav: "flex mb-4 md:my-0",
  list: "list-none mx-2 md:mx-6 border-move-animation cursor-pointer text-sm sm:text-lg md:text-lg lg:text-xl text-blue-900",
  contact:
    "text-gray-100 bg-blue-600 transiton duration-[300ms] list-none mx-2 md:mx-6 cursor-pointer  px-3 py-1 text-sm sm:text-lg md:text-lg lg:text-xl hover:bg-opacity-[0.9]",
};
const Header = () => {
  return (
    <div className={style.header}>
      {/* adding the logo */}
      <div className={style.logo}>
        <Logo />
      </div>
      {/*  adding the main navbar*/}
      <div
        className={style.nav}
        style={{ fontFamily: "Old Standard TT, serif" }}
      >
        <Link href="/">
          <li className={style.list}>Home</li>
        </Link>
        <Link href="/properties">
          <li className={style.list}>Properties</li>
        </Link>
        <Link href="/about">
          <li className={style.list}>About</li>
        </Link>

        <Link href="/contact">
          <li className={style.contact}>Contact</li>
        </Link>
      </div>
    </div>
  );
};

export default Header;
