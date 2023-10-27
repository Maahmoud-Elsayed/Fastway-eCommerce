import React from "react";

const Loading = () => {
  const loader = (
    <div className="max-h-[400px] p-4 max-w-sm min-w-[250px]   bg-white border border-gray-200 rounded-3xl shadow">
      <div className=" bg-slate-300 h-52 sm:h-60 w-full rounded-3xl mb-3 animate-pulse"></div>
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">

          <div className="space-y-3">
            <div className="grid grid-col-3 gap-4">
              <div className="h-4 bg-slate-500 rounded col-span-2"></div>
              <div className="h-4 bg-slate-500 rounded col-span-1"></div>
            </div>
            <div className="h-4 bg-slate-500 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="container-fixed grid  grid-col-1 py-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 justify-center ">
      {[...Array(8)].map((_, index) => (
        <div key={index}>{loader}</div>
      ))}
    </div>
  );
};

export default Loading;
