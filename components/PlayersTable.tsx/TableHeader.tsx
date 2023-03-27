import React from 'react';

export const TableHeader = () => {
  return (
    <div className="flex flex-row gap-2 font-bold w-full py-2 px-2 text-center">
      <p className="w-[10%]">ID</p>
      <p className="w-[25%]">Full name</p>
      <p className="w-[25%]">Salary</p>
      <p className="w-[20%]">Total goals</p>
      <div className="w-[20%]">Actions</div>
    </div>
  );
};
