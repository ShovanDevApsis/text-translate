"use client";

import React from "react";

const Loader = () => {
  return (
    <div className="flex space-x-2 justify-center items-center dark:invert">
      <span className="sr-only">Loading...</span>
      <div className="h-4 w-4 bg-slate-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-4 w-4 bg-slate-600 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-4 w-4 bg-slate-600 rounded-full animate-bounce"></div>
    </div>
  );
};

export default Loader;
