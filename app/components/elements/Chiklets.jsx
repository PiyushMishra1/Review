import React, { useState, useEffect } from "react";

export const Chiklets = ({ config, value, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState(value || []);

  useEffect(() => {
    // Sync the internal state with the prop value if it changes externally
    setSelectedOptions(value || []);
  }, [value]);

  const handleOptionClick = (option) => {
    let updatedOptions;
    if (selectedOptions.includes(option)) {
      updatedOptions = selectedOptions.filter((item) => item !== option);
    } else {
      updatedOptions = [...selectedOptions, option];
    }
    setSelectedOptions(updatedOptions);
    onChange(config.name, updatedOptions);
  };

  return (
    <div>
      <label className="text-black">{config.label}</label>
      <div className="flex flex-wrap gap-2 mt-1">
        {config.options &&
          config.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`px-3 py-1 rounded-full ${
                selectedOptions.includes(option)
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {option}
            </button>
          ))}
      </div>
    </div>
  );
};
