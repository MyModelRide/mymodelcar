import React from "react";
import { BsStopwatch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import { BiCube } from "react-icons/bi";
import { useRouter } from "next/router";

import MobileIntroduction from "./MobileIntroduction";
const style = {
  wrapper: "font flex flex-col items-center justify-center ",
  desktopContainer:
    "font flex flex-col items-center justify-center hidden sm:flex",
  heading: "text-[#0647D4] text-2xl md:text-2xl tracking-widest",
  endHeading: "text-sm text-gray-600  font1 my-3",
  content1: "w-[43%]",
  content2: "w-[43%]",
  centerDiagram: "w-[14%] flex flex-col items-center",
  leftPara1: "text-sm text-gray-600 font1 tracking-normal",
  leftPara2:
    "text-sm text-gray-600 font1 tracking-normal mt-0 sm:mt-36 md:mt-42 lg:mt-48",
  rightPara1:
    "text-sm text-gray-600 font1 tracking-normal mt-0 sm:mt-36 md:mt-30 lg:mt-36",
  rightPara2:
    "text-sm text-gray-600 font1 tracking-normal mt-0 sm:mt-48 md:mt-42 lg:mt-56 ",
  icon: "text-5xl md:text-6xl  text-[#0647D4] font-bold my-3",
};
const Introduction = () => {
  const { locale } = useRouter();
  return (
    <div className={style.wrapper}>
      <div className={style.desktopContainer}>
        <p className="h-[8vh] border-[1px] border-[#0647D4]"></p>
        <p className={style.heading}>
          {" "}
          {locale == "en" ? "HOW CAN I ORDER" : "КАК ДА ПОРЪЧАМ "}
        </p>{" "}
        <p className="h-[3vh] border-[1px] border-[#0647D4]"></p>
        {/* adding the content of the website */}
        <div className="w-[90%] sm:w-[90%] md:w-[80%] lg:w-[60%] flex">
          <section className={style.content1}>
            <p className={style.leftPara1}>
              {" "}
              {locale == "en"
                ? " COMPLETE THE FORM it doesn't take more than 7 minutes"
                : "  ПОПЪЛНИ ФОРМАТА /не отнема повече от 7 минути"}
            </p>
            <p className={style.leftPara2}>
              {" "}
              {locale == "en"
                ? "UPLOAD PHOTOS OF YOUR CUSTOM MODEL"
                : " КАЧИ СНИМКИ НА СВОЯ ПЕРСОНАЛИЗИРАНИЯ МОДЕЛ"}
            </p>
          </section>
          <section className={style.centerDiagram}>
            <BsStopwatch className={style.icon} />
            <p className="h-[8vh] border-[1px] border-[#0647D4]"></p>
            <GoLocation className={style.icon} />
            <p className="h-[8vh] border-[1px] border-[#0647D4]"></p>
            <AiOutlineStar className={style.icon} />
            <p className="h-[8vh] border-[1px] border-[#0647D4]"></p>
            <BiCube className={style.icon} />
            <p className="h-[8vh] border-[1px] border-[#0647D4]"></p>
          </section>
          <section className={style.content2}>
            {" "}
            <p className={style.rightPara1}>
              {" "}
              {locale == "en"
                ? "FULL DETAILS FOR YOUR CUSTOM MODEL"
                : " ПОПЪЛНИ ДЕТАЙЛИ ЗА СВОЯ ПЕРСОНАЛИЗИРАН МОДЕЛ"}
            </p>
            <p className={style.rightPara2}>
              {" "}
              {locale == "en" ? "COMPLETE ORDER" : "  ЗАВЪРШИ ПОРЪЧКАТА"}
            </p>
          </section>
        </div>
        <p className={style.endHeading}>
          {" "}
          {locale == "en"
            ? "GET THE ADDRESS SPECIFIED BY YOU"
            : "  ПОЛУЧИ НА ПОСОЧЕНИЯ ОТ ТЕБ АДРЕС"}
        </p>
        <p className={style.endHeading}>
          {" "}
          {locale == "en"
            ? "PRODUCTION TAKES UP TO 1 CALENDAR MONTH FROM COMPLETION OF THE ORDER"
            : "изработката отнема до 1 календарен месец от завършване на поръчката"}
        </p>{" "}
        <p className="h-[3vh] border-[1px] border-[#0647D4]"></p>
      </div>
      {/* adding the mobile container */}
      <MobileIntroduction />
    </div>
  );
};

export default Introduction;
