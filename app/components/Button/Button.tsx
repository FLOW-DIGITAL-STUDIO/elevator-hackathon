import React from 'react';
import Flex from '../Flex/Flex';
import Link from 'next/link';
function Button() {
  return (
    <Link href={'/create'}>
      <Flex
        flexDirection='flex-row'
        justifyContent='justify-center'
        alignItems='items-center'
        className='gap-4 px-8 py-2 text-white border-2 rounded-md shadow-lg bg-primary'
      >
        <p className='text-lg font-bold'>+</p>
        <p className='text-lg font-bold uppercase'>ajouter un joueur</p>
      </Flex>
    </Link>
  );
}

export default Button;
