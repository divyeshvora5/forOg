// components/LoaderCore.js
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

const LoaderCore = ({ loadingStates, value }) => {
    return (
        <div className="relative mx-auto mt-40 flex max-w-xl flex-col justify-start">
            {loadingStates.map((loadingState, index) => {
                const distance = Math.abs(index - value);
                const opacity = Math.max(1 - distance * 0.2, 0);

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -(value * 40) }}
                        animate={{ opacity, y: -(value * 40) }}
                        transition={{ duration: 0.5 }}
                        className={cn("mb-4 flex gap-2 text-left")}
                    >
                        <div>
                            {index > value ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={cn(
                                        "h-6 w-6 text-customPink dark:text-white"
                                    )}
                                >
                                    <path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className={cn(
                                        "h-6 w-6",
                                        cn(
                                            "text-customPink dark:text-white",
                                            value === index &&
                                                "text-customPink opacity-100 dark:text-lime-500"
                                        )
                                    )}
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            )}
                        </div>
                        <span
                            className={cn(
                                "text-black dark:text-white",
                                value === index &&
                                    "text-black opacity-100 dark:text-lime-500"
                            )}
                        >
                            {loadingState.text}
                        </span>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default LoaderCore;
