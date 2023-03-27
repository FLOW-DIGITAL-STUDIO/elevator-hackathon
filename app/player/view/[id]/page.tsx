import React from "react";
import { getPlayer } from "@/utils/server";
import { notFound } from "next/navigation";
import Form from "@/components/Player/Form";

export default async function Page(props: { params: { id: number } }) {
  const { params } = props;
  const { id } = params;
  const res = await getPlayer(id);
  const player = await res.json();

  return (
    <div className=" w-full h-full">
      {res.status === 404 && notFound()}
      <Form endPoint={`/api/players/update?id=${id}`} defaultValues={player} />
    </div>
  );
}
