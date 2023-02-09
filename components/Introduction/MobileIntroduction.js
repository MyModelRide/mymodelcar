import React from "react";
import { BsStopwatch } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { AiOutlineStar } from "react-icons/ai";
import { BiCube } from "react-icons/bi";
import { useRouter } from "next/router";
const style = {
  wrapper: "flex sm:hidden  justify-between flex-col",
  centerDiagram: "w-[19%] flex flex-col items-center",
  heading: "text-[#0647D4] text-xl ml-3 tracking-widest",
  endHeading: "text-sm text-gray-600  font1 my-4 px-5",
  content: "w-[75%]",
  icon: "text-5xl md:text-6xl  text-[#0647D4] font-bold my-3",
  leftPara1:
    "text-sm text-gray-600 font1 tracking-normal pt-16 mt-8 sm:mt-36 md:mt-42 lg:mt-48",
  leftPara2:
    "text-sm text-gray-600 font1 tracking-normal mt-16 sm:mt-36 md:mt-42 lg:mt-48",
  rightPara1:
    "text-sm text-gray-600 font1 tracking-normal mt-24 sm:mt-36 md:mt-30 lg:mt-36",
  rightPara2:
    "text-sm text-gray-600 font1 tracking-normal mt-28 sm:mt-48 md:mt-42 lg:mt-56 ",
};
const MobileIntroduction = () => {
  const { locale } = useRouter();
  return (
    <div className={style.wrapper}>
      <section className="flex flex-col items-center w-[19%]">
        <p className="h-[4vh] border-[1px] border-[#0647D4]"></p>
      </section>
      <p className={style.heading}>
        {" "}
        {locale == "en" ? "HOW CAN I ORDER" : "КАК ДА ПОРЪЧАМ "}
      </p>{" "}
      <div className="flex">
        {/* adding the icons of the introduction */}
        <section className={style.centerDiagram}>
          <p className="h-[5vh] border-[1px] border-[#0647D4]"></p>
          <BsStopwatch className={style.icon} />
          <p className="h-[8vh] border-[1px] border-[#0647D4]"></p>
          <GoLocation className={style.icon} />
          <p className="h-[8vh] border-[1px] border-[#0647D4]"></p>
          <AiOutlineStar className={style.icon} />
          <p className="h-[8vh] border-[1px] border-[#0647D4]"></p>
          <BiCube className={style.icon} />
          <p className="h-[5vh] border-[1px] border-[#0647D4]"></p>
        </section>
        {/* adding the content of the introduction */}
        <section className={style.content}>
          {/* <p className={style.leftPara1}>
            
          </p> */}
          <p className={style.leftPara2}>
            {locale == "en"
              ? " COMPLETE THE FORM /it doesn't take more than 7 minutes"
              : "  ПОПЪЛНИ ФОРМАТА /не отнема повече от 7 минути"}
          </p>{" "}
          <p className={style.rightPara1}>
            {locale == "en"
              ? "UPLOAD PHOTOS OF YOUR CUSTOM MODEL"
              : " КАЧИ СНИМКИ НА СВОЯ ПЕРСОНАЛИЗИРАНИЯ МОДЕЛ"}
          </p>
          <p className={style.rightPara2}>
            {locale == "en"
              ? "FULL DETAILS FOR YOUR CUSTOM MODEL"
              : " ПОПЪЛНИ ДЕТАЙЛИ ЗА СВОЯ ПЕРСОНАЛИЗИРАН МОДЕЛ"}{" "}
          </p>
          <p className={style.leftPara1}>
            {" "}
            {locale == "en" ? "COMPLETE ORDER" : "  ЗАВЪРШИ ПОРЪЧКАТА"}
          </p>
        </section>
      </div>
      <p className={style.endHeading}>
        {locale == "en"
          ? "PRODUCTION TAKES UP TO 1 CALENDAR MONTH FROM COMPLETION OF THE ORDER"
          : "изработката отнема до 1 календарен месец от завършване на поръчката"}
      </p>
      <section className="flex flex-col w-[19%] items-center">
        <p className="h-[5vh] border-[1px] border-[#0647D4]"></p>
      </section>
    </div>
  );
};

export default MobileIntroduction;
