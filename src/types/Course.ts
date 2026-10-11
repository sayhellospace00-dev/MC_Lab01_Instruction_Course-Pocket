export type CourseID =
  string | number;

export type CourseStatus =
  | "planned"
  | "studying"
  | "completed"
  | "archived";

export interface Course {
  id: string;
  title: string;
  credits: number;
  status: CourseStatus;
  instructor?: string;
};

export type OnOpenCourse =
  (courseId: string) => void;

export type CourseState =
  | { status: "loading" }
  | {
      status: "success";
      data: Course[];
    }
  | {
      status: "error";
      message: string;
    };