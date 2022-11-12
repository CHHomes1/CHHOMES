import React from "react";
import Link from "next/link";
const style = {
  logo: "flex flex-col justify-center mb-0 items-center md:items-start cursor-pointer",
  logoImg: "w-[10vw] h-[3vh] md:w-[8vw] md:h-[12vh]",
  // logoImg: "w-[]",
};
const Logo = () => {
  return (
    <Link
      href="/"
      className={style.logo}
      style={{ fontFamily: "Old Standard TT, serif" }}
    >
      <img src="/a.png" alt=" Logo" className={style.logoImg} />
      <h2 className="font-bold text-[10px] md:text-xs">
        CH Homes <span className="italic">&</span> Developers
      </h2>
      <h2 className="text-[8px] md:text-xs">HOME FOR EVERYONE</h2>
    </Link>
  );
};

export default Logo;
