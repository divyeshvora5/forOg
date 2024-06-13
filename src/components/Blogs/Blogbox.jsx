import React from "react";
import Image from "next/image";
import moment from "moment";
import { PATH_DASHBOARD } from "@/routes/paths";
import { useRouter } from "next/router";
import { truncateText } from "@/utils/index";
function Blogbox({ blog }) {
  const { push } = useRouter();
  const routeHandler = () => {
    push(PATH_DASHBOARD.blog.details(blog._id,blog.title));
  };

  const truncatedRaw = truncateText(blog.raw, 80); // Adjust the number of lines as needed
  const formattedDate = moment(blog.pubDate).format("DD MMM YYYY");

  return (
    <div
      onClick={routeHandler}
      className={`dark:text-light flex flex-col  group cursor-pointer`}
    >
      <img
        src={blog.image || ""}
        className={`md:max-w-[322.50px] max-h-[200px] rounded-2xl object-cover transition-all ease duration-300  object-center  group-hover:scale-105`}
      />
      <div className="mt-8">
        <div className=" blog_title ">{blog.title} </div>
        <div className="blog_dec">{truncatedRaw}</div>
        <div className="blog_date">
          {blog.creator} • {formattedDate}
        </div>
      </div>
    </div>
  );
}

export default Blogbox;
