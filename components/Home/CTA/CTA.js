import React from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
const style = {
  cta: "bg-stone-900 flex justify-around items-center mx-auto text-gray-200 p-1",
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
        <a href="https://wa.me/+923343866227/?text=" className={style.number}>
          (000)111 222 1
        </a>
      </div>
      <div className={style.ctaContainer}>
        <AiOutlineMail className=" text-xl mx-2" />
        <a className={style.email} href="mailto:shariqueimam7777@gmail.com">
          info@talhamalik.com
        </a>
      </div>
    </div>
  );
};
{
  /* <a className={style.number} href="tel://+1234567890"></a> */
}

export default CTA;
