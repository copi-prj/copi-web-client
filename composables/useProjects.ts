import projectsData from './projectsData.js';
import type { ProjectWithPath } from '~/types/project.js';

interface ProjectsReturn {
  projects: ProjectWithPath[];
}

export const useProjects = (): ProjectsReturn => {
  const projects = projectsData.map((item) => ({
    ...item,
    hits: item.hits.toLocaleString(), // 1000 -> '1,000'
    commentsCount: item.commentsCount.toLocaleString(), // 1000 -> '1,000'
    path: `/project/${item.projectId}`,
  }));
  return { projects };
};
