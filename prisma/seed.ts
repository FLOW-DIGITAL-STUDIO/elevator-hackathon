import { PrismaClient } from '@prisma/client';
import players from './players.json';
const prisma = new PrismaClient();

async function main() {
  const playersStore = await prisma.player.createMany({
    data: players,
  });

  console.log('Seed data created successfully!');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
