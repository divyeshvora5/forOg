// import BlogRenderer from "@/components/Blogs/BlogRenderer";
import PageTitle from "@/components/Common/PageTitle";
import { useBlog } from "@/hooks/useFetchHooks";
import { PATH_DASHBOARD } from "@/routes/paths";
import { Button } from "@/styles/pages/main.style";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import moment from "moment";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import { Container, Spinner } from "react-bootstrap";
import SingleBox from "@/components/Blogs/SingleBox";
import Blogbox from "@/components/Blogs/Blogbox";
const BlogRenderer = dynamic(import("@/components/Blogs/BlogRenderer"), {
  ssr: false,
});

const BlogDetails = () => {
  const { loading, items, page, hasMore, handlePageChange } = useBlog({
    limit: 9,
  });
  const { push } = useRouter();

  const routeHandler = (item) => {
    push(PATH_DASHBOARD.blog.details(item));
  };

  return (
    <>
      {/* <BlogRenderer blocks={data} /> */}
      <PageTitle title={"Blogs"} />
      <CommonPageBlockPad className="dark-mode-body">
        <Container>
          <div className="blog-main">
            <div className="common-title-page text-center-space"></div>

            {loading && page == 1 ? (
              <>
                <div className="d-flex justify-content-center vh-100 align-items-center">
                  <Spinner animation="border" size="lg" />
                </div>
              </>
            ) : !items?.length > 0 ? (
              <>
                <div className="d-flex justify-content-center">
                  {/* No Blogs Found! */}
                </div>
              </>
            ) : (
              <div className="w-full mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
                <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-3xl   dark:text-white">
                  Recent blog posts
                </h2>

                {/* Recent blog posts */}
                <div className="grid grid-cols-2 grid-rows-2 gap-y-12 md:gap-x-8  mt-8 sm:mt-8">
                  <article className=" col-span-2  sxl:col-span-1 row-span-2 relative">
                    <SingleBox blog={items[0]} layoutOne={true} />
                  </article>
                  <article className=" col-span-2 xl:col-span-1 row-span-1 relative">
                    <SingleBox blog={items[2]} layoutOne={false} />
                  </article>
                  <article className="col-span-2 xl:mt-[-20px] xl:col-span-1 row-span-1 relative">
                    <SingleBox blog={items[3]} layoutOne={false} />
                  </article>
                </div>
                {/* Recent blog posts */}

                <h2 className="w-full  inline-block font-bold capitalize text-2xl md:text-3xl  dark:text-white mt-[100px]">
                  blog posts
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-4  gap-12 md:gap-12  mt-8 sm:mt-8 mb-[100px]">
                  {items.slice(1).map((item, index) => (
                    <article key={index} className="">
                      <Blogbox blog={item} layoutOne={true} />
                    </article>
                  ))}
                </div>
              </div>
            )}

            {loading && page > 1 && (
              <div className="d-flex justify-content-center mt-3">
                <Spinner size="lg" />
              </div>
            )}
            {!loading && hasMore && (
              <div className="d-flex justify-content-center">
                <Button
                  isBorderBtn={true}
                  onClick={handlePageChange}
                  style={{ width: "190px" }}
                >
                  Load more
                </Button>
              </div>
            )}
          </div>
        </Container>
      </CommonPageBlockPad>
    </>
  );
};

export default BlogDetails;
