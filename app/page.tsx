import ParticlesContainer from "../app/components/ParticlesContainer";
import ProjectsBtn from "../app/components/ProjectsBtn";
import Avatar from "../app/components/Avatar";
import AnimatedProjectsBtn from "./components/AnimatedProjectsBtn";

export default function Home() {
  return (
    <div className="bg-primary/60 h-full">
      <div className="w-full h-full bg-linear-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <h1 className="h1">
            Welcome to My <br />{" "}
            <span className="text-accent">Digital Space </span>
          </h1>
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16">
            I’m a{" "}
            <span className="text-accent font-semibold">
              Front-End Developer
            </span>{" "}
            passionate about turning innovative concepts into functional digital
            products. Explore my work and discover how thoughtful design and
            solid engineering come together.
          </p>
          {/*btn*/}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <AnimatedProjectsBtn />
        </div>
      </div>
      {/*images*/}
      <div className="w-full h-full absolute right-0 bottom-0">
        {/*         <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
         */}{" "}
        {/*Particles*/}
        <ParticlesContainer />
        <div className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:right-[8%]">
          <Avatar />
        </div>
      </div>
    </div>
  );
}
