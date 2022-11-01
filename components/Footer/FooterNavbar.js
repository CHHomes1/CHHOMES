import React from "react";
import Link from "next/link";
const style = {
  footerNavbarContainer: "",
  listContainer: "flex flex-col md:flex-row",
  oneNavItem:
    "border-move-animation-orange cursor-pointer mx-4 text-blue-600 tracking-normal hover:border-opacity-[0.5] transition duration-[400ms] text-center my-1 md:my-3",
};

const FooterNavbar = () => {
  return (
    <div className={style.footerNavbarContainer}>
      <ul
        className={style.listContainer}
        style={{ fontFamily: "Old Standard TT, serif" }}
      >
        <Link href="/">
          <li className={style.oneNavItem}>Home</li>
        </Link>
        <Link href="/properties">
          <li className={style.oneNavItem}>Properties</li>
        </Link>
        <Link href="/about">
          <li className={style.oneNavItem}>About</li>
        </Link>
        <Link href="/contact">
        <li className={style.oneNavItem}>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default FooterNavbar;
