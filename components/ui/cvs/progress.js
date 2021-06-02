import React from 'react';

const Progress = ({ percent, name }) => (
  <div className="relative pt-1">
    <div className="flex mb-2 items-center justify-between">
      <div>
        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-white text-purple-600 ">
          {name}
        </span>
      </div>
    </div>
    <div className="overflow-hidden h-2 md:w-1/2 mb-4 text-xs flex rounded bg-white">
      <div style={{ width: `${percent}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"></div>
    </div>
  </div>
);

export default Progress;