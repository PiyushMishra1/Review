import React from "react";

const ThankYouMessage = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-12 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-600 mb-8">
          Your review has been submitted successfully. We appreciate your
          feedback!
        </p>
        {/* Add any additional content or buttons here */}
      </div>
    </div>
  );
};

export default ThankYouMessage;
