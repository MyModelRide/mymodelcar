import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import Link from "next/link";
const style = {
  wrapper: "ml-0 bg-[#0647D4] font text-white py-12 md:py-12",
  logoContainer: "flex flex-col items-start justify-between",
  footerContent:
    "flex flex-col md:flex-row w-[95%] md:w-[50%] mx-auto justify-between",
  navLinks: "flex flex-col md:flex-row",
  col1: " flex flex-col items-start justify-between mx-8 md:mx-0 px-12 md:px-16 ",
  col2: " flex flex-col items-start justify-between mx-8 md:mx-0 px-12 md:px-16 ",
  signature: "text-xs mt-8 md:mt-20 hidden md:flex hover:opacity-[0.85]",
  mobileSignature: "text-xs mt-8 md:mt-20",
  list: "text-white decoration-none list-none my-3 md:mb-8  cursor-pointer border-move-animation1 hover:opacity-[0.85]",
  socialsContainer:
    "flex flex-col items-start justify-between mx-8 md:mx-0 px-12 md:px-0",
  socials: "",
  externalLink: "text-2xl md:text-3xl mr-2 cursor-pointer text-white",
  mobile: "flex md:hidden flex-col",
};
const Footer = () => {
  return (
    <div className={style.wrapper}>
      {/* adding the content */}
      <div className={style.footerContent}>
        <section className={style.logoContainer}>
          <Image
            src={"/logo_white.svg"}
            height={200}
            width={200}
            alt="Logo of the website"
          />{" "}
          <Link href="/privacy-policy">
            <p className={style.signature}>Privacy Policy</p>
          </Link>
        </section>
        <section className={style.navLinks}>
          <div className={style.col1}>
            <ul>
              <Link href="/">
                <li className={style.list}>НАЧАЛО</li>
              </Link>
              <Link href="/purchase">
                <li className={style.list}>ПОРЪЧКА</li>{" "}
              </Link>
              <Link href="/blog">
                <li className={style.list}>БЛОГ</li>
              </Link>
            </ul>
            <Link href="/terms-and-conditions">
              <p className={style.signature}>Terms and Conditions</p>
            </Link>
          </div>
          <div className={style.col2}>
            <ul>
              <Link href="/purchase">
                <li className={style.list}>КУПИ</li>{" "}
              </Link>
            </ul>{" "}
            <Link href="/warranty">
              <p className={style.signature}>Гаранция</p>
            </Link>
          </div>
        </section>
        <section className={style.socialsContainer}>
          <div className={style.socials}>
            <section className="">
              <p className="py-2 md:py-2">Follow Us</p>
              <div className="flex">
                <Link href="https://www.facebook.com/profile.php?id=100089965776263" target="_blank">
                  <AiFillFacebook className={style.externalLink} />
                </Link>
                {/* <Link href="">
                  <AiFillTwitterCircle className={style.externalLink} />
                </Link> */}
                <Link href="https://www.instagram.com/mymodelride/?igshid=YmMyMTA2M2Y" target="_blank">
                  <AiOutlineInstagram className={style.externalLink} />
                </Link>
                {/* <Link href="">
                  <AiFillYoutube className={style.externalLink} />
                </Link> */}
              </div>
            </section>
            {/* only be displayed on the mobile versions */}
            <section className={style.mobile}>
              <Link href="/privacy-policy">
                <p className={style.mobileSignature}>Privacy Policy</p>
              </Link>
              <Link href="/terms-and-conditions">
                <p className={style.mobileSignature}>Terms and Conditions</p>{" "}
              </Link>
              <Link href="/warranty">
                <p className={style.mobileSignature}>Гаранция</p>
              </Link>
              <p className={style.mobileSignature}>Copyright © 2023 MyModelRide</p>
            </section>
          </div>
          <p className={style.signature}>Copyright © 2023 MyModelRide</p>
        </section>
      </div>
    </div>
  );
};

export default Footer;
