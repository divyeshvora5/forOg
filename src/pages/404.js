"use Client";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button } from "@/styles/pages/main.style";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import React, { useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import CommonGraphics from "@/components/Common/commonGraphics/CommonGraphics";
const Animation = dynamic(
    () => import("@/components/Common/Error404/Animation"),
    { ssr: false }
);

const Error404 = () => {
    const { back } = useRouter();
    return (
      <CommonPageBlockPad className='dark-mode-body'>
        <CommonGraphics />
        <Container>
          <div className='help-center-block page-not-found'>
            <div className='help-center-block-title'>
              <h2>Page not Found</h2>
              <button className='btn border-0' onClick={() => back()}>
                Go Back
              </button>
            </div>
            <div className='page-not-found'>
              {/* <img
                            src="../../images/page-not-found-img.png"
                            alt="not-found-img"
                        ></img> */}
              <Animation />
            </div>
          </div>
        </Container>
      </CommonPageBlockPad>
    );
};

export default Error404;
