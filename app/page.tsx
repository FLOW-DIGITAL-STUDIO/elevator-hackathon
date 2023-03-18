import React from 'react';
import { PrismaClient } from '@prisma/client';
import { Navbar } from './Navbar/page';

const fetchPlayers = async () => {
  const prisma = new PrismaClient();
  const players = await prisma.player.findMany();
  return players;
};

export default async function Home() {
  const players = await fetchPlayers();
  return (
    <main className="">
      <Navbar />
      {players?.length
        ? players.map((e) => <p>{e?.firstName}</p>)
        : 'Players list empty'}
    </main>
  );
}
