import React from "react";
import { FormComponent } from "./FormComponent";

export const FilteringForm = ({ config, value, onChange }) => {
  return <FormComponent config={config} value={value} onChange={onChange} />;
};
