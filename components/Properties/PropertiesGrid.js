import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
const style = {
  wrapper: "",
  propertyContainer: "",
  name: "",
  specification: "",
  singleSpecification: "",
  description: "",
  price: "",
  contactContainer: "flex",
  btn1: "text-white",
};
const PropertiesGrid = ({
  plotsData,
  rentData,
  housesData,
  SelectedCategory,
}) => {
  // handling the data
  const [DataToBeUsed, setDataToBeUsed] = useState("");
  useEffect(() => {
    if (SelectedCategory == "plots") {
      setDataToBeUsed(plotsData);
    }
    if (SelectedCategory == "houses") {
      setDataToBeUsed(housesData);
    }
    if (SelectedCategory == "rent") {
      setDataToBeUsed(rentData);
    }
  }, []);
  return (
    <div className={style.wrapper}>
      {/* the image of the property */}
      <Image src={""} width={100} heigth={100} />
      {/* the content side of the property */}
      <div className={style.propertyContainer}>
        <h2 className={style.name}>{name}</h2>
        {SelectedCategory !== "plots" && (
          <div className={style.specification}>
            <p className={style.singleSpecification}>{marla} Marla</p>
            <p className={style.singleSpecification}>{rooms} Rooms</p>
            <p className={style.singleSpecification}>{bath} Bath</p>
            <p className={style.singleSpecification}>{lounge} Lounge</p>
            <p className={style.singleSpecification}>{kitchen} Kitchen</p>
          </div>
        )}
        <p className={style.description}>{description1}</p>
        <p className={style.description}>{description2}</p>
        <p className={style.price}>{price}</p>
        <a
          href="https://wa.me/+923343866227/?text="
          className={style.contactContainer}
        >
          <AiOutlineWhatsApp className="text-white mx-3" />
          <button className={style.btn1}>Whatsapp</button>
        </a>
      </div>
    </div>
  );
};

export default PropertiesGrid;
