import React from "react";
// import Header from "../Header/Header";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import ContactForm from "./ContactForm";

const style = {
  wrapper: "flex flex-col ",
  contactContainer:
    "px-3 md:px-5 py-5 md:py-6 w-[90%] md:w-[50%] lg:w-[40%] mx-auto bg-white my-4 md:my-16",
  smallHeading:
    "border-b-2 border-stone-700 text-3xl md:text-5xl max-w-fit mx-auto py-2 text-stone-700 my-6 font-bold",
  singleContactContainer: "flex items-center ",
  para: "text-stone-900 text-md md:text-md my-2 md:my-4 hover:text-green-900 font-bold",
};
const Contact = () => {
  return (
    <div className={style.wrapper} style={{ fontFamily: "Poppins, serif" }}>
      {/* <Header headingText="CONTACT" /> */}
      <div className={style.contactContainer}>
        <h2 className={style.smallHeading}>How can we help you?</h2>
        {/* <div className={style.singleContactContainer} style={{ fontFamily: 'Poppins, sans-serif' }}>
            <HiOutlineLocationMarker className="text-3xl text-green-600 bg-green-300 rounded-full p-1 mx-4"/>
            <p className={style.para}>28 Green Tower, Street Name,Islamabad, Pakistan</p>
          </div> */}
        <div className={style.singleContactContainer}>
          <AiOutlinePhone className="text-3xl text-stone-900 bg-white rounded-full p-1 mx-4" />
          <p className={style.para}>+92312121212</p>
        </div>
        <div className={style.singleContactContainer}>
          <AiOutlineMail className="text-3xl text-stone-900 bg-white rounded-full p-1 mx-4" />
          <p className={style.para}>email@gmail.com</p>
        </div>
        {/* contact form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
