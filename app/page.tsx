'use client';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import prisma from '../lib/prisma';
import { IconCopy, IconPencil, IconTrash } from '@tabler/icons';
import { Joueur } from '@/types/joueur';
import { useEffect, useState } from 'react';
import { fetchJoueurs } from '@/services/getJoueurs';

const inter = Inter({ subsets: ['latin'] })
export default function Home() {

  const [joueurs, setJoueurs] = useState<Joueur[]>();
  const [page ,setPage] = useState(1);
  const [total , setTotal] = useState(0);

  useEffect(()=>{
    fetchJoueurs(page).then((res)=>{
      console.log(res);
      setJoueurs(res.data);
      setTotal(res.total);
    }).catch((err)=>{
      console.log(err);
    })
  },[page])
  
  return (
    <div>
      <div className='flex row justify-center ' >
        {!joueurs && (
          <div className='flex row justify-center'>
            loading...
          </div>
        )}
        {joueurs && (
          <table className="w-5/6 mt-7 rounded-md text-sm text-left text-gray-500 dark:text-gray-700">
          <thead className="text-xs text-gray-200 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-700">
            <tr className='text-center'>
              <th scope="col" className="px-6 py-3">Id</th>
              <th scope="col" className="px-6 py-3">Nom Complet</th>
              <th scope="col" className="px-6 py-3">Salaire Annuel</th>
              <th scope="col" className="px-6 py-3">But</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {joueurs?.map((joueur) => (
              <tr key={joueur.id.toString()} className="bg-white text-center border-b dark:bg-gray-200 dark:border-gray-200">
                <td className="px-6 py-5">{joueur.id.toString()}</td>
                <td className="px-6 py-5">{joueur.firstname} + {joueur.lastname} </td>
                <td className="px-6 py-5">{joueur.salary.toString()} $</td>
                <td className="px-6 py-5">{joueur.goal.toString()}</td>
                <td className="px-6 py-5 flex row justify-between">
                  <span className='hover:opacity'>
                    <IconPencil size={12}  />
                  </span>
                  <span>
                    <IconCopy  size={12} />
                  </span>
                  <span>
                    <IconTrash size={12} />
                  </span>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
        )}
      </div>
       {/* Pagination */}
       <div className='flex row justify-center mt-3'>
          <span>
            {page >= 1 && (
              <button onClick={()=>setPage(page-1)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Previous
              </button>
            )}
            <span>
              {page} -
              {parseInt(total / 6)}
            </span>
            {page < total && (
              <button onClick={()=>setPage(page+1)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Next
              </button>
            )}
          </span>
          </div>
    </div>
  )
}
