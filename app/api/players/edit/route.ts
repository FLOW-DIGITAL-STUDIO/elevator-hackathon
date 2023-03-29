import prisma from "@/lib/prisma";
import { Joueur } from "@/schema/joueur";

export async function PUT(request: Request) {
  try {
    const joueur = (await request.json()) as Joueur;

    console.log(joueur);
    const data = await prisma.joueurs.update({
      where: {
        id: joueur.id,
      },
      data: {
        firstname: joueur.firstname,
        lastname: joueur.lastname,
        goal : joueur.goal,
        salary: joueur.salary,
        pictureURl: joueur.pictureURl,
      }
    });
  
    return new Response(JSON.stringify("player edited successfully"), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
    
  }

}
