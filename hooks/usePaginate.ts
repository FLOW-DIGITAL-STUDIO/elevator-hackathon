import { useState } from 'react';

export const usePaginate = (items: Array<any>, itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(items.length / itemsPerPage);
  function nextPage() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  }
  function prevPage() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }
  function goToPage(page: number) {
    const pageNumber = Math.max(1, Math.min(page, maxPage));
    setCurrentPage(pageNumber);
  }
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);
  return {
    currentItems,
    maxPage,
    nextPage,
    prevPage,
    goToPage,
  };
};
