"use client";
import { useEffect, useRef } from "react";

export default function SchedulesPage() {
  //   const ref1 = useRef(null);
  //   const ref2 = useRef(null);

  const generateGridRows = () => {
    let res = [];
    for (let i = 0; i < 57; i++) {
      res.push(
        <div className="border-b-2 font-mono col-span-full row-span-1">
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
    <div className="p-4 h-full">
      <div className="flex flex-row w-5/6 mx-auto h-5/6 rounded-lg shadow-xl">
        <div className="basis-1/3 w-1/3 bg-blue-200 rounded-l-lg bg-white">
          <h1 className="px-3 py-3 text-2xl font-semibold">
            Generated Schedules
          </h1>
          <ul>
            <li className="border-2 m-4 rounded p-2 cursor-pointer">
              <h1 className="font-bold">Schedule A</h1>
              <p className="text-ellipsis overflow-hidden whitespace-nowrap">
                4000-CS-001, 4000-CS-002, 4000-CS-003, 4000-CS-004 4000-CS-001,
                4000-CS-002, 4000-CS-003, 4000-CS-004
              </p>
            </li>
          </ul>
        </div>
        <div className="basis-2/3 bg-slate-100 rounded-r-lg overflow-y-scroll relative">
          <div className="grid grid-cols-1 grid-rows-57 px-4">
            {generateGridRows()}
          </div>
          <div className="absolute w-full top-0 left-0 pl-20 grid grid-cols-1 grid-rows-57">
            <div className="col-span-full bg-red-200/50 row-span-5 row-start-3 p-1 hover:bg-red-200/80">
              <p className="">CS 4000.001</p>
            </div>

            <div className="col-span-full bg-blue-200/50 row-span-5 row-start-[11] p-1 hover:bg-blue-200/80">
              <p className="">CS 4000.002</p>
            </div>

            <div className="col-span-full bg-green-200/50 row-span-5 row-start-[31] p-1 hover:bg-green-200/80">
              <p className="">CS 4000.002</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
