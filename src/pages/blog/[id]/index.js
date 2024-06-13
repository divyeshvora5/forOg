/** @format */

import Link from "next/link";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import { Button } from "@/styles/pages/main.style";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import { FormGroup, Label, Input } from "@/styles/pages/main.style";
import React, { useEffect, useState } from "react";
import BlogRenderer from "@/components/Blogs/BlogRenderer";
import moment from "moment";
import { useRouter } from "next/router";
import {
  addCommentService,
  getBlogDetailsServices,
} from "@/redux/services/globalServices";
import { useBlog, useComments } from "@/hooks/useFetchHooks";
import { PATH_DASHBOARD } from "@/routes/paths";
import PageTitle from "@/components/Common/PageTitle";
import { useDispatch, useSelector } from "react-redux";
import { globalState } from "@/redux/reducer/globalSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getBlogTagsActions } from "@/redux/actions/globalAction";
import { Toast } from "@/utils";
import SingleBoxTow from "@/components/Blogs/SingleBoxTow";
import { twMerge } from "tailwind-merge";
import  {TracingBeam}  from "@/components/ui/tracing-beam";

import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const blogDetailPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    userDetails,
    walletDetalis: { account, chainId, status },
    blogTags,
  } = useSelector(globalState);

  //Recent Blogs

  const { loading, items } = useBlog({
    limit: 5,
  });

  // Blog Details

  const [detailLoading, setDetailLoading] = useState();
  const [commentLoading, setCommentLoading] = useState();
  const [item, setItem] = useState();
  const formattedDate = moment(item?.pubDate).format("DD MMM YYYY");
  const fetchDetails = async (blogId) => {
    try {
      setDetailLoading(true);
      const { data } = await getBlogDetailsServices({
        id: blogId,
      });
      setItem(data?.data);
    } catch (err) {
      console.log("err", err);
    } finally {
      setDetailLoading(false);
    }
  };
 

  useEffect(() => {
    console.log(router.query,"router.query");
    if (!router.query.id) return;
    const id = router.query.id.split('-').pop();

    fetchDetails(id);
    // dispatch(getBlogTagsActions());
  }, [router.isReady, router.query, account]);

  const routeHandler = (item) => {
    router.push(PATH_DASHBOARD.blog.details(item));
  };

  const handleTagSelection = (tag) => {
    router.push(`${PATH_DASHBOARD.blog.root}?tag=${tag}`);
  };

  //Comment create
  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: Yup.object().shape({
      comment: Yup.string().required("Comment is required"),
    }),
    onSubmit: async (values, helpers) => {
      if (!userDetails?._id || !item?._id || !account)
        return Toast.error("Please connect your wallet");
      try {
        setCommentLoading(true);
        const payload = {
          ...values,
          blogId: item?._id,
          userId: userDetails?._id,
          parentId: null,
        };
        const { data } = await addCommentService(payload);
        setCommentLoading(false);
        if (data.success) {
          helpers.resetForm();
          Toast.success("Comment added successfully");
        }
      } catch (err) {
        console.log("err", err);
      }
    },
  });

  // Get Comments

  // const { commentsLoading, comments, commentsHasMore, handlePageChange } =
  //   useComments();

  return (
    <>
      <PageTitle title={`Blog-Detail`} />
      {!detailLoading ? (
        !item ? (
          <>
            <div className="d-flex justify-content-center align-items-center items-center vh-100">
              {/* <h4>No Blog Details Found</h4> */}
            </div>
          </>
        ) : (
          <div className="max-w-7xl mx-auto">
            <div className="flex md:flex-row gap-16 py-20">
              {/* main blog card */}

              <div
                className={`flex flex-col   gap-6 group cursor-pointer w-full lg:w-[70%] `}
              >
                {/* <img
                    src={item.image || ""}
                    className={`max-w-[704px] rounded-2xl object-cover transition-all ease duration-300  object-center  group-hover:scale-105`}
                  /> */}
                <TracingBeam className="pl-[60px] pr-3">
                  <div className="blog_date py-2">
                    {item?.creator} • {formattedDate}
                  </div>
                  <div className=" blog_title text-4xl leading-normal ">
                    {" "}
                    {item?.title}{" "}
                  </div>

                  <div
                    className="main_blog_info"
                    dangerouslySetInnerHTML={{ __html: item?.html }}
                  ></div>
                </TracingBeam>
              </div>

              {/* main blog card */}

              {/* recent post */}

              <div className="hidden lg:block lg:w-[30%]">
                <h2 className="w-full inline-block !text-zinc-900 text-3xl  font-bold capitalize  md:text-3xl   dark:!text-white">
                  Recent blog posts
                </h2>
                <div className="grid grid-cols-1  gap-6  mt-8 sm:mt-8">
                  {items.slice(0, 5).map((item, index) => (
                    <article key={index} className="">
                      <SingleBoxTow blog={item} />
                    </article>
                  ))}
                </div>
              </div>

              {/* recent post */}
            </div>

            <div className="flex flex-col gap-4 md:flex-row justify-between pb-20">
              {/* share */}
              <div className="flex flex-row items-center gap-4">
                <div className="text-zinc-900 dark:text-white text-base font-bold font-DMSans leading-normal">
                  Share:{" "}
                </div>
                <div className="flex flex-row items-center gap-3">
                  <FacebookShareButton url={item.link} className="">
                    <FacebookIcon
                      size={20}
                      round={true}
                      className="!text-zinc-600 fill-zinc-600 "
                    />
                  </FacebookShareButton>

                  <TwitterShareButton url={item.link} className="">
                    <TwitterIcon
                      size={20}
                      round={true}
                      className="!text-zinc-600 fill-zinc-600 "
                    />
                  </TwitterShareButton>
                </div>
              </div>
              {/* share */}

              {/* tag */}

              {item.categories && item.categories.length > 0 ? (
                <div className="flex flex-row items-start md:items-center  gap-4">
                  <div className="text-zinc-900 dark:text-white text-base font-bold font-DMSans leading-normal">
                    Tags:{" "}
                  </div>
                  <div className="flex flex-wrap items-start md:items-center gap-4">
                    {item.categories.map((e, indx) => (
                      <div
                        key={indx}
                        className="text-center dark:text-slate-500 text-zinc-600"
                      >
                        {e}
                        {indx < item.categories.length - 1 ? "," : ""}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            {/* tag */}
          </div>
        )
      ) : (
        <>
          <div className="d-flex justify-content-center align-items-center items-center vh-100">
            <Spinner size="md" />
          </div>
        </>
      )}
    </>
  );
};

export default blogDetailPage;
