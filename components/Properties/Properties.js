import React, { useState } from "react";
import PropertiesNavbar from "./PropertiesNavbar";
import PropertiesGrid from "./PropertiesGrid";
const style = {
  wrapper: "flex items-center justify-center flex-col",
  mainHeading:
    "text-center md:text-left my-2 text-stone-700 text-3xl sm:text-4xl md:text-5xl lg:text-5xl my-6 md:my-8 mx-auto",
};
const Properties = ({ plotsData,rentData,housesData }) => {
  const [SelectedCategory, setSelectedCategory] = useState("plots");
  const handleCategory = (value) => {
    setSelectedCategory(value);
  };
  return (
    <div className={style.wrapper} style={{ fontFamily: "Poppins, serif" }}>
      {/* adding the heading for the properties */}
      <div
        className={style.mainHeading}
        style={{ fontFamily: "Poppins, serif" }}
      >
        All Properties
      </div>
      {/* adding the navbar for the properties */}
      <PropertiesNavbar handleCategory={handleCategory} />
      {/* adding the list of properties */}
      <PropertiesGrid
        plotsData={plotsData}
        rentData={rentData}
        housesData={housesData}
        selectedcategory={SelectedCategory}
      />
    </div>
  );
};

export default Properties;
