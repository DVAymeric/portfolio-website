import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ProjectProps = {
  title: string;
  description: string;
  tags: ReadonlyArray<string>;
  imageUrl: string;
  competencies: ReadonlyArray<string>;
};