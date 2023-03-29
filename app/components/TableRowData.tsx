import { Joueur } from "@/schema/joueur";
import React from "react";
import TableActions from "./TableActions";

type Props = {
  joueur: Joueur;
};

export default function TableRowData({ joueur }: Props) {
  return (
    <tr key={joueur?.id?.toString()} className="bg-white text-center border-b dark:bg-gray-200 dark:border-gray-200">
      <td className="px-6 py-5">{joueur?.id?.toString()}</td>
      <td className="px-6 py-5">
        {joueur.firstname} {joueur.lastname}{" "}
      </td>
      <td className="px-6 py-5">{joueur.salary.toString()} $</td>
      <td className="px-6 py-5">{joueur.goal.toString()}</td>
      <TableActions joueur={joueur} />
    </tr>
  );
}
