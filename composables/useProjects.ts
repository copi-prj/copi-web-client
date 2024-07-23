import projects from './projectsData.js';
import type { Project } from '~/types/project.js';

interface ProjectsReturn {
  projects: Project[];
}

export const useProjects = (): ProjectsReturn => {
  return { projects };
};
