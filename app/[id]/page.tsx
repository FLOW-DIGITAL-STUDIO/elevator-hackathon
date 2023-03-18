import React from 'react';
import Flex from '../components/Flex/Flex';
import Link from 'next/link';
function CreatePage() {
  return (
    <Flex flexDirection='flex-col'>
      <Link href='/'>
        <div className='flex justify-start w-full text-3xl align-start'>Back</div>
      </Link>
    </Flex>
  );
}

export default CreatePage;
