import { Joueur } from "@/schema/joueur";

const fetchJoueurs = async (page: number, limit: number = 6) => {
  const res = await fetch("http://localhost:3000/api/players?page=" + page,{ cache: 'no-store' });
  return res;
};

const createJoueur = async (joueur: Joueur) => {
  console.log('created triggered');
  const joueurData = {
    ...joueur,
    devise: "£",
    pictureURl: joueur.pictureURl || "https://www.thesportsdb.com/images/media/player/thumb/uvuyqx1472668971.jpg" ,
  };
  const res = await fetch("/api/players/add", {
    method: "POST",
    body: JSON.stringify(joueurData),
  });
  console.log('sent request',res);
  const data = await res.json();
  console.log('awaited data',data);
  return data;
};

const editJoueur = async (joueur: Joueur) => {
  console.log('edit triggered',joueur);
  const res = await fetch("/api/players/edit", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(joueur),
  });
  const data = await res.json();
  return data;
};

const getJoueurById = async (id: string) => {
  const res = await fetch("/api/players/" + id);
  const data = await res.json();
  return data;
};

const deleteJoueur = async (id: number|undefined) => {
  const res = await fetch("/api/players/delete?id=" + id, {
    method: "DELETE"
  });
  return res;
};

export { fetchJoueurs, createJoueur, editJoueur, getJoueurById, deleteJoueur };
