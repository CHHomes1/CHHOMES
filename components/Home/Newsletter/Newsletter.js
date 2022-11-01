import React, { useState } from "react";
import axios from "axios";

const style = {
  newsletter:
    "bg-stone-50 flex flex-col items-center justify-center px-2 py-12 md:p-12",
  heading:
    "my-2 w-[100%] md:w-[60%] text-blue-900 text-center text-4xl sm:text-4xl md:text-4xl lg:text-5xl mx-auto my-6 md:my-12",
  form: "my-4 w-[95%] md:w-[40%] flex border-2 border-blue-600 rounded-full px-4 md::px-6",
  input:
    "my-4 w-[100%] md:w-[100%] mx-auto outline-none text-stone-900 placeholder:text-stone-900 placeholder:text-sm px-6 py-2 italic bg-transparent",
  button:
    "hover:bg-blue-600 transiton duration-[300ms] my-2 w-[100%] md:w-[100%] mx-auto bg-blue-600 px-4 py-1 sm:px-2 sm:py-2 md:px-8 md:py-2 lg:px-10 lg:py-2 max-w-fit text-white rounded-full",
};
const Newsletter = () => {
  const tokenWithWriteAccess =
    "skfqrDRCBXtJS0VRzXnv7ncTzVmM8HsgWgo7NvnKnSMKct7tFKMQwWGpYV8qd9nCFuHpWxFvBI0YGmdG1ZnahGorfIEzwMgFKDcMcVQxCKM2q4RBvAOwyIwDmr7qV8IciXuAHaeyFPoNc7QRr4z5y7XG2KWSZD3kNdLnD6kXmI0dJTE49Rxv";
  const [Email, setEmail] = useState("");
  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };
  const submitHandler = (event) => {
    const sendData = async () => {
      // setIsSubmit(true);
      const { data } = await axios.post(
        `https://i1slpcrm.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
        {
          mutations: [
            {
              create: {
                _type: "letter",
                // createdAt: new Date().toISOString(),
                phoneNumber: Email,
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
        // setIsSubmit(false);
      }, 2000);
      return () => {
        clearTimeout(flashTime);
      };
    };
    sendData();
    setEmail("");
  };
  return (
    <div className={style.newsletter}>
      <div
        className={style.heading}
        style={{ fontFamily: "Old Standard TT, serif" }}
      >
        Want our updates
      </div>
      <div
        className={style.form}
        // style={{ fontFamily: "Old Standard TT, serif" }}
      >
        <input
          type="text"
          className={style.input}
          placeholder="Enter Phone Number ..."
          onChange={handleInputChange}
          value={Email}
        />
        <button
          type="submit"
          className={style.button}
          onClick={() => submitHandler()}
        >
          Get Updates
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
