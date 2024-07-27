import React from "react";

export const Textbox = ({ config, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-lg font-semibold text-gray-800 mb-2">
        {config.label}
      </label>
      <input
        type="text"
        value={value || ""}
        onChange={(e) => onChange(config.name, e.target.value)}
        className="form-input mt-1 block w-full border-gray-300 rounded-md shadow-sm text-gray-900 bg-gray-100 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        placeholder={config.placeholder || ""}
      />
    </div>
  );
};
