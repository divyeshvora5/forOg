/** @format */

import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button } from "@/styles/pages/main.style";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import { FormGroup, Label, Input } from "@/styles/pages/main.style";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { globalState } from "@/redux/reducer/globalSlice";
import PageTitle from "@/components/Common/PageTitle";
import { createContactus } from "@/redux/actions/globalAction";
import CommonGraphics from "@/components/Common/commonGraphics/CommonGraphics";
import { Toast } from "@/utils";

const contactPage = () => {
    const { userDetails, loading } = useSelector(globalState);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {},
        validationSchema: Yup.object().shape({
            name: Yup.string().required("Name is required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            subject: Yup.string().required("Subject is required"),
            message: Yup.string().required("Message is required"),
        }),
        onSubmit: async (values, helpers) => {
            let contactusdata = await dispatch(createContactus(values));
            if (contactusdata.payload.success === true) {
                Toast.success("Message send successfully !");
                helpers.resetForm();
                const clearedValues = Object.fromEntries(
                    Object.keys(values).map((key) => {
                        if (key !== "name") {
                            return [key, ""];
                        } else {
                            return [key, values[key]];
                        }
                    })
                );
                helpers.setValues(clearedValues);
            }
        },
    });

    useEffect(() => {
        if (!userDetails) return;
        formik?.setValues((prevValues) => ({
            ...prevValues,
            name: formik.values.name || userDetails?.name,
            email: formik.values.email || userDetails?.email,
        }));
    }, [userDetails]);

    return (
        <>
            <PageTitle title={"Contact-us"} />
            <CommonPageBlockPad className="dark-mode-body">
                <CommonGraphics />
                <Container>
                    <div className="contact-block-main">
                        <div className="contact-block-main-left">
                            <div className="last-contact-block">
                                <img
                                    src={"../../images/contact-us.png"}
                                    alt="contact-banner"
                                ></img>
                            </div>
                        </div>
                        <div className="contact-block-main-right">
                            <div className="contact-title">
                                <h2>Contact Us</h2>
                                {/* <p>
                                    You can reach us anytime via{" "}
                                    <a href="#">Info@TesseractX.com</a>
                                </p> */}
                            </div>
                            <Form onSubmit={formik.handleSubmit}>
                                <div className="TXtype-details-wrapper">
                                    <FormGroup>
                                        <Label>Name</Label>
                                        <Input
                                            type="text"
                                            id="name"
                                            name="name"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.name}
                                            placeholder="Your Full Name"
                                        />
                                        {(formik.touched.name ||
                                            formik.submitCount) &&
                                        formik.errors.name ? (
                                            <div className="text-danger">
                                                {formik.errors.name}
                                            </div>
                                        ) : null}
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Email Address</Label>
                                        <Input
                                            type="email"
                                            id="email"
                                            name="email"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}
                                            placeholder="Email Address"
                                        />
                                        {(formik.touched.email ||
                                            formik.submitCount) &&
                                        formik.errors.email ? (
                                            <div className="text-danger">
                                                {formik.errors.email}
                                            </div>
                                        ) : null}
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Subject</Label>
                                        <Input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.subject}
                                            placeholder="Subject"
                                        />
                                        {(formik.touched.subject ||
                                            formik.submitCount) &&
                                        formik.errors.subject ? (
                                            <div className="text-danger">
                                                {formik.errors.subject}
                                            </div>
                                        ) : null}
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Message</Label>
                                        <Input
                                            as="textarea"
                                            id="message"
                                            name="message"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.message}
                                            placeholder="Message"
                                            rows={4}
                                        />
                                        {(formik.touched.message ||
                                            formik.submitCount) &&
                                        formik.errors.message ? (
                                            <div className="text-danger">
                                                {formik.errors.message}
                                            </div>
                                        ) : null}
                                    </FormGroup>
                                    <div className="button-contact">
                                        <Button type="submit">
                                            {loading
                                                ? "Loding..."
                                                : "Send message"}
                                        </Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Container>
            </CommonPageBlockPad>{" "}
        </>
    );
};

export default contactPage;
