import React from "react";
import SingleCounter from "./SingleCounter";

const style = {
  wrapper: 'h-[60%] flex justify-around my-6 flex-wrap',
  singleCounter: 'flex flex-col items-center justify-center w-[45%] p-4',
  details: 'text-blue-900 text-lg sm:text-lg md:text-md my-2',
}
const Counter = () => {
  return (

    <div className={style.wrapper}>
        <div className={style.singleCounter}>
          <SingleCounter start={0} end={40} duration={2} />
          <p className={style.details}>
            Houses
          </p>
        </div>


        <div className={style.singleCounter}>
          <SingleCounter start={0} end={800} duration={1} />
          <p className={style.details}>
            Houese Rented
          </p>
        </div>

        <div className={style.singleCounter}>
          <SingleCounter start={0} end={100} duration={1} />
          <p className={style.details}>
            Happy Customers
          </p>
        </div>
        <div className={style.singleCounter}>
          <SingleCounter start={0} end={50} duration={2} />
          <p className={style.details}>
            Plots Buy/Sell
          </p>
        </div>
    </div>


  );
};

export default Counter;
