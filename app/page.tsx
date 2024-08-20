import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";

export default function Home() {
	return (
		<main className="flex flex-col items-center px-4">
			<section id="intro">
				<Intro />
			</section>


			<section id="about">
				<About />
			</section>


			<section id="projects">
				<Projects />
			</section>


			<section id="skills">
				<Skills />
			</section>


			<section id="experience">
				<Experience />
			</section>


			<section id="contact">
				<Contact />
			</section>
		</main>
	);
}
