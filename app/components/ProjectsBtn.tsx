import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

function ProjectsBtn() {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/projects"
        className="relative cursor-pointer z-8 w-[185px] h-[185px] flex justify-center items-center bg-circle-star bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src="/images/rounded-text.png"
          alt="projects btn"
          width={141}
          height={148}
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </Link>
    </div>
  );
}

export default ProjectsBtn;
