const { PrismaClient } = require('@prisma/client');
// @ts-ignore
const { joueurs } = require('./data.ts');
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.joueurs.deleteMany();
    console.log('Deleted records in joueurs table');

    await prisma.$queryRaw`ALTER TABLE Joueurs AUTO_INCREMENT = 1`;
    console.log('reset joueurs auto increment to 1');

    await prisma.joueurs.createMany({
      data: joueurs,
    });
    console.log('Added joueurs data');
    
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();