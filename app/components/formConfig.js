export const formConfig = {
  step1: [
    {
      type: "checkbox",
      label: "select the values",
      name: "option1",
      options: [
        { id: "1", label: "car", value: "car" },
        { id: "2", label: "truck", value: "truck" },
      ],
    },
    {
      type: "dropdown",
      label: "Select an option",
      name: "dropdown1",
      options: ["A", "B", "C"],
    },
  ],
  step2: [
    { type: "textbox", label: "Enter text", name: "textbox1" },
    {
      type: "radio",
      label: "Choose an option",
      name: "radio1",
      options: ["Yes", "No"],
    },
  ],
  step3: [
    { type: "textboxWithAudio", label: "Speak or type", name: "audioText1" },
  ],
  step4: [
    {
      type: "chiklets",
      label: "Select tags",
      name: "tags1",
      options: ["Tag1", "Tag2", "Tag3"],
      multiple: true,
    },
  ],
  step5: [
    {
      type: "checkbox",
      label: "Option 1",
      name: "option1",
      options: [
        { id: "1", label: "smiles", value: "smiles" },
        { id: "2", label: "angry", value: "angry" },
      ],
    },
  ],
};
