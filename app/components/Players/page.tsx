
const Players = () => {
  return (
    <div className="shadow-xl mt-8 mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2">
  
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th
                className="px-5 py-3 border-b-2   text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Id
              </th>
              <th
                className="px-5 py-3 border-b-2   text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                NOM COMPLET
              </th>
              <th
                className="px-5 py-3 border-b-2   text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                SALAIRE ANNUEL
              </th>
              <th
                className="px-5 py-3 border-b-2   text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                BUT
              </th>
              <th
                className="px-5 py-3 border-b-2   text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                ACTIONS
              </th>
              <th
                className="px-5 py-3 border-b-2  "
              ></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-5 py-5 border-b  bg-white text-sm">
                <div className="flex">
                  1
                </div>
              </td>
              <td className="px-5 py-5 border-b  bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">Pelé</p>
              </td>
              <td className="px-5 py-5 border-b  bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">13M$</p>
              </td>
              <td className="px-5 py-5 border-b  bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">320</p>
              </td>
             
              <td
                className="px-5 py-5 border-b  bg-white text-sm text-right"
              >
                <button
                  type="button"
                  className="inline-block text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="inline-block h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="inline-block text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="inline-block h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="inline-block text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="inline-block h-6 w-6 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
            
          </tbody>
        </table>
     

      </div>
  )
}

export default Players