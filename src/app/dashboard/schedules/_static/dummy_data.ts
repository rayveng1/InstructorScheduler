export type Schedule = {
  scheduleName: string;
  courses: Array<Course>;
};

export type Course = {
  courseName: string;
  courseDays: Array<number>;
  courseStart: string;
  courseEnd: string;
};

export const dummy_schedule_data: Array<Schedule> = [
  {
    scheduleName: "Schedule 1",
    courses: [
      {
        courseName: "CS 4000.001",
        courseDays: [0, 1, 2],
        courseStart: "7:30",
        courseEnd: "8:45",
      },
      {
        courseName: "CS 4000.002",
        courseDays: [0],
        courseStart: "9:30",
        courseEnd: "10:45",
      },
      {
        courseName: "CS 4000.003",
        courseDays: [0],
        courseStart: "14:30",
        courseEnd: "15:45",
      },
      {
        courseName: "CS 4000.004",
        courseDays: [1],
        courseStart: "11:45",
        courseEnd: "13:00",
      },
      {
        courseName: "CS 4000.005",
        courseDays: [2, 3, 4],
        courseStart: "10:45",
        courseEnd: "12:00",
      },
      {
        courseName: "CS 4000.006",
        courseDays: [4],
        courseStart: "12:45",
        courseEnd: "14:00",
      },
    ],
  },
  {
    scheduleName: "Schedule 2",
    courses: [
      {
        courseName: "CS 4000.001",
        courseDays: [0, 1, 2],
        courseStart: "7:30",
        courseEnd: "8:45",
      },
      {
        courseName: "CS 4000.002",
        courseDays: [0],
        courseStart: "9:30",
        courseEnd: "10:45",
      },
      {
        courseName: "CS 4000.003",
        courseDays: [0],
        courseStart: "14:30",
        courseEnd: "15:45",
      },
    ],
  },
  {
    scheduleName: "Schedule 3",
    courses: [
      {
        courseName: "CS 4000.002",
        courseDays: [0],
        courseStart: "9:30",
        courseEnd: "10:45",
      },
      {
        courseName: "CS 4000.003",
        courseDays: [0],
        courseStart: "14:30",
        courseEnd: "15:45",
      },
      {
        courseName: "CS 4000.004",
        courseDays: [1],
        courseStart: "11:45",
        courseEnd: "13:00",
      },
      {
        courseName: "CS 4000.005",
        courseDays: [2, 3, 4],
        courseStart: "10:45",
        courseEnd: "12:00",
      },
    ],
  },
];
