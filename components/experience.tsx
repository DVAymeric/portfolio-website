"use client";

import React, { CSSProperties } from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  const isLightTheme = theme === "light";

  const contentStyles: CSSProperties = {
    background: isLightTheme ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
    boxShadow: "none",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    textAlign: "left",
    padding: "1.3rem 2rem",
  };

  const arrowStyles: CSSProperties = {
    borderRight: isLightTheme
      ? "0.4rem solid #9ca3af"
      : "0.4rem solid rgba(255, 255, 255, 0.5)",
  };

  return (
    <motion.section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Mon expérience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <VerticalTimelineElement
            key={index} // Utiliser un identifiant unique si disponible
            contentStyle={contentStyles}
            contentArrowStyle={arrowStyles}
            iconStyle={{
              background: isLightTheme ? "white" : "rgba(255, 255, 255, 0.15)",
              color: isLightTheme ? "black" : "white",
            }}
            icon={<item.icon />} // Rendre l'icône en tant que composant React
          >
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="font-normal !mt-0">{item.location}</p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </motion.section>
  );
}
