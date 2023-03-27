import { cache } from "react";
import { NextResponse } from "next/server";
import { prisma } from "@/db";

export function resolveMessage(message: string, status: number) {
  return NextResponse.json({ message }, { status });
}

export const getPlayer = cache(async (id: number) => {
  if (!id || Number.isNaN(+id)) {
    return resolveMessage("valid user id is required", 403);
  }

  const player = await prisma.player.findUnique({
    where: { id: +id },
  });

  if (!player) {
    return resolveMessage(`player with id ${id} not found`, 404);
  }

  return NextResponse.json({ ...player });
});
