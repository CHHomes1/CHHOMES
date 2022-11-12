import React, { useState } from "react";

const style = {
  wrapper: "flex items-center flex-col md:flex-row justify-center",
  singleInput: "flex flex-col items-start mx-6 md:mx-12 my-6 md:my-1",
  input:
    "bg-blue-50 px-2 md:px-3 py-1 outline-none rounded w-[80vw] md:w-[25vw]",
  label: "text-blue-900 text-xl md:text-lg",
  btn: "bg-blue-600 text-white px-6 md:px-8 py-2 md:py-3 hover:bg-opacity-[0.92] transition duration-[300ms]",
};
const PropertiesFilter = (props) => {
  const [Max, setMax] = useState("");
  const [Min, setMin] = useState("");
  const [IsFilterApplied, setIsFilterApplied] = useState(false);
  const MinChangeHandler = (e) => {
    setMin(e.target.value);
  };
  const MaxChangeHandler = (e) => {
    setMax(e.target.value);
  };
  props.getMin(Min)
  props.getMin(Max)
  props.getIsFilterApplied(IsFilterApplied)
  return (
    <div className={style.wrapper}>
      <div className={style.singleInput}>
        <label htmlFor="min" className={style.label}>
          Min Price
        </label>
        <input
          onChange={MinChangeHandler}
          value={Min}
          type="number"
          className={style.input}
          placeholder="Min Price..."
          id="min"
        />
      </div>
      <div className={style.singleInput}>
        <label htmlFor="max" className={style.label}>
          Max Price
        </label>
        <input
          onChange={MaxChangeHandler}
          value={Max}
          type="number"
          className={style.input}
          placeholder="Max Price..."
          id="max"
        />
      </div>
      <button onClick={() => setIsFilterApplied(true)} className={style.btn}>
        Apply Filter
      </button>
    </div>
  );
};

export default PropertiesFilter;
