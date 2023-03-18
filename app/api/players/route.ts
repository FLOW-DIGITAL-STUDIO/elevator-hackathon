import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export async function GET(req: Request) {
  if (req.method === 'GET') {
    const players = await prisma.player.findMany({});
    return NextResponse.json(players);
  }
}
