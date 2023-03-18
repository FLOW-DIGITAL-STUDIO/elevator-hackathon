"use client";
import { useRouter } from "next/navigation";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
  console.log(path);
  return (
    <html lang="en">
      {/* create header with tailwindcss */}
      <body>
        <header className="container justify-between	align-baseline px-10 py-3 bg-gray-200 flex flex-row space-x-1 ">
          <span>
            {path === "/add" ? (
              <h1 className="text-2xl font-bold">Ajouter un joueur</h1>
            ) : (
              <h1 className="text-2xl font-bold">Liste des joueurs</h1>
            )}
          </span>
          {path === "/add" ? (
            <Link
              href="/"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Retour
            </Link>
          ) : (
            <Link
              href="/add"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Ajouter un joueur
            </Link>
          )}
        </header>
        <div className="container mx-auto p-5">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
