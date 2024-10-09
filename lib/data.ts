import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import spotifyImg from "@/public/spotify.jpeg";
import xImg from "@/public/X.jpeg";
import { IconBase } from "react-icons";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
	{
		title: "Développeur Web Fullstack",
		company: "Likewatt",
		duration: "Février 2024 - Aujourd'hui",
		location: "Lyon, Auvergne-Rhône-Alpes, France",
		description:
			"Conception et développement de fonctionnalités pour le logiciel 'Optiwize' spécialisé dans l'optimisation technico-économique des projets d'énergies renouvelables et d'autoconsommation. Utilisation de React, Node.js, SQL, NoSQL. Maintenance, résolution de problèmes et participation aux réunions d'équipe pour améliorer le produit.",
			icon: CgWorkAlt,
		},
		{
			title: "Développeur d'Applications Mobiles",
			company: "Ekami",
			duration: "Septembre 2023 - Décembre 2023 ",
			location: "Lyon",
			description:
				"Conception et développement d'une application mobile visant à améliorer l'expérience de dégustation de vin. Utilisation de React Native, PostgreSQL, Supabase. Développement de la logique de l'application, création de composants graphiques, communication avec une API et gestion du store de données local (Redux).",
			icon: FaReact,
		},
	{
		title: "Développeur Web Fullstack",
		company: "WEB@CADEMIE BY EPITECH",
		duration: "2022-2024",
		location: "Lyon",
		description:
			"Formation intensive en développement web couvrant l'intégration HTML/CSS, PHP (Symfony, Laravel), JavaScript (React, Node.js) et les bases de données SQL/NoSQL. Réalisation de projets incluant la reproduction de Twitter en groupe et le développement d'une application solo similaire à Spotify.",
		icon: LuGraduationCap,
	},
] as const;


export const projectsData = [
	{
		title: "Spotify",
		description: "Un clone de Spotify que j'ai construit pour le plaisir. Il a des fonctionnalités comme la lecture de musique, la recherche de chansons et la création de playlists.",
		tags: ["React", "Tailwind", "Spotify API", "Framer Motion"],
		imageUrl: "/spotify.jpeg",
		competencies: ["Développement frontend", "Intégration API", "Design responsive"],
	  },
	{
	  title: "X Copy",
	  description: "Un clone de X Copy que j'ai construit. Il y a toutes les fonctionnalités de X Copy, y compris la création de documents, la collaboration en temps réel et le partage de documents.",
	  tags: ["React", "Symfony", "Tailwind", "GraphQL"],
	  imageUrl: "/X.jpeg",
	  competencies: ["Développement fullstack", "Temps réel", "Gestion de documents"],
	},
	{
	  title: "BSQ",
	  description: "Un projet algorithmique complexe impliquant la recherche du plus grand carré dans une grille avec des obstacles.",
	  tags: ["C", "Algorithmes", "Optimisation"],
	  imageUrl: "/bsq.jpg",
	  competencies: ["Programmation bas niveau", "Optimisation algorithmique", "Résolution de problèmes"],
	},
	{
	  title: "Les paniers de saisons",
	  description: "Site vitrine pour une association de producteurs locaux. Les utilisateurs peuvent voir les produits disponibles, les paniers de saisons ainsi que commander en ligne.",
	  tags: ["WordPress", "WooCommerce"],
	  imageUrl: "/panier.jpg",
	  competencies: ["Développement WordPress", "E-commerce", "Personnalisation de thème"],
	},
  ] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"Prisma",
	"MongoDB",
	"Redux",
	"Express",
	"PostgreSQL",
] as const;
