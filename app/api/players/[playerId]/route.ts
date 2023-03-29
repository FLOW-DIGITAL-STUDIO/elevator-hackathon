import prisma from "@/lib/prisma";
import { ParamsType } from "@/types/globalTypes";


export async function GET(request: Request, { params }: ParamsType) {
 
  const { playerId } = params;
  const data = await prisma.joueurs.findUnique({
    where: {
      id: Number(playerId),
    },
  });

  // Convert any BigInt values in the data to regular numbers
  const processedData = JSON.parse(
    JSON.stringify(data, (key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );

  const response = {
    data: processedData,
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
