import React from "react";
import { default as cn } from "classnames";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";

export interface INavButton {
  isLoading: boolean;
  currentPage: number;
  handleMoving: (newPosition: number) => void;
  max?: number;
}

export default function NavButtons(props: INavButton) {
  const { isLoading, handleMoving, currentPage } = props;
  return (
    <div className="flex flex-row items-center justify-between w-full pt-1">
      <button
        disabled={isLoading}
        className={cn(
          "flex flex-row items-center hover:bg-gray-800 hover:text-white transition-all rounded-md p-1",
          isLoading && "cursor-not-allowed"
        )}
        aria-label="backward"
        onClick={() => handleMoving(currentPage - 1)}
      >
        <ArrowLeft2 size={16} />
      </button>
      <button
        disabled={isLoading}
        className={cn(
          "flex flex-row items-center hover:bg-gray-800 hover:text-white transition-all rounded-md p-1",
          isLoading && "cursor-not-allowed"
        )}
        aria-label="forward"
        onClick={() => handleMoving(currentPage + 1)}
      >
        <ArrowRight2 size={16} />
      </button>
    </div>
  );
}
