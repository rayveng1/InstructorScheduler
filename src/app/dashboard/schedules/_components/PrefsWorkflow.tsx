"use client";
import { FunctionComponent, useState } from "react";
import Breadcrumb from "./Breadcrumb";
import AddCourseForm from "./AddCourseForm";
import AddAvail from "./AddAvail";
import AddWeights from "./AddWeights";

const PrefsWorkflow: FunctionComponent = () => {
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
    if (step + 1 <= 2) setStep(step + 1);
    if (step === 2) {
      handleSubmitAction();
    }
  };

  const handleSubmitAction = () => {
    fetch(`TODO`);
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
