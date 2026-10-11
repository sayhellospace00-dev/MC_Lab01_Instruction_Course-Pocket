const appName: string = "Course Pocket";
let retryCount: number = 0;
let isReady: boolean = true;

console.log("App:", appName);
console.log("Retry:", retryCount);
console.log("Ready:", isReady);

// 
const tabs: string[] = ["Home", "Courses", "Profile"];
type LocationPoint = [number, number];

const campusLocation: LocationPoint = [10.7626, 106.6824];
console.log("Tabs:", tabs);
console.log("Campus location:", campusLocation);

//
type CourseStatus = "planned" | "studying" | "completed";

type Course = {
  id: string;
  title: string;
  credits: number;
  status: CourseStatus;
  instructor?: string;
};

const courses: Course[] = [
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
function printCourse(course: Course): void {
  const instructor = course.instructor ?? "TBA";

  console.log(
    `${course.id} | ${course.title} | ` +
    `${course.credits} credits | ${course.status} | ${instructor}`
  );
}

courses.forEach(printCourse);

//
type CourseFilter = "all" | CourseStatus;

function filterCourses(
  items: Course[],
  filter: CourseFilter
): Course[] {
  if (filter === "all") {
    return items;
  }

  return items.filter(
    (course) => course.status === filter
  );
}

const studyingCourses =
  filterCourses(courses, "studying");

console.log("Studying courses:");
studyingCourses.forEach(printCourse);

//
function calculateTotalCredits(items: Course[]): number {
  return items.reduce(
    (sum, course) => sum + course.credits,
    0
  );
}

console.log(
  "Total credits:",
  calculateTotalCredits(courses)
);

//
function findCourseById(
  items: Course[],
  id: string
): Course | null {
  return items.find((course) => course.id === id) ?? null;
}

const selectedCourse =
  findCourseById(courses, "SE201");

if (selectedCourse !== null) {
  console.log("Selected:", selectedCourse.title);
} else {
  console.log("Course not found");
}

//
type OnOpenCourse = (courseId: string) => void;

const openCourse: OnOpenCourse = (courseId) => {
  const course = findCourseById(courses, courseId);

  if (course === null) {
    console.log("Cannot open course:", courseId);
    return;
  }

  console.log("Opening course:", course.title);
};

openCourse("MC101");
// openCourse(101); // compile-time error

//
type CourseProfile = {
  title: string;              // required
  thumbnailUrl?: string;      // optional / undefined
  instructor: string | null;  // key có, value có thể null
};

const profile: CourseProfile = {
  title: "Mobile Computing",
  instructor: null
};

console.log(
  "Thumbnail:",
  profile.thumbnailUrl ?? "No thumbnail"
);

console.log(
  "Instructor:",
  profile.instructor ?? "TBA"
);

//
let unsafeData: any = {
  title: "Mobile Computing"
};

// Compiler không bảo vệ:
// unsafeData.executeCrash();

let rawData: unknown = {
  title: "Mobile Computing"
};

// rawData.title; // bị chặn cho tới khi narrow

//
function isCourse(value: unknown): value is Course {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const item =
    value as Record<string, unknown>;

  const validStatus =
    item.status === "planned" ||
    item.status === "studying" ||
    item.status === "completed";

  return (
    typeof item.id === "string" &&
    typeof item.title === "string" &&
    typeof item.credits === "number" &&
    validStatus
  );
}
const raw: unknown = {
  id: "AI301",
  title: "AI Fundamentals",
  credits: 3,
  status: "planned"
};

if (isCourse(raw)) {
  console.log("Valid course:", raw.title);
} else {
  console.log("Invalid course data");
}

//
export {};