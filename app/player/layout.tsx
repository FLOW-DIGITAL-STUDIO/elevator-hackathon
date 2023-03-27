import React from "react";
import Backward from "@/components/Navigation/Backward";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-full h-full">
      <div className="flex flex-row justify-center items-center">
        <Backward />
      </div>
      <div className="flex flex-row items-center justify-center  border-gray-400 h-full">
        <div className="w-fit h-full flex flex-row">{children}</div>
      </div>
    </div>
  );
}
