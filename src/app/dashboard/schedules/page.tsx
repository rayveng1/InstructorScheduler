"use client";
import React, { useState } from "react";
import PrefsWorkflow from "./_components/PrefsWorkflow";
import ViewSched from "./_components/ViewSched";

export default function SchedulesPage() {
  const [selectedPage, setSelectedPage] = useState<number>(0);

  return (
    <div className="p-4 h-full overflow-y-scroll relative">
      <ul className="bg-white border-2 rounded-full w-max flex items-center mx-auto mb-4">
        <li
          className={
            selectedPage === 0
              ? "pl-4 border-r-2 pr-2 py-2 rounded-l-full bg-utdorange/10 hover:bg-utdorange/20 cursor-pointer duration-100"
              : "pl-4 border-r-2 pr-2 py-2 rounded-l-full hover:bg-gray-100 cursor-pointer duration-100"
          }
          onClick={() => {
            setSelectedPage(0);
          }}
        >
          Preferences
        </li>
        <li
          className={
            selectedPage === 1
              ? "pr-4 pl-2 py-2 rounded-r-full bg-utdorange/10 hover:bg-utdorange/20 cursor-pointer duration-100"
              : "pr-4 pl-2 py-2 rounded-r-full hover:bg-gray-100 cursor-pointer duration-100"
          }
          onClick={() => {
            setSelectedPage(1);
          }}
        >
          Schedules
        </li>
      </ul>

      {selectedPage === 0 ? (
        <PrefsWorkflow complete={() => setSelectedPage(1)}></PrefsWorkflow>
      ) : (
        <ViewSched />
      )}
    </div>
  );
}
