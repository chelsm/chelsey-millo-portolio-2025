export type ProjectsData = {
  [key: string]: Project;
};

export type Project = {
  title: string;
  description: string;
  subprojects: Subproject[];
};

export type Subproject = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

export interface SchoolProject {
  title: string;
  description: string;
  image: string;
  gitLink?: string;
}

export interface SkillItem {
  name: string;
  list: string[];
  pins: "circle" | "square" | "flower" | "shape";
  color: string;
  rotatation: string;
  top?: string;
}

export interface SkillsData {
  skills: SkillItem[];
}

