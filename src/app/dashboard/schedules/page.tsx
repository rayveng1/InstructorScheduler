"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import React, { useState } from "react";
import { Course, Schedule, dummy_schedule_data } from "./_static/dummy_data";
import { timeDifference } from "./_util/time";
import { getRandomInt } from "./_util/random";

export default function SchedulesPage() {
  const [isFav, setIsFav] = useState<boolean>(false);
  const [selectedSchedule, setSelectedSchedule] = useState<number>(0);

  const placeScheduleBlocks = (schedule: Schedule) => {
    const colors = [
      "bg-red-200/50",
      "bg-orange-200/50",
      "bg-amber-200/50",
      "bg-yellow-200/50",
      "bg-lime-200/50",
      "bg-green-200/50",
      "bg-emerald-200/50",
      "bg-teal-200/50",
      "bg-cyan-200/50",
      "bg-sky-200/50",
      "bg-blue-200/50",
      "bg-indigo-200/50",
      "bg-violet-200/50",
      "bg-purple-200/50",
      "bg-fuchsia-200/50",
      "bg-pink-200/50",
      "bg-rose-200/50",
    ];
    const colors_hover = [
      "hover:bg-red-200/80",
      "hover:bg-orange-200/80",
      "hover:bg-amber-200/80",
      "hover:bg-yellow-200/80",
      "hover:bg-lime-200/80",
      "hover:bg-green-200/80",
      "hover:bg-emerald-200/80",
      "hover:bg-teal-200/80",
      "hover:bg-cyan-200/80",
      "hover:bg-sky-200/80",
      "hover:bg-blue-200/80",
      "hover:bg-indigo-200/80",
      "hover:bg-violet-200/80",
      "hover:bg-purple-200/80",
      "hover:bg-fuchsia-200/80",
      "hover:bg-pink-200/80",
      "hover:bg-rose-200/80",
    ];

    let res: any = [];

    schedule.courses.map((course: Course, index) => {
      const starting_col = `col-start-${Math.min(...course.courseDays) + 1}`;
      const col_span = `col-span-${course.courseDays.length}`;

      const row_span = `row-span-${timeDifference(
        course.courseStart,
        course.courseEnd
      )}`;

      const colorindex = getRandomInt(colors.length - 1);

      res.push(
        <div
          style={{
            gridRowStart: 2 + timeDifference("7:15", course.courseStart),
          }}
          className={`${col_span} ${colors[colorindex]} ${row_span} ${starting_col} p-1 ${colors_hover[colorindex]}`}
        >
          <p className="text-slate-800">{course.courseName}</p>
        </div>
      );
    });

    return res;
  };

  const generateGridRows = () => {
    let res = [];
    for (let i = 0; i < 57; i++) {
      if (i == 0) {
        res.push(
          <>
            <div className="border-b-2  font-mono col-span-1 row-span-1 text-slate-800"></div>
            <div className="p-1 text-lg border-b-2 border-l-2 font-mono col-span-1 row-span-1 text-slate-800 font-bold">
              Mon
            </div>
            <div className="p-1 text-lg border-b-2 border-l-2 font-mono col-span-1 row-span-1 text-slate-800 font-bold">
              Tue
            </div>
            <div className="p-1 text-lg border-b-2 border-l-2 font-mono col-span-1 row-span-1 text-slate-800 font-bold">
              Wed
            </div>
            <div className="p-1 text-lg border-b-2 border-l-2 font-mono col-span-1 row-span-1 text-slate-800 font-bold">
              Thu
            </div>
            <div className="p-1 text-lg border-b-2 border-l-2 font-mono col-span-1 row-span-1 text-slate-800 font-bold">
              Fri
            </div>
          </>
        );
      } else {
        res.push(
          <>
            <div className="border-b-2 font-mono col-span-1 row-span-1 text-slate-800">
              {(Math.floor((15 * i) / 60) + 7).toString().padStart(2, "0")}:
              {((15 * i) % 60).toString().padStart(2, "0")}
            </div>
            <div className="border-b-2 border-l-2 font-mono col-span-1 row-span-1 text-slate-800"></div>
            <div className="border-b-2 border-l-2 font-mono col-span-1 row-span-1 text-slate-800"></div>
            <div className="border-b-2 border-l-2 font-mono col-span-1 row-span-1 text-slate-800"></div>
            <div className="border-b-2 border-l-2 font-mono col-span-1 row-span-1 text-slate-800"></div>
            <div className="border-b-2 border-l-2 font-mono col-span-1 row-span-1 text-slate-800"></div>
          </>
        );
      }
    }
    return res;
  };

  return (
    <div className="p-4 h-full overflow-y-scroll relative">
      <div className="bg-slate-800 rounded-r-lg md:w-5/6 mx-auto rounded-lg h-2/3 m-4 ">
        <h1 className="px-3 py-3 text-2xl font-semibold">
          Preferences
        </h1>
        <div className="flex">
          <h2 className="px-3 py-3 text-xl font-semibold">
            Courses
          </h2>
          <Link
              href="/dashboard/schedules/add/class"
              className="block w-1/6 text-blue-800 dark:text-blue-300 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-4 ml-auto">
              <span className="w-max flex mx-auto items-center justify-center gap-x-2">
                Add Class
              </span>
          </Link>
          <h2 className="px-3 py-3 text-xl font-semibold">
            Time Availability
          </h2>
          <Link
              href="/dashboard/schedules/add/time"
              className="block w-1/6 text-blue-800 dark:text-blue-300 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-4 ml-auto">
              <span className="w-max flex mx-auto items-center justify-center gap-x-2">
                Add Time/Breaks
              </span>
          </Link>
        </div>
        <div className="flex">
          <p className="px-3 py-3 text-lg">
            Add your courses here
          </p>
          <p className="px-3 py-3 text-lg mx-auto">
            Add your times/breaks here
          </p>
        </div>
        <ul className=" w-1/6 bg-utdorange/50 border-2 border-utdorange rounded-lg mx-2 py-2 hover:bg-emerald-200 hover:border-green-400 duration-300 cursor-pointer ml-auto">
          <p className="w-full text-center">
            Generate Schedule
          </p>
        </ul>
      </div>
      <div className="flex flex-row w-5/6 mx-auto h-5/6 rounded-lg shadow-xl">
        <div className="basis-1/3 w-1/3 bg-blue-200 rounded-l-lg bg-white dark:bg-slate-800">
          <h1 className="px-3 py-3 text-2xl font-semibold">
            Generated Schedules
          </h1>
          <ul>
            {dummy_schedule_data.map((schedule, index) => (
              <li
                onClick={() => {
                  setSelectedSchedule(index);
                }}
                className={
                  selectedSchedule === index
                    ? `border-l-4 border-utdorange bg-utdorange/20 m-4 p-2 cursor-pointer relative h-15 focus:outline-none dark:hover:bg-gray-600 dark:hover:border-gray-800 pr-6`
                    : `m-4 p-2 cursor-pointer relative h-15 focus:outline-none dark:hover:bg-gray-600 dark:hover:border-gray-800 pr-6`
                }
              >
                <h1 className="font-bold">{schedule.scheduleName}</h1>
                <p className="text-ellipsis overflow-hidden whitespace-nowrap">
                  {schedule.courses.map((item) => item.courseName).join(" ")}
                </p>
              </li>
            ))}
            {/* <li className="border-l-4 border-utdorange bg-utdorange/20 m-4 p-2 cursor-pointer relative h-15 focus:outline-none dark:hover:bg-gray-600 dark:hover:border-gray-800 pr-6">
              <h1 className="font-bold">Schedule 1</h1>
              <p className="text-ellipsis overflow-hidden whitespace-nowrap">
                4000-CS-001, 4000-CS-002, 4000-CS-003, 4000-CS-004 4000-CS-001,
                4000-CS-002, 4000-CS-003, 4000-CS-004
              </p>
            </li>
            <li className="m-4 p-2 cursor-pointer relative h-15 focus:outline-none dark:hover:bg-gray-600 dark:hover:border-gray-800 pr-6 hover:bg-utdorange/20">
              <h1 className="font-bold">Schedule 2</h1>
              <p className="text-ellipsis overflow-hidden whitespace-nowrap">
                4000-CS-001, 4000-CS-002, 4000-CS-003, 4000-CS-004 4000-CS-001,
                4000-CS-002, 4000-CS-002, 4000-CS-004
              </p>
            </li>
            <li className="m-4 p-2 cursor-pointer relative h-15 focus:outline-none dark:hover:bg-gray-600 dark:hover:border-gray-800 pr-6 hover:bg-utdorange/20">
              <h1 className="font-bold">Schedule 3</h1>
              <p className="text-ellipsis overflow-hidden whitespace-nowrap">
                4000-CS-001, 4000-CS-002, 4000-CS-003, 4000-CS-004 4000-CS-001,
                4000-CS-002, 4000-CS-003, 4000-CS-003
              </p>
            </li> */}
          </ul>
        </div>
        <div className="basis-2/3 bg-slate-100 rounded-r-lg overflow-y-auto relative min-w-[800px]">
          <div className="grid grid-cols-1 grid-rows-57 grid-cols-week px-4">
            {generateGridRows()}
          </div>
          <div className="absolute w-full top-0 left-0 pl-[118px] pr-4 grid grid-cols-5 grid-rows-57">
            {/* <div className="col-span-3 bg-red-200/50 row-span-5 col-start-1 row-start-2 p-1 hover:bg-red-200/80">
              <p className="text-slate-800">CS 4000.001</p>
            </div>

            <div className="col-span-1 bg-blue-200/50 row-span-5 col-start-1 row-start-[11] p-1 hover:bg-blue-200/80">
              <p className="text-slate-800">CS 4000.002</p>
            </div>

            <div className="col-span-1 bg-green-200/50 row-span-5 row-start-[31] p-1 hover:bg-green-200/80">
              <p className="text-slate-800">CS 4000.002</p>
            </div>

            <div className="col-span-1 bg-purple-200/50 row-span-5 col-start-2 row-start-[20] p-1 hover:bg-purple-200/80">
              <p className="text-slate-800">CS 4000.002</p>
            </div>

            <div className="col-span-3 bg-orange-200/50 row-span-5 col-start-3 row-start-[16] p-1 hover:bg-orange-200/80">
              <p className="text-slate-800">CS 4000.002</p>
            </div>

            <div className="col-span-1 bg-yellow-200/50 row-span-5 col-start-5 row-start-[24] p-1 hover:bg-yellow-200/80">
              <p className="text-slate-800">CS 4000.002</p>
            </div> */}
            {placeScheduleBlocks(dummy_schedule_data[selectedSchedule])}
          </div>

          <div
            onClick={() => setIsFav(!isFav)}
            className="shadow rounded-full bg-white z-100 p-3 sticky left-2 bottom-2 w-max"
          >
            {isFav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 fill-pink-400"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-pink-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
