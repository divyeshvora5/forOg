/** @format */

import Link from "next/link";
import { Container, Row, Col, Form } from "react-bootstrap";
import { Button } from "@/styles/pages/main.style";
import { CommonPageBlockPad } from "@/styles/pages/profile-page";
import { FormGroup, Label, Input } from "@/styles/pages/main.style";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import PageTitle from "@/components/Common/PageTitle";
import { ConnectionGuard } from "@/components";
import AchievementsComponent from "@/components/rewards/AchievementsComponent";

const achievementspage = () => {
    return (
        <>
            <PageTitle title="Achievements" />
            <ConnectionGuard>
                <AchievementsComponent />
            </ConnectionGuard>
        </>
    );
};

export default achievementspage;
