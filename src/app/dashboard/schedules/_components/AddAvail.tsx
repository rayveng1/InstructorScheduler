"use client";
import generateUUID from "@/app/util/uuid";
import { FunctionComponent, useState } from "react";

type Props = {
  bulkUpdateAvail: Function;
  forward: Function;
  back: Function;
};
const AddAvail: FunctionComponent<Props> = ({
  bulkUpdateAvail,
  forward,
  back,
}) => {
  const [mon, setMon] = useState<Array<{ id: string; time: Array<string> }>>(
    []
  );
  const [tue, setTue] = useState<Array<{ id: string; time: Array<string> }>>(
    []
  );
  const [wed, setWed] = useState<Array<{ id: string; time: Array<string> }>>(
    []
  );
  const [thu, setThu] = useState<Array<{ id: string; time: Array<string> }>>(
    []
  );
  const [fri, setFri] = useState<Array<{ id: string; time: Array<string> }>>(
    []
  );

  const addAvailRow = (day: number) => {
    switch (day) {
      case 0: // mon
        setMon([...mon, { id: generateUUID(), time: ["12:00", "12:00"] }]);
        break;
      case 1:
        setTue([...tue, { id: generateUUID(), time: ["12:00", "12:00"] }]);
        break;
      case 2:
        setWed([...wed, { id: generateUUID(), time: ["12:00", "12:00"] }]);
        break;
      case 3:
        setThu([...thu, { id: generateUUID(), time: ["12:00", "12:00"] }]);
        break;
      case 4:
        setFri([...fri, { id: generateUUID(), time: ["12:00", "12:00"] }]);
        break;
    }
  };

  const updateAvailRow = (
    day: number,
    id: string,
    updatedRow: Array<string>
  ) => {
    switch (day) {
      case 0: // mon
        setMon(
          mon.map((item: { id: string; time: string[] }) => {
            if (id === item.id) {
              return {
                id: item.id,
                time: updatedRow,
              };
            } else {
              return item;
            }
          })
        );
        break;
      case 1:
        setTue(
          tue.map((item: { id: string; time: string[] }) => {
            if (id === item.id) {
              return {
                id: item.id,
                time: updatedRow,
              };
            } else {
              return item;
            }
          })
        );
        break;
      case 2:
        setWed(
          wed.map((item: { id: string; time: string[] }) => {
            if (id === item.id) {
              return {
                id: item.id,
                time: updatedRow,
              };
            } else {
              return item;
            }
          })
        );
        break;
      case 3:
        setThu(
          thu.map((item: { id: string; time: string[] }) => {
            if (id === item.id) {
              return {
                id: item.id,
                time: updatedRow,
              };
            } else {
              return item;
            }
          })
        );
        break;
      case 4:
        setFri(
          fri.map((item: { id: string; time: string[] }) => {
            if (id === item.id) {
              return {
                id: item.id,
                time: updatedRow,
              };
            } else {
              return item;
            }
          })
        );
        break;
    }
  };

  const removeAvailRow = (day: number, id: string) => {
    switch (day) {
      case 0: // mon
        setMon(
          mon.filter((a: { id: string; time: string[] }) => {
            if (id === a.id) {
              return false;
            }
            return true;
          })
        );
        break;
      case 1:
        setTue(
          tue.filter((a: { id: string; time: string[] }) => {
            if (id === a.id) {
              return false;
            }
            return true;
          })
        );
        break;
      case 2:
        setWed(
          wed.filter((a: { id: string; time: string[] }) => {
            if (id === a.id) {
              return false;
            }
            return true;
          })
        );
        break;
      case 3:
        setThu(
          thu.filter((a: { id: string; time: string[] }) => {
            if (id === a.id) {
              return false;
            }
            return true;
          })
        );
        break;
      case 4:
        setFri(
          fri.filter((a: { id: string; time: string[] }) => {
            if (id === a.id) {
              return false;
            }
            return true;
          })
        );
        break;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="font-semibold text-2xl py-3">Add Availability</h1>

      <div className="flex flex-col gap-y-4 w-1/2 mx-auto max-h-[500px] overflow-y-auto">
        {/* MONDAY */}
        <div className="w-full py-1 px-2">
          <h2 className="font-bold">Monday</h2>
          <ul className="bg-gray-200 rounded">
            {mon.map(
              (item: { id: string; time: Array<string> }, index: number) => {
                return (
                  <li
                    className="flex items-center py-2 border-b-2 border-gray-400 justify-between px-4"
                    key={item.id}
                  >
                    <p className="font-semibold">Block {index + 1}</p>
                    <div className="flex">
                      <p className="text-gray-500">Start:</p>
                      <input
                        type="time"
                        defaultValue={item.time[0]}
                        className="rounded bg-gray-200"
                        onChange={(e) => {
                          updateAvailRow(0, item.id, [
                            e.currentTarget.value,
                            item.time[1],
                          ]);
                        }}
                      ></input>
                    </div>

                    <div className="flex">
                      <p className="text-gray-500">End:</p>
                      <input
                        type="time"
                        defaultValue={item.time[1]}
                        className="rounded bg-gray-200"
                        onChange={(e) => {
                          updateAvailRow(0, item.id, [
                            item.time[0],
                            e.currentTarget.value,
                          ]);
                        }}
                      ></input>
                    </div>

                    <button
                      onClick={() => {
                        removeAvailRow(0, item.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </li>
                );
              }
            )}
            <li className="flex items-center justify-center py-2">
              <button
                onClick={() => {
                  addAvailRow(0);
                }}
                className="w-full"
              >
                Add Block
              </button>
            </li>
          </ul>
        </div>

        {/* TUESDAY */}
        <div className="w-full py-1 px-2">
          <h2 className="font-bold">Tuesday</h2>
          <ul className="bg-gray-200 rounded">
            {tue.map(
              (item: { id: string; time: Array<string> }, index: number) => {
                return (
                  <li
                    className="flex items-center py-2 border-b-2 border-gray-400 justify-between px-4"
                    key={item.id}
                  >
                    <p className="font-semibold">Block {index + 1}</p>
                    <div className="flex">
                      <p className="text-gray-500">Start:</p>
                      <input
                        type="time"
                        defaultValue={item.time[0]}
                        className="rounded bg-gray-200"
                        onChange={(e) => {
                          updateAvailRow(1, item.id, [
                            e.currentTarget.value,
                            item.time[1],
                          ]);
                        }}
                      ></input>
                    </div>

                    <div className="flex">
                      <p className="text-gray-500">End:</p>
                      <input
                        type="time"
                        defaultValue={item.time[1]}
                        className="rounded bg-gray-200"
                        onChange={(e) => {
                          updateAvailRow(1, item.id, [
                            item.time[0],
                            e.currentTarget.value,
                          ]);
                        }}
                      ></input>
                    </div>

                    <button
                      onClick={() => {
                        removeAvailRow(1, item.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </li>
                );
              }
            )}
            <li className="flex items-center justify-center py-2">
              <button
                onClick={() => {
                  addAvailRow(1);
                }}
                className="w-full"
              >
                Add Block
              </button>
            </li>
          </ul>
        </div>

        {/* WEDNESDAY */}
        <div className="w-full py-1 px-2">
          <h2 className="font-bold">Wednesday</h2>
          <ul className="bg-gray-200 rounded">
            {wed.map(
              (item: { id: string; time: Array<string> }, index: number) => {
                return (
                  <li
                    className="flex items-center py-2 border-b-2 border-gray-400 justify-between px-4"
                    key={item.id}
                  >
                    <p className="font-semibold">Block {index + 1}</p>
                    <div className="flex">
                      <p className="text-gray-500">Start:</p>
                      <input
                        type="time"
                        defaultValue={item.time[0]}
                        className="rounded bg-gray-200"
                        onChange={(e) => {
                          updateAvailRow(2, item.id, [
                            e.currentTarget.value,
                            item.time[1],
                          ]);
                        }}
                      ></input>
                    </div>

                    <div className="flex">
                      <p className="text-gray-500">End:</p>
                      <input
                        type="time"
                        defaultValue={item.time[1]}
                        className="rounded bg-gray-200"
                        onChange={(e) => {
                          updateAvailRow(2, item.id, [
                            item.time[0],
                            e.currentTarget.value,
                          ]);
                        }}
                      ></input>
                    </div>

                    <button
                      onClick={() => {
                        removeAvailRow(2, item.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </li>
                );
              }
            )}
            <li className="flex items-center justify-center py-2">
              <button
                onClick={() => {
                  addAvailRow(2);
                }}
                className="w-full"
              >
                Add Block
              </button>
            </li>
          </ul>
        </div>

        {/* THURSDAY */}
        <div className="w-full py-1 px-2">
          <h2 className="font-bold">Thursday</h2>
          <ul className="bg-gray-200 rounded">
            {thu.map(
              (item: { id: string; time: Array<string> }, index: number) => {
                return (
                  <li
                    className="flex items-center py-2 border-b-2 border-gray-400 justify-between px-4"
                    key={item.id}
                  >
                    <p className="font-semibold">Block {index + 1}</p>
                    <div className="flex">
                      <p className="text-gray-500">Start:</p>
                      <input
                        type="time"
                        defaultValue={item.time[0]}
                        className="rounded bg-gray-200"
                        onChange={(e) => {
                          updateAvailRow(3, item.id, [
                            e.currentTarget.value,
                            item.time[1],
                          ]);
                        }}
                      ></input>
                    </div>

                    <div className="flex">
                      <p className="text-gray-500">End:</p>
                      <input
                        type="time"
                        defaultValue={item.time[1]}
                        className="rounded bg-gray-200"
                        onChange={(e) => {
                          updateAvailRow(3, item.id, [
                            item.time[0],
                            e.currentTarget.value,
                          ]);
                        }}
                      ></input>
                    </div>

                    <button
                      onClick={() => {
                        removeAvailRow(3, item.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </li>
                );
              }
            )}
            <li className="flex items-center justify-center py-2">
              <button
                onClick={() => {
                  addAvailRow(3);
                }}
                className="w-full"
              >
                Add Block
              </button>
            </li>
          </ul>
        </div>

        {/* FRIDAY */}
        <div className="w-full py-1 px-2">
          <h2 className="font-bold">Friday</h2>
          <ul className="bg-gray-200 rounded">
            {fri.map(
              (item: { id: string; time: Array<string> }, index: number) => {
                return (
                  <li
                    className="flex items-center py-2 border-b-2 border-gray-400 justify-between px-4"
                    key={item.id}
                  >
                    <p className="font-semibold">Block {index + 1}</p>
                    <div className="flex">
                      <p className="text-gray-500">Start:</p>
                      <input
                        type="time"
                        defaultValue={item.time[0]}
                        className="rounded bg-gray-200"
                        onChange={(e) => {
                          updateAvailRow(4, item.id, [
                            e.currentTarget.value,
                            item.time[1],
                          ]);
                        }}
                      ></input>
                    </div>

                    <div className="flex">
                      <p className="text-gray-500">End:</p>
                      <input
                        type="time"
                        defaultValue={item.time[1]}
                        className="rounded bg-gray-200"
                        onChange={(e) => {
                          updateAvailRow(4, item.id, [
                            item.time[0],
                            e.currentTarget.value,
                          ]);
                        }}
                      ></input>
                    </div>

                    <button
                      onClick={() => {
                        removeAvailRow(4, item.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-red-500"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </li>
                );
              }
            )}
            <li className="flex items-center justify-center py-2">
              <button
                onClick={() => {
                  addAvailRow(4);
                }}
                className="w-full"
              >
                Add Block
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex gap-x-2 items-center py-3">
        <button
          className="bg-gray-200 px-3 py-1 rounded"
          onClick={() => {
            back();
          }}
        >
          Back
        </button>
        <button
          className="bg-utdgreen px-3 py-1 rounded text-white"
          onClick={() => {
            const all: any = {};

            if (mon.length > 0) {
              all.Monday = mon.map((item) => {
                return item.time;
              });
            }
            if (tue.length > 0) {
              all.Tuesday = tue.map((item) => {
                return item.time;
              });
            }
            if (wed.length > 0) {
              all.Wednesday = wed.map((item) => {
                return item.time;
              });
            }
            if (thu.length > 0) {
              all.Thursday = thu.map((item) => {
                return item.time;
              });
            }
            if (fri.length > 0) {
              all.Friday = fri.map((item) => {
                return item.time;
              });
            }

            console.log(all);

            bulkUpdateAvail(all);

            forward();
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AddAvail;
