"use client";

import { motion } from "framer-motion";
import { styles } from "./styles";
import { textVariant } from "@/utils/motion";
import SectionWrapper from "./Hoc/SectionWrapper";

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] flex justify-between items-center">
      <div className={`${styles.padding} bg-tertiary rounded-2xl`}>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>My Resume</h2>
        </motion.div>
      </div>
      <a
        className="bg-tertiary outline-none h-fit p-3 text-white font-bold shadow-md shadow-primary rounded-xl cursor-pointer xs:leading-5 ms-5"
        href="https://drive.google.com/file/d/1S__TNbcQXnW18oCZvaDXzgGJfes2tUPV/view"
        target="_blank"
        rel="noreferrer"
      >
        Download
      </a>
      <div className={`${styles.paddingX} -mt-20 pb-14`}></div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "resume");
