import type {
  Course,
  CourseID
} from "../types";

import {
  calculateTotalCredits,
  filterCourses,
  findCourseById
} from "../utils/courseUtils";

export function printCourse(
  course: Course
): void {
  console.log(
    `${String(course.id)} | ` +
    `${course.title} | ` +
    `${course.credits} credits | ` +
    `${course.status} | ` +
    `${course.instructor ?? "TBA"}`
  );
}

export function runCourseReport(
  courses: Course[]
): void {
  console.log(
    "=== ALL COURSES ==="
  );
  courses.forEach(printCourse);

  const studying =
    filterCourses(
      courses,
      "studying"
    );

  console.log(
    "\n=== STUDYING ==="
  );
  studying.forEach(printCourse);

  console.log(
    "\nTotal credits:",
    calculateTotalCredits(courses)
  );
}

export function openCourse(
  courses: Course[],
  id: CourseID
): void {
  const course =
    findCourseById(courses, id);

  if (course === null) {
    console.log(
      "Course not found:",
      id
    );
    return;
  }

  console.log(
    "Opening:",
    course.title
  );
}