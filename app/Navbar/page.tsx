import React from 'react';

export const Navbar = () => {
  return (
    <div className="flex flex-row justify-center">
      <div className="flex flex-row w-10/12 justify-between text-black py-4">
        <div>List des joueurs</div>
        <div>
          <button className="hover:bg-slate-200 py-1 px-2">
            Ajouter un joueur
          </button>
        </div>
      </div>
    </div>
  );
};
