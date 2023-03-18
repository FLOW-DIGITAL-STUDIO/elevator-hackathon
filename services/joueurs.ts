import { Joueur } from "@/types/joueur";

const fetchJoueurs = async (page: number, limit: number = 6) => {
  const res = await fetch("/api?page=" + page);
  console.log(res);
  const data = await res.json();
  return data;
};

const createJoueur = async (joueur: Joueur) => {
  const joueurData = {
    ...joueur,
    devise: "£",
    pictureURl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png",
  };
  const res = await fetch("/api/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(joueurData),
  });
  const data = await res.json();
  return data;
};

export { fetchJoueurs, createJoueur };
