import React from "react";
import Link from "next/link";

import { RiLinkedinLine, RiGithubLine, RiGlobalFill } from "react-icons/ri";

function Socials() {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.linkedin.com/in/sarah-benk/"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://github.com/sarah2021ben"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://portfolio-sarah-ben.vercel.app/"}
        className="hover:text-accent transition-all duration-300"
        target="_blank"
      >
        <RiGlobalFill />
      </Link>
    </div>
  );
}

export default Socials;
