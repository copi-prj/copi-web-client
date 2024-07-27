export interface Study {
  studyId: number;
  menu: string;
  title: string;
  content: string;
  proceed: string[];
  position: string[];
  technologyStack: string[];
  // projectPosition: string[]; // 포지션: 백엔드, 프론트엔드
  // projectStack: string[]; // 기술스택 (이미지 경로 배열, 예: 스프링.svg, 리액트.svg)
  startDate: string;
  endDate: string;
  username: string;
  hits: number;
  commentsCount: number;
  recruitmentCount: number; // 모집인원: 0인경우 인원미정
}
