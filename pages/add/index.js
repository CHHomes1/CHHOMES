// import React, { useState } from "react";
// import Animator from "../../components/UI/Animator";
// import useGeoLocation from "../../hooks/useGeoLocation";
// import GooglePlacesAutocomplete, {
//     geocodeByPlaceId,
//   } from "react-google-places-autocomplete";
// const style = {
//   wrapper: "flex flex-col items-center justify-center w-[100%]",
//   heading: "text-blue-900 text-3xl md:text-4xl",
//   input:
//     "my-1 py-2 md:py-2 rounded bg-blue-100 px-2 md:px-4 w-[90%] outline-none",
//   formContainer: "",
//   singleItemContainer: "flex flex-col w-[80vw] md:w-[50vw]",
// };
// const index = () => {
//   const currentLocation = useGeoLocation();
//   console.log(currentLocation.coordinates.lat && currentLocation.coordinates)
//   const [Id, setId] = useState("");
//   const [Name, setName] = useState("");
//   const [Price, setPrice] = useState("");
//   const [Image, setImage] = useState("");
//   const [Marla, setMarla] = useState("");
//   const [Description1, setDescription1] = useState("");
//   const [Description2, setDescription2] = useState("");

//   const IdChangeHandler = (e) => {
//     setId(e.target.value);
//   };
//   const NameChangeHandler = (e) => {
//     setName(e.target.value);
//   };
//   const PriceChangeHandler = (e) => {
//     setPrice(e.target.value);
//   };
//   const ImageChangeHandler = (e) => {
//     setImage(e.target.value);
//   };
//   const MarlaChangeHandler = (e) => {
//     setMarla(e.target.value);
//   };
//   const Description1ChangeHandler = (e) => {
//     setDescription1(e.target.value);
//   };
//   const Description2ChangeHandler = (e) => {
//     setDescription2(e.target.value);
//   };

//   return (
//     <Animator>
//       <div className={style.wrapper}>
//       <GooglePlacesAutocomplete
//               apiKey="AIzaSyD__R5BJnyxVeNz7LLiUQ5BnJ3p5FjxIAI"
//               selectProps={{
//                 isClearable: true,
//                 value: Name,
//                 placeholder: "Institute Name...",
//                 onChange: (val) => {
//                   NameChangeHandler(val);
//                 },
//               }}
//               autocompletionRequest={{
//                 componentRestrictions: {
//                   country: ["pk"],
//                 },
//                 types: [
//                   "primary_school",
//                   "school",
//                   "secondary_school",
//                   "university",
//                 ],
//               }}
//             />
//         <h1 className={style.heading}>Adding New Property</h1>
//         <section className={style.formContainer}>
//           <div className={style.singleItemContainer}>
//             <label htmlFor="id">Id</label>
//             <input
//               id="id"
//               type="text"
//               className={style.input}
//               placeholder=""
//               value={Id}
//               onChange={IdChangeHandler}
//             />
//           </div>
//           <div className={style.singleItemContainer}>
//             <label htmlFor="name">Name</label>
//             <input
//               id="name"
//               type="text"
//               className={style.input}
//               placeholder=""
//               value={Name}
//               onChange={NameChangeHandler}
//             />
//           </div>
//           <div className={style.singleItemContainer}>
//             <label htmlFor="price">Price</label>
//             <input
//               id="price"
//               type="text"
//               className={style.input}
//               placeholder=""
//               value={Price}
//               onChange={PriceChangeHandler}
//             />
//           </div>
//           <div className={style.singleItemContainer}>
//             <label htmlFor="image">Image</label>
//             <input
//               id="image"
//               type="text"
//               className={style.input}
//               placeholder=""
//               value={Image}
//               onChange={ImageChangeHandler}
//             />
//           </div>
//           <div className={style.singleItemContainer}>
//             <label htmlFor="marla">Marla</label>
//             <input
//               id="marla"
//               type="text"
//               className={style.input}
//               placeholder=""
//               value={Marla}
//               onChange={MarlaChangeHandler}
//             />
//           </div>
//           <div className={style.singleItemContainer}>
//             <label htmlFor="description1">Description 1</label>
//             <input
//               id="description1"
//               type="text"
//               className={style.input}
//               placeholder=""
//               value={Description1}
//               onChange={Description1ChangeHandler}
//             />
//           </div>
//           <div className={style.singleItemContainer}>
//             <label htmlFor="description2">Description 2</label>
//             <input
//               id="description2"
//               type="text"
//               className={style.input}
//               placeholder=""
//               value={Description2}
//               onChange={Description2ChangeHandler}
//             />
//           </div>
//         </section>
//       </div>
//     </Animator>
//   );
// };

// export default index;

import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index