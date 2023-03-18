import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  const data = await request.json();
  console.log(data);
  const res = await prisma.player.create({
    data,
  });
  console.log(res);
  return NextResponse.json(data);
}
