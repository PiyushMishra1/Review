import React from "react";
import { FilteringForm } from "./FilteringForm";
import { formConfig } from "./formConfig";
import ThankYouMessage from "./elements/ThankYouMessage";

export const StepContent = ({ step, formData, onChange }) => {
  const stepConfig = formConfig[`step${step}`];

  if (!stepConfig) {
    return (
      <div>
        <ThankYouMessage />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {stepConfig.map((config) => (
        <FilteringForm
          key={config.name}
          config={config}
          value={formData[config.name]}
          onChange={onChange}
        />
      ))}
    </div>
  );
};
