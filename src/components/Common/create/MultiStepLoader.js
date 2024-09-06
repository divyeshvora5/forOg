// components/MultiStepLoader.js
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoaderCore from "./LoaderCore";

const MultiStepLoader = ({ loadingStates, status }) => {

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className=" flex h-full w-full items-center"
            >
                <div className="relative h-96">
                    <LoaderCore value={status} loadingStates={loadingStates} />
                </div>
                <div />
            </motion.div>
        </AnimatePresence>
    );
};

export default MultiStepLoader;
