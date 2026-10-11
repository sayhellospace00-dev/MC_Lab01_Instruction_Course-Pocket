export type CourseStatus =
  | "planned"
  | "studying"
  | "completed";

export type CourseFilter =
  | "all"
  | CourseStatus;

export type Course = {
  id: string;
  title: string;
  credits: number;
  status: CourseStatus;
  instructor?: string;
};

export type OnOpenCourse =
  (courseId: string) => void;
