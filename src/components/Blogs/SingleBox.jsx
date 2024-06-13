import React from "react";
import Image from "next/image";
import moment from "moment";
import { PATH_DASHBOARD } from "@/routes/paths";
import { useRouter } from "next/router";
import {truncateText} from "@/utils/index"
function SingleBox({ blog, layoutOne }) {
  const {push} = useRouter()


  const truncatedRaw = truncateText(blog.raw, 100); // Adjust the number of lines as needed
  const formattedDate = moment(blog.pubDate).format("DD MMM YYYY");
  const routeHandler = () => {
    push(PATH_DASHBOARD.blog.details(blog._id,blog.title));
  };


  return (
    <div
    onClick={routeHandler}
      className={`dark:text-light ${
        layoutOne ? "flex flex-col gap-8" : "flex flex-col md:flex-row  gap-6"
      } group cursor-pointer`}
    >
      <img
        src={blog.image || ""}
        className={`${
          layoutOne ? "md:max-h-[290px] " : "md:w-[50%]"
        } max-w-[704px] rounded-2xl object-cover transition-all ease duration-300  object-center  group-hover:scale-105`}
      />
      <div>
        <div className=" blog_title "> {blog.title} </div>
        <div className="blog_dec"> {truncatedRaw}</div>
        <div className="blog_date">
          {" "}
          {blog.creator} • {formattedDate}
        </div>
      </div>
    </div>
  );
}

export default SingleBox;
