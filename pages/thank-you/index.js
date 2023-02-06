import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { AiOutlineRollback } from "react-icons/ai";
import Link from "next/link";
import Footer from "../../components/Footer/Footer";
const style = {
  wrapper: "min-h-[100vh] flex flex-col items-between justify-between",
};
const index = () => {
  const handleScroll = () => {};
  return (
    <div className={style.wrapper}>
      <Navbar onScroll={handleScroll} />
      <div className="flex flex-col items-between justify-between border-4 border-black min-h-[100vh]">
        <h2 className="pt-24 text-center text-[#0647D4] text-4xl md:text-5xl my-24">
          ПОРЪЧАХТЕ УСПЕШНО
        </h2>
        <Link href='/'>
          <section className="flex items-center justify-center bg-[#0647D4] text-white max-w-fit p-3 rounded-full mx-auto">
            <AiOutlineRollback className="mx-4 text-2xl" />
            <button>КЪМ НАЧАЛО</button>
          </section>
        </Link>
        <Footer onScroll={handleScroll} />
      </div>
    </div>
  );
};
export default index;
