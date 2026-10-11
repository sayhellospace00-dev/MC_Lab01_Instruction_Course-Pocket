"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const course_data_1 = require("./course.data");
const course_service_1 = require("./course.service");
const openCourse = (courseId) => {
    const course = (0, course_service_1.findCourseById)(course_data_1.courses, courseId);
    if (course === null) {
        console.log("Cannot open course:", courseId);
        return;
    }
    console.log("Opening course:", course.title);
};
console.log("=== COURSE POCKET ===");
course_data_1.courses.forEach(course_service_1.printCourse);
const studyingCourses = (0, course_service_1.filterCourses)(course_data_1.courses, "studying");
console.log("\n=== STUDYING ===");
studyingCourses.forEach(course_service_1.printCourse);
console.log("\nTotal credits:", (0, course_service_1.calculateTotalCredits)(course_data_1.courses));
openCourse("MC101");
openCourse("UNKNOWN");
