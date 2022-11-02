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
        className={`w-[50%] text-center border-2 border-blue-600 ${
          Category == "plots"
            ? "bg-blue-600 text-white"
            : "bg-white text-blue-900"
        } px-3 py-2 md:px-6 md:py-2 decoration-none list-none cursor-pointer hover:scale-[0.9] transition duration-[300ms]`}
        onClick={() => handleCategoryChange("plots")}
      >
        PLOTS
      </li>
      <li
        className={`w-[50%] text-center border-2 border-blue-600 ${
          Category == "houses"
            ? "bg-blue-600 text-white"
            : "bg-white text-blue-900"
        }  px-3 py-2 md:px-6 md:py-2 decoration-none list-none  cursor-pointer hover:scale-[0.9] transition duration-[300ms]`}
        onClick={() => handleCategoryChange("houses")}
      >
        HOUSES
      </li>
      <li
        className={`w-[50%] text-center border-2 border-blue-600 ${
          Category == "rent"
            ? "bg-blue-600 text-white"
            : "bg-white text-blue-900"
        }  px-3 py-2 md:px-6 md:py-2 decoration-none list-none  cursor-pointer hover:scale-[0.9] transition duration-[300ms]`}
        onClick={() => handleCategoryChange("rent")}
      >
        RENT
      </li>
    </div>
  );
};

export default PropertiesNavbar;
