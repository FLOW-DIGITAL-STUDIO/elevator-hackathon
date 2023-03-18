import { PrismaClient } from '@prisma/client';

import { NextResponse } from 'next/server';
const prisma = new PrismaClient();

export async function PATCH(req: Request) {
  const id = await req.url.split('id=')[1];
  const { firstname, lastname, salary, pictureURl } = await req.json();
  await prisma.player.update({
    where: {
      id: id as string,
    },
    data: {
      firstname: firstname,
      lastname: lastname,
      salary: salary,
      pictureURl: pictureURl,
    },
  });
  return NextResponse.json('player deleted');
}
