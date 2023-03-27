import { NextResponse } from "next/server";
import { resolveMessage } from "@/utils/server";
import { playerSchema } from "@/components/Player/types.d";
import { prisma } from "@/db";

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const isValid = playerSchema.safeParse(request.body);
  const data = await request.json();

  if (!id || Number.isNaN(+id)) {
    return resolveMessage("valid user id required", 403);
  }

  if (!isValid) {
    return resolveMessage("invalid data", 403);
  }

  const res = await prisma.player.update({
    where: { id: parseInt(id, 10) },
    data,
  });

  return NextResponse.json({ res });
}
