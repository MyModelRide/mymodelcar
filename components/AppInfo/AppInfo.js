import React from "react";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { GiCycle } from "react-icons/gi";
import { BsBoxSeam } from "react-icons/bs";
import MobileAppInfo from "./MobileAppInfo";
import Link from "next/link";
import Image from "next/image";
const style = {
  wrapper: "font flex flex-col items-center justify-center ",
  desktopContainer:
    "font flex flex-col items-center justify-center hidden sm:flex",
  heading: "text-[#0647D4] text-2xl md:text-2xl tracking-widest",
  btn: "text-sm font1 bg-[#0647D4] px-8 md:px-12 py-2 md:py-3 text-white rounded-full",
  content1: "w-[43%]",
  content2: "w-[43%] mt-8 sm:mt-12",
  centerDiagram: "w-[14%] flex flex-col items-center",
  leftPara1: "text-sm text-gray-600 font1 tracking-normal",
  leftPara2:
    "text-sm text-gray-600 font1 tracking-normal mt-0 sm:mt-42 md:mt-48 lg:mt-72",
  rightPara:
    "text-sm text-gray-600 font1 tracking-normal mt-0 sm:mt-36 md:mt-30 lg:mt-36",
  icon: "text-5xl md:text-6xl text-[#0647D4] font-bold my-3",
};
const AppInfo = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.desktopContainer}>
        <p className="h-[3vh] border-[1px] border-[#0647D4]"></p>
        {/* adding the content of the website */}
        <Link href="/blog">
          <button className={style.btn}>КЪМ БЛОГА</button>{" "}
        </Link>
        <p className="h-[3vh] border-[1px] border-[#0647D4]"></p>
      </div>
      {/* adding the mobile container */}
      <MobileAppInfo />
    </div>
  );
};

export default AppInfo;
