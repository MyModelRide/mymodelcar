import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlForThumbnail } from "../../../pages/api/image";
const style = {
  wrapper: "",
  heading: "text-5xl md:text-5xl font text-[#0647D4] pt-36 pb-24 text-center",
  grid: "flex flex-wrap w-[100%] md:w-[70%] lg:w-[60%] mx-auto items-center justify-around",
  name: "text-md md:text-xl text-center md:text-left my-2 md:my-3 font text-stone-800",
  btn: "bg-[#0647D4] px-4 md:px-12 py-2 md:py-2 text-md text-white font tracking-widest rounded-2xl mb-2 md:mb-3 w-full md:w-auto",
};
const BlogGrid = ({ blogData }) => {
  console.log(blogData);
  return (
    <div className={style.wrapper}>
      <h2 className={style.heading}>Our Blogs</h2>
      <div className={style.grid}>
        {blogData.map((singleBlog) => (
          <Link
            href={`/${singleBlog.id}`}
            passHref
            className="w-[90%] md:w-[48%] px-7 md:px-8 py-4 md:py-5 my-4 md:my-4 cursor-pointer hover:bg-neutral-50 transition duration-[300ms]"
          >
            <section className="">
              <Image
                src={urlForThumbnail(singleBlog.image)}
                height={400}
                width={500}
                alt="blog image"
              />
              <h2 className={style.name}>{singleBlog.heading}</h2>
              <button className={style.btn}>View</button>
            </section>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogGrid;
