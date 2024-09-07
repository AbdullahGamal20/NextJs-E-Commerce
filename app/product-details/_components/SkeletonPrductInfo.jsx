import React from "react";

const SkeletonPrductInfo = () => {
  return (
    <div className="flex flex-col gap-5">
      <div
        className="h-[20px]
		w-[600px] bg-slate-200
		animate-pulse"
      ></div>
      <div
        className="h-[20px]
		w-[70px] bg-slate-200
		animate-pulse"
      ></div>
      <div
        className="h-[20px]
		w-[600px] bg-slate-200
		animate-pulse"
      ></div>
      <div
        className="h-[20px]
		w-[600px] bg-slate-200
		animate-pulse"
      ></div>
      <div
        className="h-[20px]
		w-[600px] bg-slate-200
		animate-pulse"
      ></div>
      <div
        className="h-[20px]
		w-[200px] bg-slate-200
		animate-pulse"
      ></div>
    </div>
  );
};

export default SkeletonPrductInfo;
