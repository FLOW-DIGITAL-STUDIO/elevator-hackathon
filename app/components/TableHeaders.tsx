import React from "react";

type Props = {
  columns: string[];
};

export default function TableHeaders({columns}: Props) {
  return (
    <tr className="text-center">
      {columns.map((column) => (
        <th key={column} scope="col" className="px-6 py-3">
        {column}
      </th>
      ))}
    </tr>
  );
}
