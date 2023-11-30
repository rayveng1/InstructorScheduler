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

export const dummy_schedule_data_2: Array<Schedule> = [
  {
    courses: [
      {
        courseDays: [0, 2],
        courseEnd: "11:15",
        courseName: "cs2340.003",
        courseStart: "10:00",
      },
      {
        courseDays: [0, 2],
        courseEnd: "13:50",
        courseName: "cs1200.001",
        courseStart: "13:00",
      },
      {
        courseDays: [0, 2],
        courseEnd: "12:30",
        courseName: "cs3162.052",
        courseStart: "11:30",
      },
      {
        courseDays: [0, 2],
        courseEnd: "15:45",
        courseName: "cs1334.002",
        courseStart: "14:30",
      },
    ],
    scheduleName: "Schedule 1",
  },
  {
    courses: [
      {
        courseDays: [0, 2],
        courseEnd: "11:15",
        courseName: "cs2340.003",
        courseStart: "10:00",
      },
      {
        courseDays: [1, 3],
        courseEnd: "13:50",
        courseName: "cs1200.hon",
        courseStart: "13:00",
      },
      {
        courseDays: [0, 2],
        courseEnd: "12:30",
        courseName: "cs3162.052",
        courseStart: "11:30",
      },
      {
        courseDays: [0, 2],
        courseEnd: "15:45",
        courseName: "cs1334.002",
        courseStart: "14:30",
      },
    ],
    scheduleName: "Schedule 2",
  },
  {
    courses: [
      {
        courseDays: [0, 2],
        courseEnd: "11:15",
        courseName: "cs2340.003",
        courseStart: "10:00",
      },
      {
        courseDays: [0, 2],
        courseEnd: "13:50",
        courseName: "cs1200.001",
        courseStart: "13:00",
      },
      {
        courseDays: [0, 2],
        courseEnd: "12:30",
        courseName: "cs3162.092",
        courseStart: "11:30",
      },
      {
        courseDays: [0, 2],
        courseEnd: "15:45",
        courseName: "cs1334.002",
        courseStart: "14:30",
      },
    ],
    scheduleName: "Schedule 3",
  },
  {
    courses: [
      {
        courseDays: [0, 2],
        courseEnd: "11:15",
        courseName: "cs2340.003",
        courseStart: "10:00",
      },
      {
        courseDays: [1, 3],
        courseEnd: "13:50",
        courseName: "cs1200.hon",
        courseStart: "13:00",
      },
      {
        courseDays: [0, 2],
        courseEnd: "12:30",
        courseName: "cs3162.092",
        courseStart: "11:30",
      },
      {
        courseDays: [0, 2],
        courseEnd: "15:45",
        courseName: "cs1334.002",
        courseStart: "14:30",
      },
    ],
    scheduleName: "Schedule 4",
  },
  {
    courses: [
      {
        courseDays: [1, 3],
        courseEnd: "12:45",
        courseName: "cs2340.002",
        courseStart: "11:30",
      },
      {
        courseDays: [0, 2],
        courseEnd: "13:50",
        courseName: "cs1200.001",
        courseStart: "13:00",
      },
      {
        courseDays: [0, 2],
        courseEnd: "10:50",
        courseName: "cs3162.053",
        courseStart: "10:00",
      },
      {
        courseDays: [0, 2],
        courseEnd: "15:45",
        courseName: "cs1334.002",
        courseStart: "14:30",
      },
    ],
    scheduleName: "Schedule 5",
  },
];
