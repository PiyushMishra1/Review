// ResponsesPage.js
import React from "react";

const ResponsesPage = ({ submittedResponses }) => {
  return (
    <div className="w-3/4 p-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-12 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Submitted Responses
          </h1>
          {submittedResponses.length > 0 && (
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full">
              <div className="space-y-4">
                {submittedResponses.map((response, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-4 text-gray-900"
                  >
                    {Object.entries(response).map(([key, value]) => (
                      <p key={key} className="text-lg">
                        {key}: {value}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResponsesPage;
