import React from "react";

export const Checkbox = ({ config, value, onChange }) => {
  const handleChange = (optionValue) => {
    const newValue = Array.isArray(value) ? [...value] : [];
    const index = newValue.indexOf(optionValue);
    if (index > -1) {
      newValue.splice(index, 1);
    } else {
      newValue.push(optionValue);
    }
    onChange(config.name, newValue);
  };

  return (
    <div className="space-y-4">
      <label className="block text-lg font-semibold text-gray-800 mb-2">
        {config.label}
      </label>
      {config.options &&
        config.options.map((option, index) => (
          <label
            key={index}
            className="flex items-center text-gray-900 space-x-3 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={
                Array.isArray(value) ? value.includes(option.value) : false
              }
              onChange={() => handleChange(option.value)}
              className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded"
            />
            <span className="text-base">{option.label}</span>
          </label>
        ))}
    </div>
  );
};
