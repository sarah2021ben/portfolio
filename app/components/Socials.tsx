import React from "react";
import Link from "next/link";

import { RiLinkedinLine, RiGithubLine, RiGlobalFill } from "react-icons/ri";

function Socials() {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiGithubLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiGlobalFill />
      </Link>
    </div>
  );
}

export default Socials;
