import React from "react";
import BottomNavButtons from "./NavButtons";
import UpperNavButtons from "./UpperNavButtons";
import { IPagination } from "./types.d";

export function Pagination(props: IPagination) {
  const { max, handleMoving, currentPage, isLoading } = props;
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-col items-center">
        <UpperNavButtons
          currentPage={currentPage}
          handleMoving={handleMoving}
          max={max}
          isLoading={isLoading}
        />
        <BottomNavButtons
          currentPage={currentPage}
          handleMoving={handleMoving}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default Pagination;
