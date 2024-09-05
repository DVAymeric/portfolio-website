import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = {
  title: string;
  description: string;
  tags: ReadonlyArray<string>;
  imageUrl: string;
  width: number;
  height: number;
};

export default function Project({ title, description, tags, imageUrl, width, height }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="relative flex flex-col sm:flex-row bg-gray-100 dark:bg-white/10 border border-black/5 rounded-lg overflow-hidden transition hover:bg-gray-200 dark:hover:bg-white/20">
        <div className="flex flex-col p-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-700 dark:text-white/70 leading-relaxed">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white bg-black/[0.7] rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={`Screenshot of ${title} project`}
          quality={95}
          width={width} // Ajoutez cette ligne
          height={height} // Ajoutez cette ligne
          className="hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2"
        />
      </section>
    </motion.div>
  );
}
