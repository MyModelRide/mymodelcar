import React from "react";
import Image from "next/image";
import { BiRadioCircle } from "react-icons/bi";
import Link from "next/link";
const style = {
  wrapper:
    "mx-6 md:mx-8 flex flex-col items-center w-[100%] md:w-[50%] hover:bg-gray-200 transition duration-[300ms] cursor-pointer",
  singleSpecification: "flex items-center ",
  specification: "text-sm  font1 py-2 md:py-1",
  radio: "text-[#0647D4] mr-3 md:mr-1",
  name: "font font-semibold text-center my-2 md:my-4 text-2xl  md:text-2xl",
  btn: "px-12 md:px-9 py-2 md:py-2  my-3 md:my-6 bg-[#0647D4] text-white rounded-full",
};
const SingleProduct = ({ imageURL, name, line1, line2, line3 }) => {
  return (
    <Link className={style.wrapper} href='/purchase'>
      <Image
        src={imageURL}
        height={200}
        width={200}
        alt="Image of the product"
      />
      <p className={style.name}>{name}</p>
      <div className="w-[80%] md:w-[70%]">
        <section className={style.singleSpecification}>
          <BiRadioCircle className={style.radio} />
          <p className={style.specification}>{line1}</p>
        </section>
        <section className={style.singleSpecification}>
          <BiRadioCircle className={style.radio} />
          <p className={style.specification}>{line2}</p>
        </section>
        <section className={style.singleSpecification}>
          <BiRadioCircle className={style.radio} />
          <p className={style.specification}>{line3}</p>
        </section>
      </div>
      <Link href="/purchase">
        <button className={style.btn}>ПОРЪЧАЙ СЕГА!</button>
      </Link>
    </Link>
  );
};

export default SingleProduct;
