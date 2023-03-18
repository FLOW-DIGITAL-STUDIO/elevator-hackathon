import React from 'react';
import Flex from '../Flex/Flex';
import props from '../../../interfaces/props';
const Pagination: React.FC<props.PaginationProps> = ({ goToPage, nextPage, prevPage, maxPage }) => {
  const pagesNumbers = Array(maxPage)
    .fill(0)
    .map((_, index) => index + 1);
  return (
    <Flex
      flexDirection='flex-row'
      justifyContent='justify-center'
      alignItems='items-center'
      className='gap-8'
    >
      <button onClick={() => prevPage()}>prev</button>
      {pagesNumbers.map((number: number) => (
        <p className='cursor-pointer' onClick={() => goToPage(number)} key={number}>
          {number}
        </p>
      ))}
      <button onClick={() => nextPage()}>next</button>
    </Flex>
  );
};

export default Pagination;
