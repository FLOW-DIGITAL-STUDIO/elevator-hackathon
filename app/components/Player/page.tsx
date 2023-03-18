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
      <span className="w-[20%]">{id}</span>
      <span className="w-[20%]">{`${!firstName ? '-' : firstName} ${
        !lastName ? '-' : lastName
      }`}</span>
      <span className="w-[20%]">{salary ? salary.toString() : '-'}</span>
      <span className="w-[20%]">{goals}</span>
      <div className="w-[20%]">actions</div>
    </div>
  );
};
