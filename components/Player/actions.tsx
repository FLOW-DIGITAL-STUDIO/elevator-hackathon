import React from "react";
import { Edit2, Trash, DocumentCopy } from "iconsax-react";
import { IAction } from "./types.d";

export const actions: IAction[] = [
  {
    name: "view",
    icon: <Edit2 />,
  },
  {
    name: "edit",
    icon: <DocumentCopy />,
  },
  {
    name: "remove",
    icon: <Trash />,
  },
];
