'use client';
import React, { useState } from 'react';
import { TableHeader } from './TableHeader';
import { Player } from '../Player/page';
import { Player as IPlayer } from '@prisma/client';
import { Pagination } from '../Pagination/page';
import _ from 'lodash';

export const PlayerTable = ({ players }: { players: IPlayer[] }) => {
  const [shown, setShown] = useState(_.take(players, 6));
  const [currentPage, setCPage] = useState(1);
  const handleMoving = (direction: number) => {
    console.log();
    if (direction > 0 && currentPage + 1 <= Math.ceil(players.length / 6)) {
      const tmp = [...players];
      tmp.splice(0, currentPage * 6);
      setShown(_.take(tmp, 6));
      setCPage(currentPage + 1);
    } else if (direction < 0) {
      const tmp = [...players];
      setShown(_.take(_.drop(tmp, (currentPage - 2) * 6), 6));
      if (currentPage >= 0) setCPage(currentPage - 1);
    }
  };

  return (
    <div id="table" aria-label={`total-players-${players.length}`}>
      <div className="flex flex-row items-center justify-center ">
        <div className="w-2/3 flex flex-col items-center border border-black rounded-md mt-4">
          <TableHeader />
          {shown?.length
            ? shown.map((e: IPlayer) => (
                <Player
                  key={`player-${e?.id}`}
                  firstName={e.firstName}
                  lastName={e.lastName}
                  goals={e.goal}
                  salary={e.salary.toString()}
                  id={e.id}
                />
              ))
            : 'Players list empty'}
        </div>
      </div>
      <div className="flex flex-row items-center justify-center">
        <Pagination
          currentPage={currentPage}
          handleMoving={handleMoving}
          max={parseInt(Math.ceil(players.length / 6).toString(), 10)}
        />
      </div>
    </div>
  );
};
