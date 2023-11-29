"use client";
import { FunctionComponent, useState } from "react";

type Props = {
  bulkUpdateCourses: Function;
  forward: Function;
  back: Function;
};

const AddCourseForm: FunctionComponent<Props> = ({
  bulkUpdateCourses,
  forward,
  back,
}) => {
  const [localCoursesCpy, setLocalCoursesCpy] = useState<any>([]);
  const [searchQ, setSearchQ] = useState<string>("");
  const [searchR, setSearchR] = useState<Array<any>>([]);

  const runSearch = () => {
    fetch(`http://localhost:8080/class/${searchQ}/coursenumber`)
      .then((res) => res.json())
      .then((data) => {
        let seen = new Set();
        let tmp = [];
        for (let i = 0; i < data.length; i++) {
          if (seen.has(`${data[i].course_prefix}-${data[i].course_number}`))
            continue;

          seen.add(`${data[i].course_prefix}-${data[i].course_number}`);
          tmp.push(data[i]);
        }
        setSearchR(tmp);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleAddCourseLocal = (a: any) => {
    setLocalCoursesCpy([...localCoursesCpy, a]);
  };

  const handleRemoveCourseLocal = (num: string, prefix: string) => {
    setLocalCoursesCpy(
      localCoursesCpy.filter((a: any) => {
        if (a.courseNumber === num && a.prefix === prefix) {
          return false;
        } else {
          return true;
        }
      })
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="font-semibold text-2xl py-3">Add Courses</h1>

      <p>Search For Courses By Course Number:</p>

      <div className="flex items-center justify-center">
        <div className="flex items-center max-w-md mx-auto bg-gray-100 rounded-lg">
          <div className="w-full">
            <input
              type="search"
              className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none bg-gray-100"
              placeholder="search"
              onChange={(e) => {
                setSearchQ(e.currentTarget.value);
              }}
            />
          </div>
          <div>
            <button
              onClick={() => {
                runSearch();
              }}
              className="flex items-center bg-utdorange justify-center w-12 h-12 text-white rounded-r-lg"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="w-1/2">
        <h2>Search Results:</h2>
        <ul className="px-2 py-1 bg-gray-200 overflow-y-auto max-h-40 border-2 border-gray-300 rounded">
          {searchR.length > 0 ? (
            searchR.map((item: any) => (
              <CourseItem
                prefix={item.course_prefix}
                courseName={item.title}
                courseNumber={item.course_number}
                actions={{
                  addAction: handleAddCourseLocal,
                }}
              />
            ))
          ) : (
            <p className="w-full text-center text-gray-400">
              No results to show!
            </p>
          )}
        </ul>
      </div>

      {localCoursesCpy.length > 0 && (
        <>
          <h2 className="text-center border-b-2 border-black leading-[0.1em] mx-0 mt-[10px] mb-[20px] w-1/3">
            <span className="bg-white py-0 px-[10px]">Selected Courses</span>
          </h2>

          <div className="w-1/2">
            <ul className="px-2 py-1 bg-gray-200 overflow-y-auto max-h-40 border-2 border-gray-300 rounded">
              {localCoursesCpy.map((item: any) => (
                <CourseItem
                  courseName={item.courseName}
                  courseNumber={item.courseNumber}
                  prefix={item.prefix}
                  actions={{
                    removeAction: handleRemoveCourseLocal,
                  }}
                />
              ))}
            </ul>
          </div>
        </>
      )}

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
            bulkUpdateCourses(
              localCoursesCpy.map((item: any) => {
                let obj: any = {};
                obj[item.courseNumber] = null;
                return obj;
              })
            );
            forward();
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AddCourseForm;

type Props2 = {
  prefix: string;
  courseName: string;
  courseNumber: string;
  actions?: {
    addAction?: Function;
    removeAction?: Function;
  };
};
const CourseItem: FunctionComponent<Props2> = ({
  prefix,
  courseName,
  courseNumber,
  actions,
}) => {
  return (
    <li className="border-2 px-2 py-2 rounded-lg flex justify-between items-center bg-white">
      <div className="flex flex-col">
        <p>
          <strong>
            <span>{prefix}</span>
            {courseNumber}
          </strong>
        </p>
        <p>{courseName}</p>
      </div>
      <div className="flex">
        {actions?.addAction ? (
          <button
            onClick={() => {
              if (actions.addAction) {
                actions.addAction({
                  prefix: prefix,
                  courseName: courseName,
                  courseNumber: courseNumber,
                });
              }
            }}
            className="bg-green-200 py-1 px-2 rounded-xl"
          >
            Add
          </button>
        ) : null}
        {actions?.removeAction ? (
          <button
            onClick={() => {
              if (actions.removeAction) {
                actions?.removeAction(courseNumber, prefix);
              }
            }}
            className="bg-red-200 py-1 px-2 rounded-xl"
          >
            Remove
          </button>
        ) : null}
      </div>
    </li>
  );
};
