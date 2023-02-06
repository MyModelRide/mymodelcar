import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Cookies from "js-cookie";
import useWindowSize from "../../hooks/useWindowSize";
import { AiOutlineArrowRight } from "react-icons/ai";
import styled from "styled-components";
const style = {
  wrapper: "h-[100vh] w-[100vw] flex flex-col h-[70%]",
  heading:
    "text-4xl md:text-7xl text-white  my-2 md:my-3 w-[100%] md:w-[65%] text-center md:text-left font-semibold",
  para: "tracking-wider text-white text-lg md:text-xl my-3 md:my-8 text-center md:text-left mx-auto md:mx-0 w-[100%] md:w-[65%] font1",
  btn: " px-8 md:px-6 py-3 md:py-4 transition duration-[200ms] max-w-fit mx-auto md:mx-0 ",
  arrow: `text-xl`,
  btnContainer:
    "cursor-pointer hover:opacity-[0.9]  mx-auto md:mx-0 my-2 flex items-center justify-start bg-white   text-gray-900 w-[80%] md:w-[25%] px-4",
  mainContent:
    "w-[100%] md:w-[65%] h-[80%] flex flex-col items-start justify-center  mx-auto font1 my-12   md:my-24",
  input:
    "mb-3 md:mb-4 border-b-2 border-stone-500 w-[100%] ring-none outline-none",
  label: "mt-3 md:mt-4",
};

const Home = (props) => {
  const { width } = useWindowSize();
  // this is the main image in the home page
  const FeaturedBackground1 = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url(${(width < 500 && "/homebg.jpeg") ||
      (width > 500 && width < 1000 && "/homebg.jpeg") ||
      (width > 1000 && "/homebg.jpeg")});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: ${width < 550 ? "95vh" : "95vh"};
    width: 100vw;
  `;
  const onScroll = (val) => {
    props.onScroll(val);
  };
  Cookies.set(
    "model-ride",
    "A website for selling products related to cars, vehicles"
  );
  

  return (
    <div className={style.wrapper} style={{ fontFamily: "Poppins,serif" }}>
      <FeaturedBackground1 className="flex flex-col ">
        <Navbar onScroll={onScroll} />
      </FeaturedBackground1>
    </div>
  );
};

export default Home;
