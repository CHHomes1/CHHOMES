import React from "react";
import FooterNavbar from "./FooterNavbar";
import Logo from "../UI/Logo";
import FooterLogo from "../UI/FooterLogo";
const style = {
  footer: "flex flex-col bg-[#090333]",
  footerInfo: "py-4 px-8 flex flex-col md:flex-row items-center justify-center",
  social:
    "py-2 px-6 my-3 flex flex-col md:flex-row w-[90%] md:w-[60%] mx-auto items-center justify-around text-blue-600",
  socialButton:
    "my-4 hover:scale-[1.05]  transition duration-[300ms] border-2 border-blue-600  px-6 py-3 sm:px-8 sm:py-3 md:px-8 md:py-2 lg:px-10 lg:py-2",
  signature: "bg-[#090333] mx-auto text-xs my-3 text-gray-100 tracking-wide",
};
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerInfo}>
        {/* adding the logo  */}
        <FooterLogo />
        {/* adding the footer navar */}
        <FooterNavbar />
      </div>
      {/* adding the end of footer */}
      <div className={style.social}>
        <a
          href="https://wa.me/+923218420666/?text="
          className={style.socialButton}
        >
          Contact on Whatsapp
        </a>
        <a href="https://www.facebook.com/asif.jutt.5437">
          <button className={style.socialButton}>Follow on Facebook</button>
        </a>
      </div>
      {/* adding signature */}
      <div className={style.signature}>
        Chaudhary Estate Copyright Registered @2022
      </div>
    </div>
  );
};

export default Footer;
