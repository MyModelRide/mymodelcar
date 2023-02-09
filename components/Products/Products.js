import React from "react";
import { useRouter } from "next/router";
import SingleProduct from "./SingleProduct";
const style = {
  wrapper:
    "flex w-[100%] md:w-[65%] lg:w-[50%] flex-col md:flex-row items-center justify-center  mx-auto py-8 md:py-12",
};
const Products = () => {
  const { locale } = useRouter();
  return (
    <div className={style.wrapper}>
      <SingleProduct
        name=""
        line1={
          locale == "en"
            ? "FULLY CUSTOMIZED MODEL"
            : " ИЗЦЯЛО ПЕРСОНАЛИЗИРАН МОДЕЛ "
        }
        line2={
          locale == "en"
            ? "EXACT COPY OF YOUR CAR"
            : " ТОЧНО КОПИЕ НА ВАШИЯ АВТОМОБИЛ "
        }
        line3={locale == "en" ? "VARIETY OF SCALE" : " РАЗНООБРАЗИЕ ОТ МАЩАБИ "}
        // below hold the image for the single product that is displayedin the products page
        imageURL={"/2.jpeg"}
      />
      <SingleProduct
        name=""
        line1={
          locale == "en"
            ? "THE PERFECT GIFT FOR ANY CAR ENTHUSIAST"
            : " ИДЕАЛЕН ПОДАРЪК ЗА ВСЕКИ АВТОМОБИЛЕН ЕНТУСИАСТ "
        }
        line2={
          locale == "en"
            ? "DECORATION FOR YOUR SHOWCASE"
            : " ДЕКОРАЦИЯ ЗА ВАШАТА ВИТРИНА "
        }
        С
        line3={
          locale == "en"
            ? "MADE OF HIGH QUALITY MATERIALS"
            : " ИЗРАБОТЕНИ ОТ ВИСОКОКАЧЕСТВЕНИ МАТЕРИАЛИ "
        }
        // below hold the image for the single product that is displayedin the products page
        imageURL={"/1.jpeg"}
      />
    </div>
  );
};

export default Products;
