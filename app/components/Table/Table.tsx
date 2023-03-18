import React from 'react';
import Flex from '../Flex/Flex';
import props from '../../../interfaces/props';
import TableHeader from './TableHeader/TableHeader';
import TableContent from './TableContent/TableContent';
const Table: React.FC<props.ContainerProps> = ({ children }) => {
  return (
    <Flex
      flexDirection='flex-col'
      justifyContent='justify-start'
      alignItems='items-start'
      className='p-8 border-2 w-fit'
    >
      {children}
    </Flex>
  );
};

export default Object.assign(Table, { Header: TableHeader, Content: TableContent });
