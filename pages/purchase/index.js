import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Purchase from "../../components/Purchase/Purchase";
const style = {
  wrapper: "",
};
const index = () => {
  return (
    <div className={style.wrapper}>
      <Navbar onScroll={() => {}} />
      <Purchase />
      <Footer onScroll={() => {}} />
    </div>
  );
};

export default index;
