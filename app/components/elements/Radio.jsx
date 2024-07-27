import React from "react";

export const Radio = ({ config, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-lg font-semibold text-gray-800 mb-2">
        {config.label}
      </label>
      <div className="space-y-2">
        {config.options &&
          config.options.map((option, index) => (
            <label
              key={index}
              className="flex items-center space-x-3 cursor-pointer text-gray-900"
            >
              <input
                type="radio"
                name={config.name}
                value={option}
                checked={value === option}
                onChange={(e) => onChange(config.name, e.target.value)}
                className="form-radio h-5 w-5 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="text-base">{option}</span>
            </label>
          ))}
      </div>
    </div>
  );
};
