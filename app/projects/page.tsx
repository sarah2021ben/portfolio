import React from "react";
import ProjectsSlider from "../components/ProjectsSlider";
import Circles from "../components/Circles";
import Bulb from "../components/Bulb";

function Projects() {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-3 md:mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* textes */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-12">
              My Projects <span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
              quaerat voluptatem inventore, corrupti sequi ipsam at harum
              laborum nisi libero deleniti quisquam atque dolore vero. Ullam
              dicta hic tenetur est.
            </p>
          </div>
          {/* sliders */}
          <div className="w-full xl:max-w-[65%]">
            <ProjectsSlider />
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
}

export default Projects;
