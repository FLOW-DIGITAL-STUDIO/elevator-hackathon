import React from 'react';
import Flex from '../../Flex/Flex';

function TableHeader() {
  const tablesHeaderTitles = ['ID', 'NOM COMPLET', 'SALAIRE ANNUEL', 'BUT', 'ACTIONS'];
  return (
    <Flex
      flexDirection='flex-row'
      justifyContent='justify-center'
      alignItems='items-start'
      className='gap-[50px]'
    >
      {tablesHeaderTitles.map((title) => (
        <p className='p-4' key={title}>
          {title}
        </p>
      ))}
    </Flex>
  );
}

export default TableHeader;
