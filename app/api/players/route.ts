import prisma from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") ||6;
  const offset = (Number(page) - 1) * Number(limit);

  // Total number of joueurs

  const total = await prisma.joueurs.count();

  const data = await prisma.joueurs.findMany({
    take: Number(limit),
    skip: Number(offset),
  });

  // Convert any BigInt values in the data to regular numbers
  const processedData = JSON.parse(
    JSON.stringify(data, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );

  const response = {
    data: processedData,
    total,
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
