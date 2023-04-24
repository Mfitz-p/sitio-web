import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const variants = {
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1.2 } },
    hidden: { opacity: 0, scale: 0 }
};

export default function OnScrollItems({ children }) {
  const controls = useAnimation();

  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      className="square"
    >{children}</motion.div>
  );
}