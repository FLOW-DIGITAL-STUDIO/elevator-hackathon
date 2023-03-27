import React from "react";
import Form from "@/components/Player/Form";

export default function Page() {
  return (
    <div className=" w-full h-full">
      <Form endPoint="/api/players/create" />
    </div>
  );
}
