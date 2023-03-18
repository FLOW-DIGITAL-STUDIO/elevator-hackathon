import { PrismaClient, } from '@prisma/client';

const prisma =  new PrismaClient()

export const getPlayers= ()=>{
  return  prisma.player.findMany()

};