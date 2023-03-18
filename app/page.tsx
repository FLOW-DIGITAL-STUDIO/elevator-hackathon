import React, { ReactNode } from 'react';

import { getPlayers } from '../utils/getPlayers';
import { Player } from '../interfaces/type';
import PlayersTable from './components/PlayersTable/PlayersTable';

const Home: () => Promise<ReactNode> = async () => {
  const players: Player[] = await getPlayers();

  return (
    <>
      <PlayersTable players={players} />
    </>
  );
};

export default Home;
