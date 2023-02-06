import React from "react";
import styled from "styled-components";
import useWindowSize from "../../hooks/useWindowSize";
import PurchaseForm from "./PurchaseForm/PurchaseForm";
const style = {
  wrapper: "bg-[#0647D4] py-24 md:py-36",
  heading:
    "text-5xl md:text-8xl font-medium text-white font tracking-wider text-center font",
};

const Purchase = () => {
  const { width } = useWindowSize();
  const PurchaseBackground = styled.div`
    background: radial-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url(${(width < 500 && "/simple.svg") ||
      (width > 500 && width < 1000 && "/simple.svg") ||
      (width > 1000 && "/simple.svg")});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: auto;
    height: ${width < 550 ? "20vh" : "40vh"};
    width: 100vw;
    height: ${width < 500 ? "130vh" : "150vh"};
  `;
  return (
    <PurchaseBackground className={style.wrapper}>
      <h3 className={style.heading}>Поръчай своя персонализиран модел</h3>
      <PurchaseForm />
    </PurchaseBackground>
  );
};

export default Purchase;
