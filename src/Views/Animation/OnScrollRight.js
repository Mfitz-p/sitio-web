import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function OnScrollRight({ children }) {
  const controls = useAnimation();

  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
      controls.start({x: 0, opacity: 1, scale: 1})
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{x: 200, opacity: 0, scale: 1}}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="square"
    >{children}</motion.div>
  );
}