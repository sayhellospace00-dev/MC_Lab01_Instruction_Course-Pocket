import type {
  Course,
  CourseFilter
} from "./course.types";

export function printCourse(course: Course): void {
  console.log(
    `${course.id} | ${course.title} | ` +
    `${course.credits} credits | ` +
    `${course.status} | ` +
    `${course.instructor ?? "TBA"}`
  );
}

export function filterCourses(
  items: Course[],
  filter: CourseFilter
): Course[] {
  if (filter === "all") {
    return items;
  }

  return items.filter(
    (course) => course.status === filter
  );
}

export function calculateTotalCredits(
  items: Course[]
): number {
  return items.reduce(
    (sum, course) =>
      sum + course.credits,
    0
  );
}

export function findCourseById(
  items: Course[],
  id: string
): Course | null {
  return (
    items.find(
      (course) => course.id === id
    ) ?? null
  );
}
