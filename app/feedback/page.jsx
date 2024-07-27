"use client";

import React from "react";
import { StepsFlow } from "../components/stepFlow";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-3/5">
        <div className="w-full bg-purple-100 p-6">
          <StepsFlow />
        </div>
      </div>
    </div>
  );
};

export default Page;
