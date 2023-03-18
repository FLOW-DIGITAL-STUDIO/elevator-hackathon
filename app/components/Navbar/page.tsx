'use client';
import React, { useState } from 'react';
import { Create } from '../CreateUserDialog/page';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-row justify-center border-b border-black">
      <div className="flex flex-row w-10/12 justify-between text-black py-2 items-center">
        <div>
          <span>List des joueurs</span>
        </div>
        <div>
          <button
            onClick={() => setOpen(!open)}
            className="hover:bg-slate-200 py-1 px-2"
          >
            Ajouter un joueur
          </button>
        </div>
      </div>
      {open && <Create onClose={() => setOpen(false)} open={open} />}
    </div>
  );
};
