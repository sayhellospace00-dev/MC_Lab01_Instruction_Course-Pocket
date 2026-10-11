import { courses } from "./course.data";

import type {
  OnOpenCourse
} from "./course.types";

import {
  printCourse,
  filterCourses,
  calculateTotalCredits,
  findCourseById
} from "./course.service";

const openCourse: OnOpenCourse =
  (courseId) => {
    const course =
      findCourseById(courses, courseId);

    if (course === null) {
      console.log(
        "Cannot open course:",
        courseId
      );
      return;
    }

    console.log(
      "Opening course:",
      course.title
    );
  };

console.log("=== COURSE POCKET ===");
courses.forEach(printCourse);

const studyingCourses =
  filterCourses(
    courses,
    "studying"
  );

console.log("\n=== STUDYING ===");
studyingCourses.forEach(printCourse);

console.log(
  "\nTotal credits:",
  calculateTotalCredits(courses)
);

openCourse("MC101");
openCourse("UNKNOWN");
export {};