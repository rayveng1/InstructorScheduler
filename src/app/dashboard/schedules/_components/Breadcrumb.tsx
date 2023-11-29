import { FunctionComponent } from "react";

type Props = {
  progress: 0 | 1 | 2; // the step you are currently on
};

const Breadcrumb: FunctionComponent<Props> = ({ progress }) => {
  const getProgressBasedStyle = (
    b: "PASSED" | "CURRENT" | "FUTURE",
    opts: {
      isCircle: boolean;
    }
  ) => {
    if (opts.isCircle) {
      switch (b) {
        case "PASSED":
          return "h-6 w-6 bg-green-300 rounded-full";
        case "CURRENT":
          return "h-6 w-6 bg-gray-300 animate-pulse rounded-full";
        case "FUTURE":
          return "h-6 w-6 bg-gray-300 rounded-full";
      }
    } else {
      switch (b) {
        case "CURRENT":
          return "h-2.5 w-28 bg-green-300 rounded-full";
        case "PASSED":
          return "h-2.5 w-28 bg-green-300 rounded-full";
        case "FUTURE":
          return "h-2.5 w-28 bg-gray-300 rounded-full";
      }
    }
  };
  return (
    <section className="flex items-center gap-x-3">
      <div
        className={getProgressBasedStyle(
          progress === 0 ? "CURRENT" : progress >= 0 ? "PASSED" : "FUTURE",
          {
            isCircle: true,
          }
        )}
      ></div>

      <div
        className={getProgressBasedStyle(progress >= 1 ? "PASSED" : "FUTURE", {
          isCircle: false,
        })}
      ></div>

      <div
        className={getProgressBasedStyle(
          progress === 1 ? "CURRENT" : progress >= 1 ? "PASSED" : "FUTURE",
          { isCircle: true }
        )}
      ></div>

      <div
        className={getProgressBasedStyle(progress >= 2 ? "PASSED" : "FUTURE", {
          isCircle: false,
        })}
      ></div>

      <div
        className={getProgressBasedStyle(
          progress === 2 ? "CURRENT" : progress >= 2 ? "PASSED" : "FUTURE",
          { isCircle: true }
        )}
      ></div>
    </section>
  );
};

export default Breadcrumb;
