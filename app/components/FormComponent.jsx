import React from "react";
import { Checkbox } from "./elements/Checkbox";
import { Chiklets } from "./elements/Chiklets";
import { Radio } from "./elements/Radio";
import { Textbox } from "./elements/Textbox";
import { TextboxWithAudio } from "./elements/TextboxWithAudio";
import { Dropdown } from "./elements/Dropdown";
export const FormComponent = ({ config, value, onChange }) => {
  switch (config.type) {
    case "checkbox":
      return <Checkbox config={config} value={value} onChange={onChange} />;
    case "chiklets":
      return <Chiklets config={config} value={value} onChange={onChange} />;
    case "radio":
      return <Radio config={config} value={value} onChange={onChange} />;
    case "dropdown":
      return <Dropdown config={config} value={value} onChange={onChange} />;
    case "textbox":
      return <Textbox config={config} value={value} onChange={onChange} />;
    case "textboxWithAudio":
      return (
        <TextboxWithAudio config={config} value={value} onChange={onChange} />
      );
    default:
      return null;
  }
};
