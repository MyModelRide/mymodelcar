import React, { useState, useEffect } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";

const style = {
  wrapper: "w-[90%] md:w-[40%] lg:w-[35%] mx-auto py-12 md:py-12",
  input:
    "mb-3 md:mb-4 w-[100%] ring-none outline-none text-gray-700 rounded-md p-3 my-2",
  input1:
    "custom-file-input mb- md:mb-1  w-[100%] ring-none outline-none text-gray-700  rounded-md  my-2 flex items-center justify-center text-center",
  label: "mt-3 md:mt-4 text-md mb-2",
  button:
    "px-8 md:px-16 py-2 md:py-3 text-lg text-white bg-[#D49306] rounded-full mx-auto my-5 md:my-6 hover:bg-opacity-[0.88] transition duration-[300ms]",
  para: "text-white my-1 text-sm",
};
const PurchaseForm = () => {
  const tokenWithWriteAccess =
    "skZvPsFVJZY444tijVUzxXE01WwMUztFVBWzkBcf8T3DAgs0lCeaKNsVveFwOFPrxQkl0Y2VLMtfPz42oTJLxVqvWUHigFB1hF9N8ztFZLsiN4g7XpZv1dZ2RScb1qLftkaQRs3rK0YiSAB1oNe4bs0iGIanFsPbXNMiD5vz3EYQNaMRZTbM";
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Option, setOption] = useState("300");
  const [Details, setDetails] = useState("");
  const [item, setItem] = useState({
    name: "My Model Car Purchase ",
    description: "My Model Car Purchase ",
    image:
      "https://res.cloudinary.com/dwsjylbja/image/upload/v1675514066/logo/logo_colour_h4cmwr.svg",
    quantity: 1,
    price: 100,
  });
  const imageChangeHanlder = (event) => {};
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleOptionChange = (event) => {
    setOption(event.target.value);
    if (event.target.value == "300") {
      setItem({
        name: "My Model Car Purchase ",
        description: "My Model Car Purchase ",
        image:
          "https://res.cloudinary.com/dwsjylbja/image/upload/v1675514066/logo/logo_colour_h4cmwr.svg",
        quantity: 1,
        price: 300,
      });
    }
    if (event.target.value == "450") {
      setItem({
        name: "My Model Car Purchase ",
        description: "My Model Car Purchase ",
        image:
          "https://res.cloudinary.com/dwsjylbja/image/upload/v1675514066/logo/logo_colour_h4cmwr.svg",
        quantity: 1,
        price: 450,
      });
    }
    if (event.target.value == "600") {
      setItem({
        name: "My Model Car Purchase ",
        description: "My Model Car Purchase ",
        image:
          "https://res.cloudinary.com/dwsjylbja/image/upload/v1675514066/logo/logo_colour_h4cmwr.svg",
        quantity: 1,
        price: 600,
      });
    }
    if (event.target.value == "750") {
      setItem({
        name: "My Model Car Purchase ",
        description: "My Model Car Purchase ",
        image:
          "https://res.cloudinary.com/dwsjylbja/image/upload/v1675514066/logo/logo_colour_h4cmwr.svg",
        quantity: 1,
        price: 750,
      });
    }
    if (event.target.value == "900") {
      setItem({
        name: "My Model Car Purchase ",
        description: "My Model Car Purchase ",
        image:
          "https://res.cloudinary.com/dwsjylbja/image/upload/v1675514066/logo/logo_colour_h4cmwr.svg",
        quantity: 1,
        price:900,
      });
    }
    if (event.target.value == "1050") {
      setItem({
        name: "My Model Car Purchase ",
        description: "My Model Car Purchase ",
        image:
          "https://res.cloudinary.com/dwsjylbja/image/upload/v1675514066/logo/logo_colour_h4cmwr.svg",
        quantity: 1,
        price: 1050,
      });
    }
  };
  const handleDetailsChange = (event) => {
    setDetails(event.target.value);
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    let fileData = Array.from(event.currentTarget.elements).find(
      ({ name }) => name === "files"
    );
    const formData0 = new FormData();
    const formData1 = new FormData();
    const formData2 = new FormData();
    const formData3 = new FormData();
    const formData4 = new FormData();
    const formData5 = new FormData();
    const formData6 = new FormData();
    const formData7 = new FormData();
    const formData8 = new FormData();
    const formData9 = new FormData();
    let formData = [
      formData0,
      formData1,
      formData2,
      formData3,
      formData4,
      formData5,
      formData6,
      formData7,
      formData8,
      formData9,
    ];
    // adding the fundtion to upload data to cloundinary
    let imageURLS = [];
    // for (let i = 0; i < fileData.files.length; i++) {
    //   if (fileData.files[i]) {
    //     formData[i].append("file", fileData.files[i]);
    //   }
    //   formData[i].append("upload_preset", "race-pro");
    // }
    // for (let i = 0; i < fileData.files.length; i++) {
    //   let a = await fetch(
    //     "https://api.cloudinary.com/v1_1/dwsjylbja/image/upload",
    //     {
    //       method: "POST",
    //       body: formData[i],
    //     }
    //   ).then((r) => r.json());
    //   imageURLS.push(a.secure_url);
    // }
    let data = { Name, Email, Option, Details };
    // adding the function to upload the data to sanity
    formData0.append("file", fileData.files[0]);
    const sendData = async () => {
      // const { data } = await axios.post(
      //   `https://02r9lx8e.api.sanity.io/v2021-06-07/data/mutate/production?returnIds=true`,
      //   {
      //     mutations: [
      //       {
      //         create: {
      //           _type: "users",
      //           createdAt: new Date().toISOString(),
      //           name: Name,
      //           email: Email,
      //           option: Option,
      //           details: Details,
      //           images: imageURLS,
      //         },
      //       },
      //     ],
      //   },
      //   {
      //     headers: {
      //       "Content-type": "application/json",
      //       Authorization: `Bearer ${tokenWithWriteAccess}`,
      //     },
      //   }
      // );
      // fetch("/api/email", {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json, text/plain, */*",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // }).then(() => {
      //   console.log("EMAIL sent");
      // });
      // fetch("/api/email-to-owner", {
      //   method: "POST",
      //   headers: {
      //     Accept: "application/json, text/plain, */*",
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(data),
      // }).then(() => {
      //   console.log("EMAIL sent");
      // });
    };
    const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
    const stripePromise = loadStripe(publishableKey);
    const createCheckOutSession = async () => {
      const stripe = await stripePromise;
      const checkoutSession = await axios.post("/api/create-stripe-session", {
        item: item,
      });
      const result = await stripe.redirectToCheckout({
        sessionId: checkoutSession.data.id,
      });
      if (result.error) {
        alert(result.error.message);
      }
    };
    createCheckOutSession();
    // sendData();
  };

  return (
    <div className={style.wrapper}>
      <div className="flex justify-between items-between w-[100%] mb-4 bg- p-2 rounded mx-auto">
        <p className="text-xl md:text-2xl font1 text-white font-bold">
          Цена :{" "}
        </p>
        <h2 className="text-xl md:text-2xl font1 text-green-500 font-bold">
          {Option} лв.
        </h2>
      </div>
      <p className={style.para}>Данни за поръчка</p>
      <form className="flex flex-col items-start" onSubmit={handleFormSubmit}>
        <input
          type="text"
          className={style.input}
          onChange={handleNameChange}
          placeholder="Име и Фамилия"
        />
        <input
          type="email"
          className={style.input}с
          onChange={handleEmailChange}
          placeholder="Email"
        />{" "}
        <p className={style.para}>Качи твоите снимки</p>
        <input
          type="file"
          id="files"
          name="files"
          multiple
          className={style.input1}
          onChange={imageChangeHanlder}
        />
        <select
          name="forward_reason_business"
          required="required"
          onChange={handleOptionChange}
          className={style.input}
        >
          <option value="300">1:64</option>
          <option value="450">1:43</option>
          <option value="600">1:32</option>
          <option value="750">1:24</option>
          <option value="900">1:18</option>
          <option value="1050">1:12</option>
        </select>
        <textarea
          type="text"
          className={style.input}
          rows="6"
          cols="20"
          placeholder="Детайли"
          onChange={handleDetailsChange}
        />
        <button className={style.button} type="submit">
          ПОРЪЧАЙ
        </button>
      </form>
    </div>
  );
};

export default PurchaseForm;
