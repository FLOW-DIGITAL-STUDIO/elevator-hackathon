import React from 'react';

export const Player = ({
  firstName,
  lastName,
  salary,
  goals,
}: {
  firstName: string;
  lastName: string;
  salary: number;
  goals: number;
}) => {
  return (
    <div className="flex flex-row">
      <span>{`${firstName} ${lastName}`}</span>
      <span>{salary}</span>
      <span>{goals}</span>
      <div></div>
    </div>
  );
};
