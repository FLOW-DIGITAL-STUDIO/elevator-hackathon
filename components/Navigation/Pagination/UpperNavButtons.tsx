import React from "react";
import { default as cn } from "classnames";
import { INavButton } from "./NavButtons";

export default function UpperNavButtons(props: INavButton) {
  const { isLoading, handleMoving, currentPage, max } = props;
  return (
    <div className="mt-4 flex flex-row gap-3">
      <button
        className={cn(
          "border rounded-md border-black  cursor-pointer hover:bg-black hover:text-white px-2 transition-all",

          isLoading && "cursor-not-allowed"
        )}
        onClick={() => handleMoving(1)}
      >
        1
      </button>
      <div className="flex flex-row items-center">
        <span id="current-position">{currentPage}</span>
      </div>
      <button
        className={cn(
          "border rounded-md border-black  cursor-pointer hover:bg-black hover:text-white px-2 transition-all",
          isLoading && "cursor-not-allowed"
        )}
        onClick={() => max && handleMoving(max)}
      >
        {max}
      </button>
    </div>
  );
}
