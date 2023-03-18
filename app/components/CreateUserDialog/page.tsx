'use client';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  salary: z.string(),
  goal: z.number(),
});

export const Create = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
  });
  const [disabled, startTransition] = React.useTransition();
  const [loading, setLoading] = React.useState(false);
  const onSubmit = (data: any) => {
    setLoading(true);
    console.log(data);
    fetch('/api/players', {
      method: 'post',
      body: JSON.stringify({ ...data, pictureURl: '', devise: '$' }),
    })
      .then(() => {
        startTransition(() => router.refresh());
      })
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <dialog
      open={open}
      onSubmit={handleSubmit(onSubmit)}
      className=" w-1/2 top-[30%] bg-slate-300 white h-1/2 left-1/2 -translate-x-1/2 flex flex-row justify-center"
    >
      <button onClick={() => onClose()} className="absolute left-0">
        back
      </button>
      <div className="flex flex-row items-center justify-center">
        <form className="flex flex-col bg-white w-full gap-5">
          <input
            placeholder="Nom*"
            {...register('firstName')}
            className={errors?.firstName ? 'border border-red' : ''}
            disabled={disabled || loading}
          />
          <input placeholder="Prenom*" {...register('lastName')} />
          <input
            placeholder="salary*"
            onChange={(e) =>
              e?.target?.value && setValue('salary', e?.target.value)
            }
            type="number"
            className={errors?.firstName ? 'border border-red' : ''}
            disabled={disabled || loading}
          />
          <input
            placeholder="salary*"
            onChange={(e) =>
              e?.target?.value &&
              setValue('goal', parseInt(e?.target.value, 10))
            }
            type="number"
            className={errors?.firstName ? 'border border-red' : ''}
            disabled={disabled || loading}
          />
          <input
            placeholder="devise*"
            {...register('devise')}
            type="string"
            className={errors?.firstName ? 'border border-red' : ''}
            disabled={disabled || loading}
          />
          <input type="submit" />
        </form>
      </div>
    </dialog>
  );
};
