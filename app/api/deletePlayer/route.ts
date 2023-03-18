import { PrismaClient } from '@prisma/client';
import { NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export async function DELETE(req: Request) {
  const id = await req.url.split('id=')[1];

  await prisma.player.delete({
    where: {
      id: id as string,
    },
  });
  return NextResponse.json('player deleted');
}
