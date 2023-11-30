"use client";
import { FunctionComponent, useEffect, useState } from "react";

type Props = {
  forward: Function;
  back: Function;
  bulkUpdateCourses: Function;
  courses: Object;
};
const AddWeights: FunctionComponent<Props> = ({
  forward,
  back,
  bulkUpdateCourses,
  courses,
}) => {
  const [weights, setWeights] = useState<Array<number>>();

  useEffect(() => {
    const init = [];
    for (let i = 0; i < Object.keys(courses).length; i++) {
      init.push(5);
    }
    setWeights(init);
  }, [courses]);

  const updateWeights = (i: number, v: number) => {
    setWeights(
      weights?.map((item: number, index: number) => {
        if (index === i) {
          return v;
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h1 className="font-semibold text-2xl py-3">Add Weights</h1>

      <ul className="w-1/2 mx-auto flex flex-col gap-y-2 max-h-80 overflow-y-auto">
        {Object.keys(courses).map((item: string, index: number) => (
          <li className="border-2 border-gray-100 shadow rounded flex flex-col items-center py-3">
            <p className="w-full text-center">CS&nbsp;{item}</p>
            <div className="flex items-center">
              <p>Not Interested</p>
              <input
                type="range"
                min={1}
                max={10}
                className="mx-3"
                onChange={(e) => {
                  updateWeights(index, parseInt(e.currentTarget.value));
                }}
              />
              <p>Highly Interested</p>
            </div>
          </li>
        ))}
      </ul>

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
            if (weights) {
              let obj: any = {};

              Object.keys(courses).map((item: string, index) => {
                const k = item;
                obj[k] = weights[index];
                console.log(obj, weights[index]);
              });

              bulkUpdateCourses(obj);
              forward();
            }
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AddWeights;
