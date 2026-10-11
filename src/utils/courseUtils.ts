import type {
  Course,
  CourseID,
  CourseStatus
} from "../types";

export type CourseFilter =
  "all" | CourseStatus;

export function filterCourses(
  courses: Course[],
  filter: CourseFilter
): Course[] {
  if (filter === "all") {
    return courses;
  }

  return courses.filter(
    (course) =>
      course.status === filter
  );
}

export function calculateTotalCredits(
  courses: Course[]
): number {
  return courses.reduce(
    (sum, course) =>
      sum + course.credits,
    0
  );
}

export function findCourseById(
  courses: Course[],
  id: CourseID
): Course | null {
  return (
    courses.find(
      (course) => course.id === id
    ) ?? null
  );
}