'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
function Form() {
  const schema = z.object({
    firstname: z.string().nonempty(),
    lastname: z.string().nonempty(),
    salary: z.number().min(1),
    goal: z.number().min(1),
    pictureURl: z.string().nonempty(),
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    console.log(data);

    await fetch('http://localhost:3000/api/players/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    });
  };
  const onCancel = () => {
    reset();
  };

  return (
    <form
      className='flex flex-row items-center justify-center h-full gap-8'
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className='relative w-[250px] h-[250px] border-2'>
        <input
          type='file'
          className='absolute w-full h-full opacity-0'
          onChange={(e) => setValue('pictureURl', e?.target?.files?.[0].name)}
        />
      </div>
      <div className='w-full'>
        <div className='forminput'>
          <p>Nom</p>
          <input type='text' className='w-full border-2' {...register('firstname')} />
        </div>
        <div className='forminput'>
          <p>Prenom</p>
          <input type='text' className='w-full border-2' {...register('lastname')} />
          {errors.lastname && <p className='text-red-400'>invalid lastname</p>}
        </div>
        <div>
          <p>salary</p>
          <input
            type='number'
            className='w-full border-2'
            onChange={(e) => setValue('salary', parseInt(e.target.value))}
          />
          {errors.salary && <p className='text-red-400'>invalid salary</p>}
        </div>
        <div>
          <p>goals</p>
          <input type='number' className='w-full border-2' {...register('goals')} />
          {errors.goals && <p className='text-red-400'>invalid goals</p>}
        </div>
        <div className='flex flex-row items-center justify-center gap-4 mt-4 '>
          <button type='submit' className='text-white bg-primary'>
            Submit
          </button>
          <button type='button' onClick={() => onCancel()}>
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
