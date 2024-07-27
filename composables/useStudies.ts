import studies from './studiesData.js';
import type { Study } from '~/types/study';

interface StudiesReturn {
  studies: Study[];
}

export const useStudies = (): StudiesReturn => {
  return { studies };
};
