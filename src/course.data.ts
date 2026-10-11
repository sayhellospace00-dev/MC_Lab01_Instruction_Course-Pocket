import type { Course } from "./course.types";

export const courses: Course[] = [
  {
    id: "MC101",
    title: "Mobile Computing",
    credits: 3,
    status: "studying",
    instructor: "Dr. An"
  },
  {
    id: "SE201",
    title: "Software Engineering",
    credits: 4,
    status: "planned"
  },
  {
    id: "DB202",
    title: "Database Systems",
    credits: 3,
    status: "completed",
    instructor: "Ms. Lan"
  }
];