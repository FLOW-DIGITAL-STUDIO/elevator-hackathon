'use client';
import React from 'react';
import { usePaginate } from '../../../hooks/usePaginate';
import { Player } from '../../../interfaces/type';
import props from '../../../interfaces/props';
import Flex from '../Flex/Flex';
import Table from '../Table/Table';
import Pagination from '../Pagination/Pagination';
const PlayersTable: React.FC<props.PlayersTableProps> = ({ players }) => {
  const { currentItems, goToPage, prevPage, nextPage, maxPage } = usePaginate(players, 6);
  return (
    <Flex flexDirection='flex-col' justifyContent='justify-center' alignItems='items-center'>
      <Table>
        <Table.Header />
        {currentItems.map((player: Player) => (
          <Table.Content key={player.id} player={player} />
        ))}
      </Table>
      <Pagination goToPage={goToPage} prevPage={prevPage} nextPage={nextPage} maxPage={maxPage} />
    </Flex>
  );
};

export default PlayersTable;
