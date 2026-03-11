"use client";

import { BallCanvas } from "./canvas";
import SectionWrapper from "./Hoc/SectionWrapper";
import { technologies } from "@/constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 justify-center">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
