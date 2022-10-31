import React from "react";

const style = {
  mainHeading:
    "text-center md:text-left my-4 text-stone-200 md:text-stone-800 text-5xl sm:text-5xl md:text-6xl lg:text-6xl my-2 mx-auto md:mx-0",
  smallHeading:
    "text-center md:text-left my-2 text-blue-600 text-md sm:text-sm md:text-lg lg:text-xl mx-auto md:mx-0 tracking-widest",
  contentHeading:
    "text-center md:text-left my-2 text-blue-900 text-3xl sm:text-3xl md:text-4xl lg:text-4xl my-6 md:my-8 mx-auto",
};

export const MainHeading = ({ headingText }) => {
  return (
    <div className={style.mainHeading} style={{ fontFamily: "Hahmlet, serif" }}>
      {headingText}
    </div>
  );
};

export const SmallHeading = ({ headingText }) => {
  return (
    <div
      className={style.smallHeading}
      style={{ fontFamily: "Open Sans, serif" }}
    >
      {headingText}
    </div>
  );
};
export const ContentHeading = ({ headingText }) => {
  return (
    <div
      className={style.contentHeading}
      style={{ fontFamily: "Poppins, serif" }}
    >
      {headingText}
    </div>
  );
};
