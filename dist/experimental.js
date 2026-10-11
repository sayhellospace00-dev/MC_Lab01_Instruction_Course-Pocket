"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appName = "Course Pocket";
let retryCount = 0;
let isReady = true;
console.log("App:", appName);
console.log("Retry:", retryCount);
console.log("Ready:", isReady);
// 
const tabs = ["Home", "Courses", "Profile"];
const campusLocation = [10.7626, 106.6824];
console.log("Tabs:", tabs);
console.log("Campus location:", campusLocation);
const courses = [
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
console.log(courses);
//
function printCourse(course) {
    const instructor = course.instructor ?? "TBA";
    console.log(`${course.id} | ${course.title} | ` +
        `${course.credits} credits | ${course.status} | ${instructor}`);
}
courses.forEach(printCourse);
function filterCourses(items, filter) {
    if (filter === "all") {
        return items;
    }
    return items.filter((course) => course.status === filter);
}
const studyingCourses = filterCourses(courses, "studying");
console.log("Studying courses:");
studyingCourses.forEach(printCourse);
//
function calculateTotalCredits(items) {
    return items.reduce((sum, course) => sum + course.credits, 0);
}
console.log("Total credits:", calculateTotalCredits(courses));
//
function findCourseById(items, id) {
    return items.find((course) => course.id === id) ?? null;
}
const selectedCourse = findCourseById(courses, "SE201");
if (selectedCourse !== null) {
    console.log("Selected:", selectedCourse.title);
}
else {
    console.log("Course not found");
}
const openCourse = (courseId) => {
    const course = findCourseById(courses, courseId);
    if (course === null) {
        console.log("Cannot open course:", courseId);
        return;
    }
    console.log("Opening course:", course.title);
};
openCourse("MC101");
const profile = {
    title: "Mobile Computing",
    instructor: null
};
console.log("Thumbnail:", profile.thumbnailUrl ?? "No thumbnail");
console.log("Instructor:", profile.instructor ?? "TBA");
//
let unsafeData = {
    title: "Mobile Computing"
};
// Compiler không bảo vệ:
// unsafeData.executeCrash();
let rawData = {
    title: "Mobile Computing"
};
// rawData.title; // bị chặn cho tới khi narrow
//
function isCourse(value) {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    const item = value;
    const validStatus = item.status === "planned" ||
        item.status === "studying" ||
        item.status === "completed";
    return (typeof item.id === "string" &&
        typeof item.title === "string" &&
        typeof item.credits === "number" &&
        validStatus);
}
const raw = {
    id: "AI301",
    title: "AI Fundamentals",
    credits: 3,
    status: "planned"
};
if (isCourse(raw)) {
    console.log("Valid course:", raw.title);
}
else {
    console.log("Invalid course data");
}
