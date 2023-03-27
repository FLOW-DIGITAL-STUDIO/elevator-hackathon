"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex flex-row justify-center">
      <div className="min-h-[300px] flex flex-col justify-center text-center">
        <h1 className="font-bold text-lg">
          404 - Could not find requested ressource
        </h1>
        <p className="text-xs">
          <span
            className="hover:text-gray-700 underline cursor-pointer"
            onClick={() => router.back()}
          >
            Go back
          </span>{" "}
          to safety
        </p>
      </div>
    </div>
  );
}
