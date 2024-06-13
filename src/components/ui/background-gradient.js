import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  borderCorner,
  containerClassName,
  animate = showBgAnimation ? showBgAnimation : true,
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 z-[1] opacity-60 group-hover:opacity-100 blur-xl  transition duration-500 will-change-transform",
          `${
            animate
              ? "bg-[radial-gradient(circle_farthest-side_at_0_100%,#b8b0f4,transparent),radial-gradient(circle_farthest-side_at_100%_0,#2bd7ef,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#fb4ef1,transparent),radial-gradient(circle_farthest-side_at_0_0,#fb4ef1,#2bd7ef)]"
              : ""
          }`,
          `${
            borderCorner
              ? borderCorner
              : "rounded-3xl"
          }`
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] will-change-transform",
          `${
            animate
              ? "bg-[radial-gradient(circle_farthest-side_at_0_100%,#fb4ef1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#2bd7ef,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#fb4ef1,transparent),radial-gradient(circle_farthest-side_at_0_0,#fb4ef1,#2bd7ef)]"
              : ""
          }`,
          `${
            borderCorner
              ? borderCorner
              : "rounded-3xl"
          }`
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
