import React, { useState } from "react";
import { StepContent } from "./StepContent";

export const StepsFlow = () => {
  const maxSteps = 6;
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < maxSteps) setCurrentStep((prev) => prev + 1);
    console.log(formData);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  return (
    <div className="space-y-6">
      <StepContent
        step={currentStep}
        formData={formData}
        onChange={handleChange}
      />
      <div className="flex justify-between">
        <button
          onClick={handleBack}
          disabled={currentStep === 1}
          className="flex items-center px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={currentStep === maxSteps}
          className="flex items-center px-4 py-2 bg-blue-500 text-black rounded disabled:opacity-50"
        >
          {currentStep === maxSteps ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};
