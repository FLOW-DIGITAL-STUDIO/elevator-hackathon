"use client";
import React from "react";
import { ArrowLeft2 } from "iconsax-react";
import { useRouter } from "next/navigation";

export default function Backward() {
  const router = useRouter();
  return (
    <button
      type="button"
      className="text-left py-6 w-[70%] capitalize flex flex-row items-center"
      onClick={() => router.back()}
    >
      <ArrowLeft2 size={18} />
      back
    </button>
  );
}
