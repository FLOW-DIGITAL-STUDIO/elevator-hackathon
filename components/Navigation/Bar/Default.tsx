"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Default() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => router.push("/player/create")}
        className="hover:bg-slate-100 transition-all py-1 px-3 rounded-md "
      >
        Ajouter un joueur
      </button>
    </div>
  );
}
