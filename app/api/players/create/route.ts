import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export async function POST(req: Request) {
  const body = await req.json();
  const player = await prisma.player.create({
    data: {
      firstname: body.firstname,
      lastname: body.lastname,
      goal: body.goal,
      salary: body.salary,
      devise: '$',
      pictureURl: body.pictureURl,
    },
  });
  return NextResponse.json(player);
}
