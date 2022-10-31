import React from "react";
import FooterNavbar from "./FooterNavbar";
import Logo from "../UI/Logo";

const style = {
  footer: "flex flex-col bg-stone-800",
  footerInfo: "p-8 flex flex-col md:flex-row items-center justify-center",
  social:
    " p-6 my-3 flex flex-col md:flex-row w-[90%] md:w-[60%] mx-auto items-center justify-around text-orange-400",
  socialButton:
    "my-4 hover:scale-[1.05]  transition duration-[300ms] border-2 border-orange-400 px-6 py-3 sm:px-8 sm:py-3 md:px-8 md:py-2 lg:px-10 lg:py-2",
  signature: "bg-stone-800 mx-auto text-xs my-3 text-gray-100 tracking-wide",
};
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerInfo}>
        {/* adding the logo  */}
        <Logo />
        {/* adding the footer navar */}
        <FooterNavbar />
      </div>
      {/* adding the end of footer */}
      <div className={style.social}>
        <button className={style.socialButton}>Contact on Whatsapp</button>
        <button className={style.socialButton}>Follow on Facebook</button>
      </div>
      {/* adding signature */}
      <div className={style.signature}>
        Chaudhary Estate Copyright Registered @2022
      </div>
    </div>
  );
};

export default Footer;
