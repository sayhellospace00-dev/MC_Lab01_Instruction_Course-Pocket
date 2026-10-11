import type {
  Course,
  CourseState
} from "../types";

export function isCourse(
  value: unknown
): value is Course {
  if (
    typeof value !== "object" ||
    value === null
  ) {
    return false;
  }

  const item =
    value as Record<string, unknown>;

  const validId =
    typeof item.id === "string" ||
    typeof item.id === "number";

  const validStatus =
    item.status === "planned" ||
    item.status === "studying" ||
    item.status === "completed";

  const validInstructor =
    item.instructor === undefined ||
    typeof item.instructor === "string";

  return (
    validId &&
    typeof item.title === "string" &&
    typeof item.credits === "number" &&
    validStatus &&
    validInstructor
  );
}

export function toCourseState(
  raw: unknown
): CourseState {
  if (!Array.isArray(raw)) {
    return {
      status: "error",
      message: "Payload must be an array."
    };
  }

  const data =
    raw.filter(isCourse);

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
