"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	// Paramètres d'animation réutilisables
	const animationSettings = {
		initial: { opacity: 0, y: 100 },
		animate: { opacity: 1, y: 0 },
		transition: { delay: 0.175 },
	};

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			{...animationSettings}
			id="about"
		>
			<SectionHeading>À propos de moi</SectionHeading>
			<p className="mb-3">
				Après avoir exploré plusieurs métiers, j'ai décidé de m'orienter dans{" "}
				<span className="font-medium">l'informatique</span>, et j'ai poursuivi
				ma passion pour la programmation. J'ai suivi la formation de la
				Web@cadémie by EPitech et j'ai appris le{" "}
				<span className="font-medium">développement web full-stack</span>.{" "}
				<span className="italic">Ma partie préférée de la programmation</span>{" "}
				est l'aspect résolution de problèmes. J'<span className="font-medium">adore</span>{" "}
				la sensation de finalement trouver une solution à un problème.
			</p>
		</motion.section>
	);
}
