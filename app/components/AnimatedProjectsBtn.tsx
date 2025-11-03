"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import ProjectsBtn from "./ProjectsBtn";

export default function AnimatedProjectsBtn() {
  return (
    <motion.div
      variants={fadeIn("down", 0.6)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="hidden xl:flex"
    >
      <ProjectsBtn />
    </motion.div>
  );
}
