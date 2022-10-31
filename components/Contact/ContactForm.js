import React, { useState, useEffect } from "react";
import axios from "axios";
const style = {
  wrapper: "",
  smallHeading:
    "border-b-2 border-blue-900 text-3xl md:text-4xl max-w-fit mx-auto py-2 text-blue-900 my-8 md:my-10 font-bold",
  formContainer: "flex flex-col",
  input:
    "px-3  md:px-4 py-2 md:py-3 placeholder:text-gray-900 ring-none outline-none bg-[#F5F4F4] my-4 w-[90%] md:w-[85%] mx-auto",
  btn: "text-white bg-opacity-[1] hover:bg-opacity-[0.95] transition duration-[300ms] my-6 bg-blue-900 mx-auto px-8 md:px-12 py-2 md:py-3 font-bold tracking-wide",
};

const ContactForm = () => {
  const [isError, setError] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const tokenWithWriteAccess =
    "skfqrDRCBXtJS0VRzXnv7ncTzVmM8HsgWgo7NvnKnSMKct7tFKMQwWGpYV8qd9nCFuHpWxFvBI0YGmdG1ZnahGorfIEzwMgFKDcMcVQxCKM2q4RBvAOwyIwDmr7qV8IciXuAHaeyFPoNc7QRr4z5y7XG2KWSZD3kNdLnD6kXmI0dJTE49Rxv";
  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const messageChangeHandler = (e) => {
    setMessage(e.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const sendData = async () => {
      setIsSubmit(true);
      const { data } = await axios.post(
        `https://i1slpcrm.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
        {
          mutations: [
            {
              create: {
                _type: "contact",
                createdAt: new Date().toISOString(),
                name: Name,
                email: Email,
                message: Message,
              },
            },
          ],
        },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${tokenWithWriteAccess}`,
          },
        }
      );
      // to represent the success message
      const flashTime = setTimeout(() => {
        setIsSubmit(false);
      }, 2000);
      return () => {
        clearTimeout(flashTime);
      };
    };
    sendData();
    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className={style.wrapper} style={{ fontFamily: "Poppins, serif" }}>
      <h2 className={style.smallHeading}>Send Message</h2>
      <form
        className={style.formContainer}
        onSubmit={submitHandler}
        style={{ fontFamily: "Poppins, serif" }}
      >
        <input
          type="name"
          className={style.input}
          placeholder="Your Name here..."
          value={Name}
          onChange={nameChangeHandler}
        />
        <input
          type="email"
          className={style.input}
          placeholder="Your Email here... "
          value={Email}
          onChange={emailChangeHandler}
        />
        <textarea
          rows="10"
          col="20"
          className={style.input}
          placeholder="Your Message here... "
          value={Message}
          onChange={messageChangeHandler}
        ></textarea>
        <button className={style.btn}>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
