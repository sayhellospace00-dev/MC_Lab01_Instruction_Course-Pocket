"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coursePayload_1 = require("./data/coursePayload");
const courseParser_1 = require("./services/courseParser");
const courseApp_1 = require("./app/courseApp");
const state = (0, courseParser_1.toCourseState)(coursePayload_1.rawCoursePayload);
switch (state.status) {
    case "loading":
        console.log("Loading...");
        break;
    case "error":
        console.log("Error:", state.message);
        break;
    case "success":
        (0, courseApp_1.runCourseReport)(state.data);
        (0, courseApp_1.openCourse)(state.data, "MC101");
        break;
}
