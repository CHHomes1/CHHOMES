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
    "border-b-2 border-blue-900 text-3xl md:text-5xl max-w-fit mx-auto py-2 text-blue-900 my-6 font-bold",
  singleContactContainer: "flex items-center ",
  singleContactContainer1: "flex my-4 md:my-5",
  para: "text-blue-900 text-md md:text-md my-2 md:my-4  font-bold mx-4",
  para1: "text-blue-900 text-md md:text-md my-1 md:my-1 font-bold mx-4",
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
        {/* <div className={style.singleContactContainer}>
          <AiOutlinePhone className="text-3xl text-stone-900 bg-white rounded-full p-1 mx-4" />
          <p className={style.para}>+923218420666</p>
        </div> */}
        <div className={style.singleContactContainer1}>
          <AiOutlinePhone className="text-3xl text-stone-900 bg-white rounded-full p-1 mx-4" />

          <p className={style.para1}> Asif Jutt</p>
          <p className={style.para1}>+923218420666</p>
        </div>
        <div className={style.singleContactContainer1}>
          <AiOutlinePhone className="text-3xl text-stone-900 bg-white rounded-full p-1 mx-4" />

          <p className={style.para1}>Shafaqat jutt</p>
          <p className={style.para1}>+923008439935</p>
        </div>
        <div className={style.singleContactContainer1}>
          <AiOutlinePhone className="text-3xl text-stone-900 bg-white rounded-full p-1 mx-4" />

          <p className={style.para1}>Abrar Malik</p>
          <p className={style.para1}>+923334355315</p>
        </div>

        <div className={style.singleContactContainer}>
          <AiOutlineMail className="text-3xl text-stone-900 bg-white rounded-full p-1 mx-4" />
          <p className={style.para}>chhomes07@gmail.com</p>
        </div>
        {/* contact form */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
