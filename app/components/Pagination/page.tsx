import React from 'react';

export const Pagination = ({
  max,
  handleMoving,
  currentPage,
}: {
  max: number;
  handleMoving: (direction: number) => void;
  currentPage: number;
}) => {
  return (
    <div>
      <div className="mt-4 flex flex-row gap-2">
        <span className="border rounded-md border-black px-2">1</span>
        <span>{currentPage}</span>
        <span className="border rounded-md border-black px-2">{max}</span>
      </div>
      <div className="flex flex-row items-center justify-center">
        <button onClick={() => handleMoving(-1)}>&#60;</button>{' '}
        <button>&#60;&#60;</button>
        <button>&#62;&#62;</button>{' '}
        <button onClick={() => handleMoving(1)}>&#62;</button>
      </div>
    </div>
  );
};
