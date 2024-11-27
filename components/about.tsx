"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
      <motion.section
          ref={ref}
          className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
          id="about"
      >
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
          I transitioned from a career in <span className="font-medium">Graphic Design</span> to technology after discovering my passion for coding. I'm a self-taught developer with expertise in <span className="font-medium">front-end technologies</span> and a keen interest in UX/UI design. I thrive on creating engaging, user-friendly web experiences using <span className="font-medium">JavaScript, React, and CSS</span>. Currently, I am expanding my skill set into <span className="font-medium">Next.js and serverless architectures</span>.
        </p>

        <p>
          Outside of coding, I am an avid rock climber and photographer. I believe in continuous learning and am currently exploring <span className="font-medium">sustainable design practices</span> to enhance my projects environmentally and aesthetically.
        </p>
      </motion.section>
  );
}
