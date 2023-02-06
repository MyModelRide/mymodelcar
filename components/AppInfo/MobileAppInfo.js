import React from "react";
import { AiFillApple, AiFillAndroid } from "react-icons/ai";
import { GiCycle } from "react-icons/gi";
import { BsBoxSeam } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
const style = {
  wrapper: "flex sm:hidden  justify-between flex-col",
  centerDiagram: "w-[19%] flex flex-col items-center",
  heading: "text-[#0647D4] text-xl ml-3 tracking-widest py-6",
  btn: "text-sm font1 bg-[#0647D4] px-8 md:px-12 py-2 md:py-3 text-white rounded-full my-6 mx-3",
  content: "w-[75%]",
  icon: "text-5xl md:text-6xl  text-[#0647D4] font-bold my-3",
  leftPara1: "text-sm text-gray-600 font1 tracking-normal pt-4",
  leftPara2: "text-sm text-gray-600 font1 tracking-normal mt-12 mb-3",
  rightPara: "text-sm text-gray-600 font1 tracking-normal mt-8",
};
const MobileAppInfo = () => {
  return (
    <div className={style.wrapper}>
      <section className="flex flex-col items-center w-[19%]">
        {/* <p className="h-[4vh] border-[1px] border-[#0647D4]"></p> */}
      </section>
      {/* <p className={style.heading}>MyModelRide</p>{" "} */}
      <div className="flex">
        {/* adding the icons of the introduction */}
        {/* <section className={style.centerDiagram}>
          <BsBoxSeam className={style.icon} />
          <p className="h-[10vh] border-[1px] border-[#0647D4]"></p>
          <AiFillApple className={style.icon} />
          <AiFillAndroid className={style.icon} />
          <p className="h-[6vh] border-[1px] border-[#0647D4]"></p>
          <GiCycle className={style.icon} />
          <p className="h-[14vh] border-[1px] border-[#0647D4]"></p>
        </section> */}
        {/* adding the content of the introduction */}
        <section className={style.content}>
          {/* <p className={style.leftPara1}>
            RaceBox is the most modern and precise way to measure the
            performance stats of your vehicle. Measuring 0-100km/h acceleration,
            1/4 mile times or laps around your favorite race circuit has never
            been easier.
          </p>
          <p className={style.leftPara2}>
            The application is available for download on both Android and iOS
            devices
          </p>{" "}
          <section className="flex flex-col">
            <Link href="">
              <Image src="/4.svg" height={150} width={150} alt="iPhone image" />
            </Link>
            <p className="my-1"></p>
            <Link href="/">
              <Image src="/3.png" height={150} width={150} alt="iPhone image" />
            </Link>
          </section>
          <p className={style.rightPara}>
            A key goal in developing and designing our products was the ease of
            use. We wanted to have all the features that you would need while
            keeping it as simple as possible. That was not an easy task,
            considering it includes both a "Lap Timer" (for track use) and "Drag
            Meter" (for drag use) functionality at an unmatched price point.
          </p> */}
        </section>
      </div>
      <Link href="/blog">
        <button className={style.btn}>КЪМ БЛОГА</button>{" "}
      </Link>
      <section className="flex flex-col w-[19%] items-center">
        {/* <p className="h-[3vh] border-[1px] border-[#0647D4]"></p> */}
      </section>
    </div>
  );
};

export default MobileAppInfo;
