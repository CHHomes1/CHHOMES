import React, { useState, useEffect } from "react";
import PropertiesNavbar from "./PropertiesNavbar";
import PropertiesGrid from "./PropertiesGrid";
import client from "../../pages/api/client";
import PropertiesFilter from "./PropertiesFilter";
const style = {
  wrapper: "flex flex-col items-center",
  mainHeading:
    "text-center md:text-left my-2 text-blue-900 text-3xl sm:text-4xl md:text-5xl lg:text-5xl my-6 md:my-8 mx-auto",
};
const Properties = () => {
  const [SelectedCategory, setSelectedCategory] = useState("plots");
  const [plotsData, setplotsData] = useState([]);
  const [rentData, setrentData] = useState([]);
  const [housesData, sethousesData] = useState([]);
  const [Max, setMax] = useState("");
  const [Min, setMin] = useState("");
  const [IsFilterApplied, setIsFilterApplied] = useState(false);
  const handleCategory = (value) => {
    setSelectedCategory(value);
  };
  useEffect(() => {
    const fetchData = async () => {
      const p = await client.fetch(`*[_type == "plots"]`);
      p.sort((a, b) => {
        return a.id - b.id;
      });
      setplotsData(p);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const p = await client.fetch(`*[_type == "houses"]`);
      p.sort((a, b) => {
        return a.id - b.id;
      });
      sethousesData(p);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const p = await client.fetch(`*[_type == "rent"]`);
      p.sort((a, b) => {
        return a.id - b.id;
      });
      setrentData(p);
    };
    fetchData();
  }, []);
  // console.log(rentData)
  const handleIsFilterApplied = (val) => {
    setIsFilterApplied(val);
  };
  const getMin = (val) => {
    setMin(val);
  };
  const getMax = (val) => {
    setMax(val);
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
      {/* <PropertiesFilter
        getMin={getMin}
        getMax={getMax}
        getIsFilterApplied={handleIsFilterApplied}
      /> */}
      {/* {plotsData.length>0 && housesData.lenght>0 && houses} */}
      <PropertiesGrid
        plotsData={plotsData}
        rentData={rentData}
        housesData={housesData}
        selectedcategory={SelectedCategory}
        // max={Max}
        // min={Min}
        // IsFilterApplied={IsFilterApplied}
      />
    </div>
  );
};

export default Properties;
