"use client";
import React, { useState } from "react";
import Circles from "../components/Circles";
import Bulb from "../components/Bulb";
import CerificationsSlider from "../components/CertificationsSlider";
//  data
export type CertificateItem = {
  title: string;
  description: string;
  image: string;
};
type CertificationSection = {
  title: string;
  info: CertificateItem[];
};
const aboutData: CertificationSection[] = [
  {
    title: "Development",
    info: [
      {
        title: "React.js Advanced Concepts",
        description: "CodeWithMosh, Online",
        image: "/images/thumb1.jpg",
      },
      {
        title: "JavaScript Algorithms & Data Structures",
        description: "freeCodeCamp, Online",
        image: "/images/thumb1.jpg",
      },
    ],
  },
  {
    title: "Design",
    info: [
      {
        title: "UI/UX Fundamentals",
        description: "Coursera, Online",
        image: "/images/certifications/Figma_Essential_Training.jpg",
      },
      {
        title: "Responsive Web Design",
        description: "freeCodeCamp, Online",
        image: "/images/thumb1.jpg",
      },
    ],
  },
  {
    title: "Version Control",
    info: [
      {
        title: "Git & GitHub Mastery",
        description: "CodeWithMosh, Online",
        image: "/images/thumb1.jpg",
      },
    ],
  },
  {
    title: "Agile & Methodologies",
    info: [
      {
        title: "Agile Fundamentals",
        description: "Atlassian, Online",
        image: "/images/thumb1.jpg",
      },
    ],
  },
];
function Cerifications() {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-3 md:mx-auto h-full  overflow-y-auto xl:overflow-visible">
        <div className="flex flex-col xl:flex-row gap-x-6">
          {/* textes */}
          <div className="text-center flex xl:w-[36vw] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-8">
              My Certifications<span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              {" "}
              Technology never stands still —{" "}
              <span className="text-accent">and neither do I.</span> <br />
              Each certification represents a step in my journey to deepen my
              expertise, stay ahead of trends, and deliver better digital
              experiences through continuous learning.
            </p>
          </div>
          <div className="flex flex-col w-full xl:max-w-[55%] ">
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${
                      index === itemIndex &&
                      "text-accent after:w-full after:bg-accent! after:transition-all after:duration-300"
                    } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-0.5 after:bg-white
                   after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    <span className="block truncate max-w-[90px] sm:max-w-none capitalize">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
            {/* Swiper Slider */}
            <CerificationsSlider certifications={aboutData[index].info} />
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
}

export default Cerifications;
