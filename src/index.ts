import {
  rawCoursePayload
} from "./data/coursePayload";

import {
  toCourseState
} from "./services/courseParser";

import {
  openCourse,
  runCourseReport
} from "./app/courseApp";

const state =
  toCourseState(rawCoursePayload);

switch (state.status) {
  case "loading":
    console.log("Loading...");
    break;

  case "error":
    console.log(
      "Error:",
      state.message
    );
    break;

  case "success":
    runCourseReport(state.data);
    openCourse(
      state.data,
      "MC101"
    );
    break;
}
