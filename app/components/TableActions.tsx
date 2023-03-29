"use client";
import { Joueur } from "@/schema/joueur";
import { deleteJoueur } from "@/services/joueurs";
import { IconPencil, IconTrash } from "@tabler/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
type Props = {
  joueur: Joueur;
};

export default function TableActions({ joueur }: Props) {
  const router = useRouter();
  const handleDelete = () => {
    deleteJoueur(joueur?.id).then(() => {
      router.refresh();
    });
  };
  return (
    <td className="px-6 py-5 flex row justify-center">
      <Link
        href={`/edit?id=${joueur?.id}`}
        className="p-2 rounded-md cursor-pointer transition-all mr-3 hover:bg-slate-100"
      >
        <IconPencil size={15} />
      </Link>
      <span
        className="p-2 rounded-md cursor-pointer hover:bg-slate-100"
        onClick={handleDelete}
      >
        <IconTrash size={15} />
      </span>
    </td>
  );
}
