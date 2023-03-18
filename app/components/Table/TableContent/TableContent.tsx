import React from 'react';
import Flex from '../../Flex/Flex';
import props from '../../../../interfaces/props';
const TableContent: React.FC<props.TableContentProps> = ({ player }) => {
  const { id, firstname, lastname, goal, salary, devise } = player;
  const deletedPlayer = () => {
    fetch(`http://localhost:3000/api/deletePlayer?id=${id}`, {
      method: 'DELETE',
    });
  };
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
      <p className='w-[50px]'>{goal}</p>
      <Flex
        flexDirection='flex-row'
        justifyContent='justify-start'
        alignItems='items-start'
        className='gap-[20px]'
      >
        <button className='cursor-pointer'>edit</button>
        <button className='cursor-pointer'>copy</button>
        <button className='cursor-pointer' onClick={() => deletedPlayer()}>
          delete
        </button>
      </Flex>
    </Flex>
  );
};

export default TableContent;
