import React from "react";

function Loader() {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full h-40 animate-pulse bg-gray-300 rounded-lg"></div>
      <div className="w-full h-8 animate-pulse bg-gray-300 rounded-lg"></div>
      <div className="w-full h-8 animate-pulse bg-gray-300 rounded-lg"></div>
      <div className="w-full h-8 animate-pulse bg-gray-300 rounded-lg"></div>
    </div>
  );
}

export default Loader;
