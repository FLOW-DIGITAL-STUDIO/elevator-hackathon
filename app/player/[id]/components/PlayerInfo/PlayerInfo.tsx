import React from 'react';
import Flex from '../../../../components/Flex/Flex';
// import EditForm from '../EditForm/EditForm';
import Link from 'next/link';
function PlayerInfo() {
  return (
    <Flex flexDirection='flex-col'>
      <Link href='/'>
        <div className='flex justify-start w-full text-3xl align-start'>Back</div>
      </Link>
      {/* <EditForm /> */}
    </Flex>
  );
}

export default PlayerInfo;
