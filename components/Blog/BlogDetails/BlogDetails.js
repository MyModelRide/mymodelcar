import React from "react";
import { urlForThumbnail } from "../../../pages/api/image";
import Image from "next/image";
import { useRouter } from "next/router";
const style = {
  wrapper: "py-24 md:py-36 w-[95%] md:w-[70%] lg:w-[60%] mx-auto font",
  name: "text-3xl md:text-4xl my-4 md:my-4 text-slate-800 font-semibold",
  date: "text-stone-700 font-normal font1 my-4 md:my-4 ",
  singleContent: "w-[95%] md:w-[95%]",
  contentHeading: "font-semibold text-2xl md:text-2xl my-2 md:my-5",
  contentPara: "",
};
const BlogDetails = ({ blogData }) => {
  const { locale } = useRouter();
  return (
    <div className={style.wrapper}>
      <h2 className={style.name}>{locale == "en" ? blogData[0].headingen : blogData[0].headingbg}</h2>
      <p className={style.date}>{blogData[0].date}</p>
      <section className="flex items-center justify-center">
        <img
          src={urlForThumbnail(blogData[0].image)}
          width={1000}
          height={500}
          alt="main image of the blog"
        />
      </section>
      {blogData[0].content.map((singleContent) => (
        <div className={style.singleContent}>
          <h2 className={style.contentHeading}>
            {locale == "en" ? singleContent.headingen : singleContent.headingbg}
          </h2>
          <p className={style.contentPara}>
            {locale == "en" ? singleContent.headingen : singleContent.headingbg}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
