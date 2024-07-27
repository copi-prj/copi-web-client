export interface Project {
  projectId: number;
  menu: string; // 모집구분: 프로젝트, 스터디
  title: string;
  proceed: string[]; // 진행방식: 온라인, 오프라인, 온오프라인
  position: string[]; // 포지션: 백엔드, 프론트엔드
  technologyStack: string[]; // 기술스택: 스프링, 리액트
  startDate: string;
  endDate: string;
  username: string;
  hits: number; // 조회수
  commentsCount: number; // 댓글수
  content: string; // 글 내용
}
export interface ProjectWithPath extends Omit<Project, 'hits' | 'commentsCount'> {
  hits: string;
  commentsCount: string;
  path: string;
}
