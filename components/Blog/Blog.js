import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import BlogGrid from "./BlogGrid/BlogGrid";
import { NextFetchEvent } from "next/server";
const style = {
  wrapper: "",
};

const handle = () => {};
const Blog = ({ blogData }) => {
  return (
    <div className={style.wrapper}>
      <Navbar onScroll={handle} />
      <BlogGrid blogData={blogData} />
      <Footer onScroll={handle} />
    </div>
  );
};

export default Blog;
