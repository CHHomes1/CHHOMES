import React from "react";

const style = {
  logo: "flex flex-col justify-center mb-8 items-center md:items-start",
  logoImg: "w-[10vw] h-[3vh] md:w-[5vw] md:h-[8vh]",
  // logoImg: "w-[]",
};
const Logo = () => {
  return (
    <div
      className={style.logo}
      style={{ fontFamily: "Old Standard TT, serif" }}
    >
      <img src="/a.png" alt=" Logo" className={style.logoImg} />
      <h2 className="font-bold text-[10px] md:text-xs">
        CH Homes <span className="italic">&</span> Developers
      </h2>
      <h2 className="text-[8px] md:text-xs">HOME FOR EVERYONE</h2>
    </div>
  );
};

export default Logo;
