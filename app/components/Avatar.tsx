import React from "react";
import Image from "next/image";

function Avatar() {
  return (
    <div className="hidden xl:flex xl:max-w-none xl:justify-center">
      <Image
        src="/images/new-Avatar.png"
        alt="avatar"
        width={350}
        height={350}
        className="translate-z-0"
      />
    </div>
  );
}

export default Avatar;
