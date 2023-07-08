import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import { SectionWrapper } from "../Hoc";

const WorkCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[48px] ">&bdquo;</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">@</span>
              {name}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {designation} of {company}
            </p>
          </div>
          <img
            src={image}
            alt={`feedback-by-${name}`}
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

const WorksUC = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] flex justify-between items-center">
      <div className={`${styles.padding} bg-tertiary rounded-2xl`}>
        <motion.div variants={textVariant()}>
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>My Projects</p>
            <h2 className={styles.sectionHeadText}>ShowCase.</h2>
          </motion.div>
        </motion.div>
      </div>
      <div className={`${styles.paddingX}`}>
        <p className={styles.sectionSubText}>Will be Added Soon.</p>
      </div>
    </div>
  );
};

export default SectionWrapper(WorksUC, "");
