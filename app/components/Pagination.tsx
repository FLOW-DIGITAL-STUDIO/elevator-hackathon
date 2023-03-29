import Link from 'next/link'
import React, { useMemo } from 'react'

type Props = {
  page: number
  total: number
}

function generatePrevLink(page: number) {
  return (
    <Link
      className={
        page <= 1
          ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      }
      href={page <= 1 ? '#' : `?page=${page - 1}`}
      aria-label='Previous page'
    >
      Previous
    </Link>
  )
}

function generateNextLink(page: number, total: number) {
  return (
    <Link
      className={
        page >= Math.ceil(total / 6)
          ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed'
          : 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
      }
      href={page >= Math.ceil(total / 6) ? '#' : `?page=${page + 1}`}
      aria-label='Next page'
    >
      Next
    </Link>
  )
}

function usePageRangeText(page: number, total: number) {
  const totalPages = useMemo(() => Math.ceil(total / 6), [total])
  return `${page} - ${totalPages}`
}

export default function Pagination({ page, total }: Props) {
  return (
    <div className='flex row justify-center mt-10'>
      <span>
        {page >= 1 && generatePrevLink(page)}
        <span>{usePageRangeText(page, total)}</span>
        {page < total && generateNextLink(page, total)}
      </span>
    </div>
  )
}
