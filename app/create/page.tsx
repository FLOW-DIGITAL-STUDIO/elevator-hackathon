import React from 'react';
import Flex from '../components/Flex/Flex';
import Link from 'next/link';
import Form from './components/Form';
function CreatePage() {
  return (
    <Flex flexDirection='flex-col'>
      <Link href='/'>
        <div className='flex justify-start w-full text-3xl align-start'>Back</div>
      </Link>
      <Form />
    </Flex>
  );
}

export default CreatePage;
