import React from "react";
import Image from "next/image";
import moment from "moment";
import { PATH_DASHBOARD } from "@/routes/paths";
import { useRouter } from "next/router";
import {truncateText} from "@/utils/index"
function SingleBoxTow({ blog }) {
  const { push } = useRouter();
  
  const routeHandler = () => {
    push(PATH_DASHBOARD.blog.details(blog._id,blog.title));
  };

  const truncatedRaw = truncateText(blog.raw, 30); // Adjust the number of lines as needed
  const formattedDate = moment(blog.pubDate).format("DD MMM YYYY");

  return (
    <div
    onClick={routeHandler}
      className={`dark:text-light flex flex-row gap-3 items-center  group cursor-pointer`}
    >
      <img
        src={blog.image || ""}
        className={`w-[40.91px] h-[40.91px]  rounded-[10px] object-cover transition-all ease duration-300  object-center  group-hover:scale-105`}
      />
      <div className="">
        <div className=" blog_title text-base ">
          {blog.title}{" "}
        </div>
        <div className="blog_dec opacity-60 text-zinc-900 text-sm">
          {truncatedRaw}
        </div>
        <div className="blog_date pt-1">
          {blog.creator} • {formattedDate}
        </div>
      </div>
    </div>
  );
}

export default SingleBoxTow;
