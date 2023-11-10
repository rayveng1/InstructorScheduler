"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import React, { useState } from "react";

export default function SchedulesPage() {
  //   const ref1 = useRef(null);
  //   const ref2 = useRef(null);

  const generateGridRows = () => {
    let res = [];
    for (let i = 0; i < 57; i++) {
      res.push(
        <div className="border-b-2 font-mono col-span-full row-span-1 text-slate-800">
          {(Math.floor((15 * i) / 60) + 7).toString().padStart(2, "0")}:
          {((15 * i) % 60).toString().padStart(2, "0")}
        </div>
      );
    }
    return res;
  };

  //   useEffect(() => {
  //     (ref2.current as any).style.height = `${
  //       (ref1.current as any).scrollHeight
  //     }px`;
  //   }, []);

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
            <li className="border-l-4 border-utdorange bg-utdorange/20 m-4 p-2 cursor-pointer relative h-15 focus:outline-none dark:hover:bg-gray-600 dark:hover:border-gray-800 pr-6">
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
            </li>
          </ul>
        </div>
        <div className="basis-2/3 bg-slate-100 rounded-r-lg overflow-y-scroll relative">
          <div className="grid grid-cols-1 grid-rows-57 px-4">
            {generateGridRows()}
          </div>
          <div className="absolute w-full top-0 left-0 pl-20 pr-4 grid grid-cols-1 grid-rows-57">
            <div className="col-span-full bg-red-200/50 row-span-5 row-start-3 p-1 hover:bg-red-200/80">
              <p className="text-slate-800">CS 4000.001</p>
            </div>

            <div className="col-span-full bg-blue-200/50 row-span-5 row-start-[11] p-1 hover:bg-blue-200/80">
              <p className="text-slate-800">CS 4000.002</p>
            </div>

            <div className="col-span-full bg-green-200/50 row-span-5 row-start-[31] p-1 hover:bg-green-200/80">
              <p className="text-slate-800">CS 4000.002</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
