import React from 'react';
import Flex from '../../Flex/Flex';
import props from '../../../../interfaces/props';
const TableContent: React.FC<props.TableContentProps> = ({ player }) => {
  const { id, firstname, lastname, goal, salary, devise } = player;
  return (
    <Flex
      flexDirection='flex-row'
      justifyContent='justify-start'
      alignItems='items-start'
      className='gap-[60px]'
    >
      <p className='w-[50px]'>{id.slice(0, 4)}</p>
      <p className='w-[140px]'>
        {firstname} {lastname}
      </p>
      <p className='w-[150px]'>{salary + devise}</p>
      <p>{goal}</p>
      <Flex flexDirection='flex-row' justifyContent='justify-center' alignItems='items-center'>
        <button>&#9998;</button>
        <button>copy</button>
        <button>delete</button>
      </Flex>
    </Flex>
  );
};

export default TableContent;
