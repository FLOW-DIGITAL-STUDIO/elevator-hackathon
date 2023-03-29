import { IconPencil, IconTrash } from "@tabler/icons";
import { fetchJoueurs } from "@/services/joueurs";
import Link from "next/link";
import { Joueur } from "@/schema/joueur";
import TableActions from "./components/TableActions";
import TableHeaders from "./components/TableHeaders";
import TableRowData from "./components/TableRowData";
import Pagination from "./components/Pagination";

type FetchedData = {
  data: Joueur[];
  total: number;
};

export async function getJoueursData(page: number) {
  try {
    const joueurs = await fetchJoueurs(page);
    const joueursData = await joueurs.json();
    return joueursData;
  } catch (error) {
    console.log(error);
  }
}

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  // get params from url
  const page = searchParams?.page ? parseInt(searchParams.page[0]) : 1;
  const { data, total } = (await getJoueursData(page)) as FetchedData;
  const columns = ["Id", "Nom Complet", "Salaire Annuel", "But", "Actions"];

  return (
    <div>
      <div className="flex row justify-center ">
        <table className="w-5/6 mt-7 rounded-md text-sm text-left text-gray-500 dark:text-gray-700">
          <thead className="text-xs text-gray-200 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-700">
            <TableHeaders columns={columns} />
          </thead>
          <tbody>
            {data?.map((joueur) => (
              <TableRowData key={joueur?.id} joueur={joueur} />
            ))}
          </tbody>
        </table>
      </div>
      <Pagination page={page} total={total} />
    </div>
  );
}
