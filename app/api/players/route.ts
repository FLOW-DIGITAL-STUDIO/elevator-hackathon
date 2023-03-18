import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export async function GET() {
  const players = await prisma.player.findMany({});
  return NextResponse.json(players);
}
