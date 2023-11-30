"use client";
import { FunctionComponent, useState } from "react";
import Breadcrumb from "./Breadcrumb";
import AddCourseForm from "./AddCourseForm";
import AddAvail from "./AddAvail";
import AddWeights from "./AddWeights";

type Props = {
  complete: Function;
};

const PrefsWorkflow: FunctionComponent<Props> = ({ complete }) => {
  const [step, setStep] = useState<number>(0);
  const [selectedCourses, setSelectedCourses] = useState<any>();
  const [selectedTimes, setSelectedTimes] = useState<any>();

  const handleSetCourses = (c: any) => {
    setSelectedCourses(c);
  };

  const handleAddSelectedTime = (t: any) => {
    setSelectedTimes(t);
  };

  const handleBack = () => {
    if (step - 1 >= 0) setStep(step - 1);
  };

  const handleAdvance = () => {
    if (step + 1 <= 3) setStep(step + 1);
  };

  const handleSubmitAction = () => {
    fetch("http://localhost:8080/api/professor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        professors: [
          {
            name: "Dongji Yang",
            availability: selectedTimes,
            preferences: {
              ...selectedCourses,
            },
          },
        ],
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Professor data received successfully") {
          complete();
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getStep = () => {
    switch (step) {
      case 0:
        return (
          <AddCourseForm
            forward={handleAdvance}
            back={handleBack}
            bulkUpdateCourses={handleSetCourses}
          ></AddCourseForm>
        );
      case 1:
        return (
          <AddAvail
            bulkUpdateAvail={handleAddSelectedTime}
            back={handleBack}
            forward={handleAdvance}
          ></AddAvail>
        );
      case 2:
        return (
          <AddWeights
            forward={handleAdvance}
            back={handleBack}
            bulkUpdateCourses={handleSetCourses}
            courses={selectedCourses}
          ></AddWeights>
        );
      case 3:
        return (
          <div className="w-full h-full flex items-center justify-center py-7">
            <button
              className="bg-utdorange w-max px-4 py-2 mx-auto rounded"
              onClick={handleSubmitAction}
            >
              Generate Schedule
            </button>
          </div>
        );
    }
  };

  return (
    <section className="dark:bg-slate-800 bg-white rounded-r-lg md:w-5/6 mx-auto rounded-lg h-2/3 m-4 flex flex-col items-center">
      <div className="w-max pt-4">
        <Breadcrumb progress={step as 0 | 1 | 2}></Breadcrumb>
      </div>

      <section className="w-full">{getStep()}</section>

      {/* debugging */}
      <small>
        {JSON.stringify(selectedCourses)} {JSON.stringify(selectedTimes)}
      </small>
    </section>
  );
};

export default PrefsWorkflow;
