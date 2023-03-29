import { Joueur } from "@/schema/joueur";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const joueur = (await request.json()) as Joueur;
    const existingJoueur = await prisma.joueurs.findFirst({
      where: {
        firstname: joueur.firstname,
        lastname: joueur.lastname,
      },
    });

    if (existingJoueur) {
      return new Response(JSON.stringify({ error: "Joueur already exists" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    const newJoueur = await prisma.joueurs.create({
      data: joueur,
    });

    const processedData = JSON.parse(
      JSON.stringify(newJoueur, (key, value) =>
        typeof value === "bigint" ? value.toString() : value
      )
    );
    return new Response(JSON.stringify(processedData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });

  } catch (err: any) {
    console.log("catching main errors");
    console.log(err);
    return new Response(JSON.stringify({ error: err?.message }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
