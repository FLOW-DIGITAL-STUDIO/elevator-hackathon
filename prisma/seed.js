const { PrismaClient } = require('@prisma/client');
const {  players } = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
  try {
    players.map((player)=>{
         prisma.player.createMany({
          data: player,
        });
    })

  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();