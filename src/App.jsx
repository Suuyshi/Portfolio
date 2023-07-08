import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import WorksUC from "./components/WorksUC";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0">
          <About />
          <Experience />
          <Tech />
          {/* <Works /> */}
          <WorksUC />
          <Feedbacks />
          <Contact />
          <StarsCanvas />
        </div>
        {/* <About /> */}

        <div className="relative z-0"></div>
      </div>
    </BrowserRouter>
  );
};

export default App;
