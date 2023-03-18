import React from 'react';
import Flex from '../Flex/Flex';
import Button from '../Button/Button';
function Navbar() {
  return (
    <Flex
      flexDirection='flex-row'
      justifyContent='justify-between'
      alignItems='items-center'
      className='px-[10%] py-4 border-b-2 border-title-color'
    >
      <h1 className='text-3xl font-semibold text-title-color'>List des Joueurs</h1>
      <Button />
    </Flex>
  );
}

export default Navbar;
