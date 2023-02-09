import React, { useState } from "react";
import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import NavDrawer from "./NavDrawer";
import { useRouter } from "next/router";
import "animate.css";
const Navbar = (props) => {
  const style = {
    navDrawer: "flex sm:hidden items-center ",
    wrapper:
      "fixed text-gray-900 pt-1 md:py-4 z-10 w-[100%] md:w-[100%] bg-white bg-opacity-[0.9] shadow-sm shadow-white",
    mainNav:
      "flex items-center justify-between py-1 md:py-1 hidden sm:flex w-[100%] md:w-[90%] mx-auto",
    list: "list-none cursor-pointer text-primary md:mx-4 hover:opacity-[0.8] text-sm font-normal",
    navContainer: "flex items-center justify-center",
    cartButton:
      "flex items-center justify-center mx-5 bg-[#D49306] text-white px-3 py-2 text-sm rounded-2xl hover:opacity-[0.9]",
    img: "cursor-pointer",
    input: "bg-transparent",
  };
  const [Enter, setEnter] = useState(false);
  const [Item, setItem] = useState("home");
  const { locale, locales, push } = useRouter();

  props.onScroll(Item);
  const handleScroll = (val) => {
    setItem(val);
  };
  const handleOptionChange = (e) => {
    push("/", undefined, { locale: e.target.value });
  };

  return (
    // install the mui first for the Navdrawer
    <div className={style.wrapper}>
      <nav className={style.mainNav}>
        <div className={style.img}>
          <Link href="/">
            <Image
              src={"/logo_colour.svg"}
              height={200}
              width={200}
              alt="logo for website"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center font1 ">
          <ul className={style.navContainer}>
            <Link href="/" locale={locale}>
              <li className={style.list} onClick={() => setItem("home")}>
                {locale == "en" ? "Home" : "Начало"}
              </li>
            </Link>{" "}
            <Link href="/purchase" locale={locale}>
              <li className={style.list} onClick={() => setItem("services")}>
                {locale == "en" ? "Model Ride" : " Поръчка"}
              </li>
            </Link>
            <Link href="/blog" locale={locale}>
              <li className={style.list} onClick={() => setItem("why")}>
                {locale == "en" ? "Blog" : " Блог"}
              </li>{" "}
            </Link>
          </ul>
          <Link href="/purchase" locale={locale}>
            <button
              className={style.cartButton}
              // onMouseEnter={() => setEnter(true)}
              // onMouseLeave={() => setEnter(false)}
            >
              {" "}
              {locale == "en" ? "Purchase" : " Поръчай"}
              <h2></h2>
              <FiShoppingCart
                className={`text-2xl md:text-xl text-white   mx-2 ${
                  Enter && "animate__animated animate__tada"
                }`}
              />
            </button>
          </Link>
          <select
            name="forward_reason_business"
            required="required"
            onChange={handleOptionChange}
            className={style.input}
          >
            <option value="en" selected={locale == "en" ? true : false}>
              EN
            </option>
            <option value="bg" selected={locale == "bg" ? true : false}>
              BG
            </option>
          </select>
        </div>
      </nav>
      <div className={style.navDrawer}>
        <NavDrawer onScroll={handleScroll} />
      </div>
    </div>
  );
};

export default Navbar;
