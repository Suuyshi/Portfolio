"use client";

import { motion } from "framer-motion";
import { styles } from "./styles";
import { textVariant } from "@/utils/motion";
import SectionWrapper from "./Hoc/SectionWrapper";

const WorksUC = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] flex justify-between items-center">
      <div className={`${styles.padding} bg-tertiary rounded-2xl`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My Projects</p>
          <h2 className={styles.sectionHeadText}>ShowCase.</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX}`}>
        <p className={styles.sectionSubText}>Will be Added Soon.</p>
      </div>
    </div>
  );
};

export default SectionWrapper(WorksUC, "");
