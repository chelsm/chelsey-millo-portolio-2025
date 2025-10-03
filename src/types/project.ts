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
