import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pageNumber = searchParams.get("pageNumber");

  if (pageNumber === null || Number.isNaN(parseInt(pageNumber, 10))) {
    return new Response("pageNumber must be positive", {
      status: 400,
    });
  }

  const skip = parseInt(pageNumber, 10) * 6;

  const players = await prisma.player.findMany({
    skip,
    take: 6,
  });
  const count = await prisma.player.count();
  const total = Math.floor(count / 6);

  return NextResponse.json({ total, players });
}

export async function POST(request: Request) {
  const data = await request.json();
  const res = await prisma.player.create({
    data,
  });
  if (res) {
    return NextResponse.json(res);
  }
}
