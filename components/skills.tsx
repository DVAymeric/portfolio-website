"use client";

import React, { useMemo } from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  // Mémoriser les variantes d'animation pour éviter de les recréer à chaque rendu
  const fadeInAnimationVariants = useMemo(() => {
    return {
      initial: { opacity: 0, y: 100 },
      animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.05 * index },
      }),
    };
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Mes compétences</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 dark:text-white/80">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10"
            key={skill} // Utilisation du nom de la compétence comme clé
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index} // Utilisation directe de l'index
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
