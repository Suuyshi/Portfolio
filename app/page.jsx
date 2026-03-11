"use client";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  StarsCanvas,
} from "@/components";
import WorksUC from "@/components/WorksUC";

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <div className="relative z-0">
        <About />
        <Experience />
        <Tech />
        <WorksUC />
        <Feedbacks />
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
}
