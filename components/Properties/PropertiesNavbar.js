import React, { useState } from "react";

const style = {
  wrapper: "flex items-center w-[100vw] md:w-[75vw] flex mx-auto my-12",
};
const PropertiesNavbar = ({handleCategory}) => {
  const [Category, setCategory] = useState("plots");
  const handleCategoryChange = (value) => {
    setCategory(value);
  };
  handleCategory(Category);
  return (
    <div className={style.wrapper}>
      <li
        className={`w-[50%] text-center ${
          Category == "plots"
            ? "bg-orange-500 text-white"
            : "bg-white text-stone-900"
        } px-3 py-2 md:px-6 md:py-2 decoration-none list-none cursor-pointer hover:scale-[0.9] transition duration-[300ms]`}
        onClick={() => handleCategoryChange("plots")}
      >
        PLOTS
      </li>
      <li
        className={`w-[50%] text-center ${
          Category == "houses"
            ? "bg-orange-500 text-white"
            : "bg-white text-stone-900"
        }  px-3 py-2 md:px-6 md:py-2 decoration-none list-none  cursor-pointer hover:scale-[0.9] transition duration-[300ms]`}
        onClick={() => handleCategoryChange("houses")}
      >
        HOUSES
      </li>
      <li
        className={`w-[50%] text-center ${
          Category == "rent"
            ? "bg-orange-500 text-white"
            : "bg-white text-stone-900"
        }  px-3 py-2 md:px-6 md:py-2 decoration-none list-none  cursor-pointer hover:scale-[0.9] transition duration-[300ms]`}
        onClick={() => handleCategoryChange("rent")}
      >
        RENT
      </li>
    </div>
  );
};

export default PropertiesNavbar;
