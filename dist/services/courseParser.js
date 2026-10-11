"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCourse = isCourse;
exports.toCourseState = toCourseState;
function isCourse(value) {
    if (typeof value !== "object" ||
        value === null) {
        return false;
    }
    const item = value;
    const validId = typeof item.id === "string" ||
        typeof item.id === "number";
    const validStatus = item.status === "planned" ||
        item.status === "studying" ||
        item.status === "completed";
    const validInstructor = item.instructor === undefined ||
        typeof item.instructor === "string";
    return (validId &&
        typeof item.title === "string" &&
        typeof item.credits === "number" &&
        validStatus &&
        validInstructor);
}
function toCourseState(raw) {
    if (!Array.isArray(raw)) {
        return {
            status: "error",
            message: "Payload must be an array."
        };
    }
    const data = raw.filter(isCourse);
    if (data.length !== raw.length) {
        return {
            status: "error",
            message: "Invalid course data."
        };
    }
    return {
        status: "success",
        data
    };
}
