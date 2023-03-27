"use client";
import React, { useEffect, useState } from "react";
import { PlayerTable } from "@/components/PlayersTable.tsx";
import { TPlayerSchema } from "@/components/Player/types";
import { Pagination } from "@/components/Navigation/Pagination";

export default function Home() {
  const [users, setUsers] = useState<TPlayerSchema[]>([]);
  const [total, setTotal] = useState(0);
  const [position, setPosition] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPage = () => {
    fetch(`/api/players?pageNumber=${position}`)
      .then(async (res) => {
        if (res.ok) {
          const fetchedUsers = await res.json();

          setUsers(fetchedUsers?.players);
          setTotal(fetchedUsers?.total);
        }
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setIsLoading(true);
    fetchPage();
  }, [position]);

  const handlePlayerRemoval = (id: number) => {
    const player: TPlayerSchema | undefined = users.find((e) => e.id === id);
    if (player) {
      fetchPage();
    }
  };

  return (
    <main className="h-full">
      <PlayerTable
        handleUpdate={handlePlayerRemoval}
        players={users}
        isLoading={isLoading}
      />
      <div className="flex flex-row items-center justify-center">
        {users?.length && (
          <p className="text-xs py-2">Showing {users?.length} players</p>
        )}
      </div>
      <Pagination
        currentPage={position}
        isLoading={isLoading}
        max={total}
        handleMoving={(newPosition) => {
          if (newPosition >= 0 && newPosition <= total) {
            setPosition(newPosition);
          }
        }}
      />
    </main>
  );
}
