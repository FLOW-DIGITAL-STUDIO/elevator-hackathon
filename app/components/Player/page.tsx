import React from 'react';

export const Player = ({
  firstName,
  lastName,
  salary,
  goals,
  id,
}: {
  firstName?: string;
  lastName?: string;
  salary?: string;
  goals?: number;
  id: number;
}) => {
  return (
    <div
      aria-label={`player-${id}`}
      className="flex flex-row gap-2 w-full py-2 border-t border-[rgba(0, 0, 0, 0.5)]"
    >
      <span className="w-[20%] truncate">{id}</span>
      <span className="w-[20%] truncate">{`${!firstName ? '-' : firstName} ${
        !lastName ? '-' : lastName
      }`}</span>
      <span className="w-[20%] truncate">
        {salary ? salary.toString() : '-'}
      </span>
      <span className="w-[20%] truncate">{goals}</span>
      <div className="w-[20%] truncate">actions</div>
    </div>
  );
};
