import { NextResponse } from "next/server";
import { playerSchema } from "@/components/Player/types.d";
import { resolveMessage } from "@/utils/server";

import { prisma } from "@/db";

export async function POST(request: Request) {
  const data = await request.json();
  const isValid = playerSchema.safeParse(request.body);

  if (!isValid) {
    return resolveMessage("invalid data", 403);
  }

  const res = await prisma.player.create({
    data,
  });

  return NextResponse.json(res);
}
