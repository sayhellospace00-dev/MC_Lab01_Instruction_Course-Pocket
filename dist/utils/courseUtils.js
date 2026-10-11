"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterCourses = filterCourses;
exports.calculateTotalCredits = calculateTotalCredits;
exports.findCourseById = findCourseById;
function filterCourses(courses, filter) {
    if (filter === "all") {
        return courses;
    }
    return courses.filter((course) => course.status === filter);
}
function calculateTotalCredits(courses) {
    return courses.reduce((sum, course) => sum + course.credits, 0);
}
function findCourseById(courses, id) {
    return (courses.find((course) => course.id === id) ?? null);
}
