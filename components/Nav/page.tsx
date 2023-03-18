

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 right-0 w-100 pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto sm:flex sm:items-center sm:justify-between">
    <div>
      <p className="text-xl font-bold text-gray-900">Liste des joueurs</p>
      
    </div>
    <div className="mt-5 mr-0 mb-0 ml-0 sm:mt-0">
    <button className="rounded-full bg-cyan-500 text-white font-bold mt-2 pr-5 pl-5 pt-1 pb-1">Ajouter un joueur</button>
    </div>
  </div>
  )
}

export default Nav