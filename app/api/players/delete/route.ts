import { NextResponse } from "next/server";
import { resolveMessage } from "@/utils/server";
import { prisma } from "@/db";

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id || Number.isNaN(+id)) {
    return resolveMessage("valid user id required", 403);
  }

  const res = await prisma.player.delete({
    where: { id: parseInt(id, 10) },
  });

  return NextResponse.json({ res });
}
