import React from "react";
import { TableHeader } from "./TableHeader";
import { Player } from "../Player";
import { TPlayerSchema } from "../Player/types";

type TPlayerTableProps = {
  players: TPlayerSchema[];
  isLoading: boolean;
  handleUpdate: (id: number) => void;
};

export const PlayerTable = (props: TPlayerTableProps) => {
  const { players, isLoading, handleUpdate } = props;
  return (
    <div id="table" aria-label={`total-players-${players.length}`}>
      <div className="flex flex-row items-center justify-center relative h-full">
        <div className="w-2/3 flex flex-col items-center border border-[rgba(0, 0, 0, 0.9)] px-2 rounded-md mt-4 relative min-h-[288px] overflow-hidden h-full">
          {isLoading && (
            <div className="absolute top-0 w-full h-full bg-white opacity-90 flex flex-row items-center justify-center">
              <p className="capitalize">loading...</p>
            </div>
          )}
          <TableHeader />
          {players?.length &&
            players.map((e: TPlayerSchema) => (
              <Player
                handleUpdate={() => e?.id && handleUpdate(e?.id)}
                key={`player-${e?.id}`}
                firstName={e.firstName}
                lastName={e.lastName}
                goals={e.goal}
                salary={e.salary.toString()}
                id={e.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};
