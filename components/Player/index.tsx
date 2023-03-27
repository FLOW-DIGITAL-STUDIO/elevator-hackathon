import React from "react";
import { actions } from "./actions";
import { IAction } from "./types.d";
import ActionButton from "../inputs/ActionButton";

type TPlayerProps = {
  firstName?: string;
  lastName?: string;
  salary?: string;
  goals?: number;
  id?: number;
  handleUpdate: () => void;
};

export const Player = (props: TPlayerProps) => {
  const { firstName, lastName, salary, goals, id, handleUpdate } = props;
  return (
    <div
      aria-label={`player-${id}`}
      className="hover:bg-gray-50 cursor-pointer flex flex-row gap-2 w-full py-2 border-t border-[rgba(0, 0, 0, 0.5)] px-2 text-center items-center h-full"
    >
      <span className="w-[10%] truncate">{id}</span>
      <span className="w-[25%] truncate">{`${!firstName ? "-" : firstName} ${
        !lastName ? "-" : lastName
      }`}</span>
      <span className="w-[25%] truncate">
        {salary ? salary.toString() : "-"}
      </span>
      <span className="w-[20%] truncate">{goals}</span>
      <div className="w-[20%] truncate flex transition-all flex-row items-center h-full justify-center gap-2">
        {actions.map((e: IAction) => {
          return (
            <ActionButton
              key={e?.name}
              icon={e?.icon}
              handleUpdate={handleUpdate}
              id={
                e?.name !== "remove"
                  ? `${e?.name}/${id?.toString()}`
                  : id?.toString()
              }
              isFetch={e?.name === "remove"}
            />
          );
        })}
      </div>
    </div>
  );
};
