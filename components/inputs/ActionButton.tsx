"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { TActionButton } from "./types.d";

export default function ActionButton(props: TActionButton) {
  const { children, id, icon, text, isFetch, handleUpdate } = props;
  const router = useRouter();
  return (
    <button
      key="id"
      className="p-1 hover:bg-gray-800 hover:text-white rounded-md transition-all"
      onClick={() => {
        if (!isFetch) {
          return router.push(`/player/${id}`);
        }

        fetch(`/api/players/delete?id=${id}`, { method: "DELETE" }).then(() =>
          handleUpdate()
        );
      }}
      aria-label=""
    >
      {children || text}
      {icon && React.cloneElement(icon, { size: 16 })}
    </button>
  );
}
