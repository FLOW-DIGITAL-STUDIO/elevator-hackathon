const { PrismaClient } = require('@prisma/client');
const {  players } = require('./data.js');
const prisma = new PrismaClient();

const load = async () => {
  console.log("test")
  try {
    players.map( async (player)=>{
         await prisma.player.createMany({
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