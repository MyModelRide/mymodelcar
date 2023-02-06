import React from "react";
import SingleProduct from "./SingleProduct";
const style = {
  wrapper:
    "flex w-[100%] md:w-[65%] lg:w-[50%] flex-col md:flex-row items-center justify-center  mx-auto py-8 md:py-12",
};
const Products = () => {
  return (
    <div className={style.wrapper}>
      <SingleProduct
        name=""
        line1="ИЗЦЯЛО ПЕРСОНАЛИЗИРАН МОДЕЛ"
        line2="ТОЧНО КОПИЕ НА ВАШИЯ АВТОМОБИЛ"
        line3="РАЗНООБРАЗИЕ ОТ МАЩАБИ"
        // below hold the image for the single product that is displayedin the products page
        imageURL={"/2.jpeg"}
      />
      <SingleProduct
        name=""
        line1="ИДЕАЛЕН ПОДАРЪК ЗА ВСЕКИ АВТОМОБИЛЕН ЕНТУСИАСТ"
        line2="ДЕКОРАЦИЯ ЗА ВАШАТА ВИТРИНА"С
        line3="ИЗРАБОТЕНИ ОТ ВИСОКОКАЧЕСТВЕНИ МАТЕРИАЛИ"
        // below hold the image for the single product that is displayedin the products page
        imageURL={"/1.jpeg"}
      />
    </div>
  );
};

export default Products;
