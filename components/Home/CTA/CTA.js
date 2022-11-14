import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
const style = {
  cta: "bg-[#090333] flex justify-around items-center mx-auto text-gray-200 p-1",
  number: "font-semibold text-xs sm:text-xs md:text-sm lg:text-xs",
  email: "font-semibold text-xs sm:text-xs md:text-sm lg:text-xs",
  ctaContainer: "flex items-center justify-center",
};
<a href="tel://+1234567890">Call Me</a>;

const CTA = () => {
  return (
    <div className={style.cta}>
      <div className={style.ctaContainer}>
        <AiOutlinePhone className="text-xl mx-2" />
        <a href="https://wa.me/+923218420666/?text=" className={style.number}>
          0321-8420666
        </a>
      </div>
      <div className={style.ctaContainer}>
        <AiOutlineMail className=" text-xl mx-2" />
        <a className={style.email} href="mailto:chhomes07@gmail.com">
          chhomes07@gmail.com
        </a>
      </div>
    </div>
  );
};
{
  /* <a className={style.number} href="tel://+1234567890"></a> */
}

export default CTA;
