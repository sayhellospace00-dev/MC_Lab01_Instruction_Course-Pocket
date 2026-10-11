"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printCourse = printCourse;
exports.runCourseReport = runCourseReport;
exports.openCourse = openCourse;
const courseUtils_1 = require("../utils/courseUtils");
function printCourse(course) {
    console.log(`${String(course.id)} | ` +
        `${course.title} | ` +
        `${course.credits} credits | ` +
        `${course.status} | ` +
        `${course.instructor ?? "TBA"}`);
}
function runCourseReport(courses) {
    console.log("=== ALL COURSES ===");
    courses.forEach(printCourse);
    const studying = (0, courseUtils_1.filterCourses)(courses, "studying");
    console.log("\n=== STUDYING ===");
    studying.forEach(printCourse);
    console.log("\nTotal credits:", (0, courseUtils_1.calculateTotalCredits)(courses));
}
function openCourse(courses, id) {
    const course = (0, courseUtils_1.findCourseById)(courses, id);
    if (course === null) {
        console.log("Course not found:", id);
        return;
    }
    console.log("Opening:", course.title);
}
