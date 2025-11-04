import React from "react";
import Image from "next/image";

function Circles() {
  return (
    <div className="hidden xl:block w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
      <Image
        src={"/images/circles.png"}
        width={260}
        height={200}
        className="w-full h-full"
        alt="circles"
      />
    </div>
  );
}

export default Circles;
