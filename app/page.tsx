import React, { ReactNode } from 'react';

import Flex from './components/Flex/Flex';
import { getPlayers } from '../utils/getPlayers';
import { Player } from '../interfaces/type';
import PlayersTable from './components/PlayersTable/PlayersTable';

const Home: () => Promise<ReactNode> = async () => {
  const players: Player[] = await getPlayers();

  return (
    <>
      <Flex className='w-full mt-[10%]' justifyContent='justify-center' alignItems='items-center'>
        <PlayersTable players={players} />
      </Flex>
    </>
  );
};

export default Home;
