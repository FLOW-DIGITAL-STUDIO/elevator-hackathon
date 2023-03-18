"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { JoueurSchema } from "@/schema/joueur";
import { createJoueur } from "@/services/joueurs";
import { useRouter } from 'next/navigation';
type Props = {};

export default function Page({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(JoueurSchema)
  });

  const router = useRouter();
  const onSubmit = (data: any) => {
    createJoueur(data).then((res) => {
        router.push('/')
    }).catch((err) => {
        console.log(err);
    });
  };

  return (
    <div className="flex row justify-between">
      <div className="w-1/3 bg-cyan-200"></div>
      <div className="w-1/2">
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label className="text-sm text-cyan-900 font-bold ">Nom</label>
            <input
              {...register("firstname", { required: true })}
              name="firstname"
              type="text"
              className="px-2 py-2 border border-gray-300 rounded-md mt-1 outline-none hover:border-cyan-900 hover:border-opacity-25 hover:border-2 active:border-opacity-1 "
            />
            <p className="text-red-700 font-semibold">
              {/* @ts-ignore */}
              {errors.firstname?.message}
            </p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-cyan-900 font-bold ">Prenom</label>
            <input
              {...register("lastname", { required: true })}
              name="lastname"
              type="text"
              className="px-2 py-2 border border-gray-300 rounded-md mt-1 outline-none hover:border-cyan-900 hover:border-opacity-25 hover:border-2 active:border-opacity-1 "
            />
            <p className="text-red-700 font-semibold">
              {/* @ts-ignore */}
              {errors.lastname?.message}
            </p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-cyan-900 font-bold ">
              Salaire annuel
            </label>
            <input
              {...register("salary", { required: true })}
              name="salary"
              type="number"
              className="px-2 py-2 border border-gray-300 rounded-md mt-1 outline-none hover:border-cyan-900 hover:border-opacity-25 hover:border-2 active:border-opacity-1 "
            />
            <p className="text-red-700 font-semibold">
              {/* @ts-ignore */}
              {errors.salary?.message}
            </p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-cyan-900 font-bold ">
              Nombre de but
            </label>
            <input
              {...register("goal", { required: true })}
              name="goal"
              type="number"
              className="px-2 py-2 border border-gray-300 rounded-md mt-1 outline-none hover:border-cyan-900 hover:border-opacity-25 hover:border-2 active:border-opacity-1 "
            />
            <p className="text-red-700 font-semibold">
              {/* @ts-ignore */}
              {errors.goal?.message}
            </p>
          </div>
          <button type="submit" className="bg-cyan-900 text-white px-2 py-2 rounded-md mt-4 ">
            Submit
          </button> 
        </form>
      </div>
    </div>
  );
}
