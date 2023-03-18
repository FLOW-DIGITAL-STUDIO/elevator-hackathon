import React from 'react';

export const TableHeader = () => {
  return (
    <div className="flex flex-row gap-2 w-full py-2 opacity-75 -z-1">
      <span className="w-[20%]">ID</span>
      <span className="w-[20%]">Full name</span>
      <span className="w-[20%]">Salary</span>
      <span className="w-[20%]">Total goals</span>
      <div className="w-[20%]">Actions</div>
    </div>
  );
};
