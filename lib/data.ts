import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import { IconType } from 'react-icons';
import { 
 FaJs, FaReact, FaNodeJs, FaGitAlt,
 FaAngular
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiPrisma, 
  SiMongodb, SiRedux, SiExpress, SiPostgresql
} from 'react-icons/si';


export interface Skill {
	name: string;
	icon: IconType;
	color: string;
  }

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
		tags: ["React", "Spotify API", "Framer Motion"],
		imageUrl: "/spotify.jpeg",
		competencies: ["Développement frontend", "Intégration API", "Lecture de musique"],
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
	  tags: ["PHP", "Algorithmes", "Optimisation"],
	  imageUrl: "/bsq.jpg",
	  competencies: ["Algorithmes", "Optimisation", "PHP"],
	},
	{
	  title: "Les paniers de saisons",
	  description: "Site vitrine pour une association de producteurs locaux. Les utilisateurs peuvent voir les produits disponibles, les paniers de saisons ainsi que commander en ligne.",
	  tags: ["WordPress", "WooCommerce"],
	  imageUrl: "/panier.jpg",
	  host: "https://lepanierdessaisons.fr/",
	  competencies: ["Développement WordPress", "E-commerce", "Personnalisation de thème", "SEO"],
	},
	{
		title: "E-commerce",
		description: "Site e-commerce pour produit informatique. Les utilisateurs peuvent voir les produits disponibles, les ajouter au panier et passer commande.",
		tags: ["React", "Node.js", "MongoDB"],
		imageUrl: "/ecommerce.jpg",
		competencies: ["Développement fullstack", "Gestion de projet", "Paiement en ligne"],
	  },
	{
		title: "Turn the page",
		description: "Cette application permet aux utilisateurs de gérer une bibliothèque personnelle de livres. Les utilisateurs peuvent rechercher et ajouter des livres via l'API Google Books, les classer par catégories (lecture en cours, à lire, lues), suivre les progrès de lecture avec des statistiques (pages lues, temps estimé de lecture) et naviguer facilement parmi les livres grâce à une interface responsive avec tri et filtres.",
		tags: ["Angular", "Google Books API", "Firebase"],
		imageUrl: "/library.jpg",
		competencies: ["Développement frontend", "Intégration API", "Gestion de données"],
	  },

  ] as const;

  export const skillsData: Skill[] = [
	{ name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
	{ name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
	{ name: "React", icon: FaReact, color: "#61DAFB" },
	{ name: "Next.js", icon: SiNextdotjs, color: "#000000" },
	{ name: "Node.js", icon: FaNodeJs, color: "#339933" },
	{ name: "Express", icon: SiExpress, color: "#000000" },
	{ name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
	{ name: "Angular", icon: FaAngular, color: "#DD0031" },
	{ name: "MongoDB", icon: SiMongodb, color: "#47A248" },
	{ name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
	{ name: "Redux", icon: SiRedux, color: "#764ABC" },
	{ name: "Git", icon: FaGitAlt, color: "#F05032" },
  ];