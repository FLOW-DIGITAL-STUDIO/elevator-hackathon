import { Joueur } from "@/schema/joueur";
import React from "react";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import ImageComponent from "./ImageComponent";

type Props = {
  handleSubmit: UseFormHandleSubmit<Joueur>;
  onSubmit: (data: Joueur) => void;
  register: UseFormRegister<Joueur>;
  errors: FieldErrors<Joueur>;
  message: string | null;
  defaultValues?: Joueur;
  image: string | File;
  setImage: React.Dispatch<React.SetStateAction<string | File>>;
};

const Field = ({
  label,
  name,
  type,
  register,
  defaultValue,
  error,
}: {
  label: string;
  name: keyof Joueur;
  type: string;
  register: UseFormRegister<Joueur>;
  defaultValue?: any;
  error?: string;
}) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-cyan-900 font-bold ">{label}</label>
      <input
        {...register(name, { required: true })}
        name={name}
        type={type}
        defaultValue={defaultValue}
        className="px-2 py-2 border border-gray-300 rounded-md mt-1 outline-none hover:border-cyan-900 hover:border-opacity-25 hover:border-2 active:border-opacity-1 "
      />
      {error && <p className="text-red-700 font-semibold">{error}</p>}
    </div>
  );
};

export default function PlayerForm({
  handleSubmit,
  onSubmit,
  register,
  errors,
  message,
  defaultValues,
  image,
  setImage,
}: Props) {
  return (
    <div className="flex row justify-between">
      <ImageComponent image={image} setImage={setImage} />
      <div className="w-1/2">
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <Field
            label="Nom"
            name="firstname"
            type="text"
            register={register}
            defaultValue={defaultValues?.firstname}
            error={errors.firstname?.message}
          />
          <Field
            label="Prenom"
            name="lastname"
            type="text"
            register={register}
            defaultValue={defaultValues?.lastname}
            error={errors.lastname?.message}
          />
          <Field
            label="Salaire annuel"
            name="salary"
            type="number"
            register={register}
            defaultValue={defaultValues?.salary}
            error={errors.salary?.message}
          />
          <Field
            label="Nombre de but"
            name="goal"
            type="number"
            register={register}
            defaultValue={defaultValues?.goal}
            error={errors.goal?.message}
          />
          <button
            type="submit"
            className="bg-cyan-900 text-white px-2 py-2 rounded-md mt-4 "
          >
            Submit
          </button>
        </form>
        {message && <p className="text-red-700 font-semibold">{message}</p>}
      </div>
    </div>
  );
}
