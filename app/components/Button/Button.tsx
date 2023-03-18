import React from 'react';
import Flex from '../Flex/Flex';

function Button() {
  return (
    <Flex
      flexDirection='flex-row'
      justifyContent='justify-center'
      alignItems='items-center'
      className='gap-4 border-2 rounded-md shadow-lg px-8 py-2 text-white bg-primary'
    >
      <p className='font-bold text-lg'>+</p>
      <p className='font-bold text-lg uppercase'>ajouter un joueur</p>
    </Flex>
  );
}

export default Button;
