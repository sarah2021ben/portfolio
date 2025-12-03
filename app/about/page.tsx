"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import CountUp from "react-countup";

//  data
type InfoItem = {
  title: string;
  skills?: string[];
  stage?: string;
  description?: string[];
  icons?: React.ElementType[];
};
type AboutSection = {
  title: string;
  info: InfoItem[];
};
const aboutData: AboutSection[] = [
  {
    title: "skills",
    info: [
      {
        title: "Front-End Development",
        skills: [
          "JavaScript (ES6+)",
          "TypeScript",
          "React.js",
          "Next.js",
          "Vue.js",
          "Nuxt.js",
          "HTML5",
          "WordPress",
        ],
      },
      {
        title: "Styling",
        skills: ["CSS", "SCSS", "Bootstrap", "Tailwind CSS", "Shadcn UI"],
      },
      {
        title: "State Management",
        skills: ["Redux", "Zustand", "Context API"],
      },
      {
        title: "UI Libraries",
        skills: ["Ant Design", "Material UI", "Chakra UI", "Radix UI"],
      },
      {
        title: "Architecture & Design",
        skills: [
          "Component-based architecture",
          "Reusable UI patterns",
          "Responsive design",
        ],
      },
      {
        title: "Versioning",
        skills: ["Git", "GitHub"],
      },
      {
        title: "API Integration",
        skills: ["REST APIs"],
      },
      {
        title: "Project Management",
        skills: [
          "Agile methodology",
          "Sprint planning",
          "Task prioritization",
          "Collaboration tools",
        ],
      },
      {
        title: "Tools",
        skills: [
          "VS Code",
          "Figma",
          "Jira",
          "ClickUp",
          "Slack",
          "HubSpot",
          "Microsoft Teams",
        ],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Front-End Developer | Algiers, Algeria",
        stage: "Factory Digital | Feb 2023-now",
        description: [
          "Delivered responsive UI based on Figma prototypes.",
          "Implemented scalable front-end architecture patterns for long-term maintainability.",
          "Worked closely with UI/UX and back-end teams to align technical requirements.",
          "Took part in Agile events (daily, planning, review)",
          "Escalated technical issues and proposed effective fixes.",
        ],
      },
      {
        title: "Front-End Developer (WordPress) | Algiers, Algeria",
        stage: "AYRADE | June 2020-Feb 2023",
        description: [
          "Listened to and advised clients to define website requirements and visual identity.",
          "Designed and developed custom WordPress websites, ensuring responsive layouts and modern UI.",
          "Trained clients on content management and delivered clear technical documentation for ongoing use.",
        ],
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Master in Telecommunication",
        stage: "USTHB University | 2017-2019",
        description: ["Final Project Score: 17/20"],
      },
      {
        title: "Bachelor in Electronics and Control System",
        stage: "USTHB University | 2014-2017",
        description: [
          "Received two “Certificate of Honor” awards for academic excellence",
        ],
      },
    ],
  },
];

import Avatar from "../components/Avatar";
import Circles from "../components/Circles";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-3 md:mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 overflow-y-auto xl:overflow-visible">
        {/**textes */}
        <div className="flex flex-1 flex-col justify-center p-2">
          <h2 className="h2">
            Turning <span className="text-accent">challenges</span> into digital
            solutions.
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            I build modern and user-centered web interfaces with a focus on
            simplicity, performance, and detail.
          </p>
          {/**counters */}
          <div className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
            <div className="flex flex-1 wl:gap-x-6">
              {/*experience */}
              <div className="relative px-6 xl:justify-items-center after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  {" "}
                  Years of experience
                </div>
              </div>
              {/*Projects */}
              <div className="relative px-6 xl:justify-items-center after:w-px after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={20} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  {" "}
                  Projects
                </div>
              </div>
              {/*projects */}
              <div className="relative px-6 xl:justify-items-center">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={18} duration={10} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  {" "}
                  Certifications
                </div>
              </div>
            </div>
          </div>
        </div>
        {/**Tabs */}
        <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
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
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-2 xl:gap-y-4 items-center xl:items-start">
            {/* TAB 0 = skills */}
            {index === 0 &&
              aboutData[index].info.map((item, i) => (
                <div key={i} className="text-white/70">
                  <span className="font-bold text-white">{item.title} : </span>
                  {item.skills?.map((skill, idx) => (
                    <span key={idx}>
                      {skill}
                      {idx + 1 !== item?.skills?.length && (
                        <span className="text-accent/50"> | </span>
                      )}
                    </span>
                  ))}
                </div>
              ))}

            {/* TAB 1 = Experience */}
            {index === 1 &&
              aboutData[index].info.map((item, i) => (
                <div key={i} className="text-white/70 flex flex-col gap-2 mb-4">
                  <div className="flex justify-between">
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="text-xs text-white/50">{item.stage}</div>
                  </div>
                  {item.description && (
                    <ul className="list-disc list-inside ml-2 mt-1">
                      {item.description.map((desc, j) => (
                        <li key={j}>{desc}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

            {/* TAB 2 = Education */}
            {index === 2 &&
              aboutData[index].info.map((item, i) => (
                <div key={i} className="text-white/70 flex flex-col gap-2 mb-4">
                  <div className="font-semibold text-white">{item.title}</div>
                  <div className="text-xs text-white/50">{item.stage}</div>
                  {item.description && (
                    <ul className="list-none mt-1">
                      {item.description.map((desc, j) => (
                        <li key={j}>{desc}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
