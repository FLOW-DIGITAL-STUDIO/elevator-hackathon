"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Default from "./Default";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (pathname.includes("create")) {
      setTitle("Ajouter un joueur");
    } else if (pathname.includes("view")) {
      setTitle("Detail");
    } else {
      setTitle("Liste des joueurs");
    }
  }, [pathname]);

  return (
    <div className="flex flex-row justify-center border-b border-black h-full">
      <div className="flex flex-row w-10/12 justify-between text-black py-2 items-center h-full">
        <div>
          <button
            onClick={() => router.push("/")}
            className="hover:bg-slate-100 transition-all py-1 px-3 rounded-md "
          >
            {title}
          </button>
        </div>

        {pathname === "/" && <Default />}
      </div>
    </div>
  );
}
