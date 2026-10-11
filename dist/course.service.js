"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printCourse = printCourse;
exports.filterCourses = filterCourses;
exports.calculateTotalCredits = calculateTotalCredits;
exports.findCourseById = findCourseById;
function printCourse(course) {
    console.log(`${course.id} | ${course.title} | ` +
        `${course.credits} credits | ` +
        `${course.status} | ` +
        `${course.instructor ?? "TBA"}`);
}
function filterCourses(items, filter) {
    if (filter === "all") {
        return items;
    }
    return items.filter((course) => course.status === filter);
}
function calculateTotalCredits(items) {
    return items.reduce((sum, course) => sum + course.credits, 0);
}
function findCourseById(items, id) {
    return (items.find((course) => course.id === id) ?? null);
}
