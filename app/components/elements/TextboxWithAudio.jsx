import React from "react";

export const TextboxWithAudio = ({ config, value, onChange }) => {
  const handleAudio = () => {
    // Implement audio functionality here
    console.log("Audio button clicked");
  };

  return (
    <div className="mb-4">
      <label className="block text-lg font-semibold text-gray-800 mb-2">
        {config.label}
      </label>
      <div className="flex items-center space-x-3">
        <input
          type="text"
          value={value || ""}
          onChange={(e) => onChange(config.name, e.target.value)}
          className="form-input block w-full border-gray-300 rounded-md shadow-sm text-gray-900 bg-gray-100 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          placeholder={config.placeholder || ""}
        />
        <button
          onClick={handleAudio}
          className="flex items-center justify-center p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          🎤
        </button>
      </div>
    </div>
  );
};
