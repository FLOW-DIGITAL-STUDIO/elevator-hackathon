import React from 'react';
import { PrismaClient } from '@prisma/client';
import { Navbar } from './components/Navbar/page';
import { PlayerTable } from './components/PlayersTable.tsx/page';
import { Create } from './components/CreateUserDialog/page';

const fetchPlayers = async () => {
  const prisma = new PrismaClient();
  const players = await prisma.player.findMany();
  return players;
};

export default async function Home() {
  const players = await fetchPlayers();
  return (
    <main className="h-full">
      <Navbar />
      <PlayerTable players={players} />
    </main>
  );
}
