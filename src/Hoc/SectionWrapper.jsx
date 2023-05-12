import React, { useEffect } from "react";
import { styles } from "../styles";
import { fadeIn, slideIn, staggerContainer } from "../utils/motion";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
      if (inView) {
        controls.start("show");
      } else {
        controls.start("hidden");
      }
    }, [controls, inView]);

    return (
      <motion.section
        variants={slideIn()}
        ref={ref}
        initial="hidden"
        animate={controls}
        //whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
export default SectionWrapper;
