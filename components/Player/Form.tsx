"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SaveAdd } from "iconsax-react";
import FileInput from "@/components/inputs/FileInput/FileInput";
import { TFormProps, playerSchema, TPlayerSchema } from "./types.d";
import Input from "@/components/inputs/Input";
import { useRouter } from "next/navigation";

export default function Form(props: TFormProps) {
  const { defaultValues, endPoint } = props;
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(playerSchema),
    defaultValues: !defaultValues ? { profileURL: "" } : defaultValues,
  });
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const onSubmit = (data: TPlayerSchema) => {
    setLoading(true);

    fetch(endPoint, {
      method: "post",
      body: JSON.stringify({ ...data }),
    }).finally(() => setLoading(false));
  };

  const fields = [
    { name: "Nom *", field: "firstName", type: "text" },
    { name: "Prenom *", field: "lastName", type: "text" },
    { name: "Numero de but", field: "goal", type: "number" },
  ];

  return (
    <form
      className="flex flex-col bg-white w-full h-full p-5 border-gray-400 border rounded-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-row w-full">
        <FileInput errors={errors} setValue={setValue} watch={watch} />
        <div className="flex flex-col w-full h-full min-h-[200px] px-10 justify-between">
          {fields.map((e) => (
            <Input
              key={e?.field}
              errors={errors}
              register={register}
              field={e?.field}
              name={e?.name}
              type={e?.type}
              loading={loading}
            />
          ))}
          <div className="flex flex-row  gap-2">
            <div className="w-full">
              <Input
                errors={errors}
                register={register}
                field="salary"
                name="Salaire annuel"
                type="number"
                loading={loading}
              />
            </div>
            <div className="w-[20%]">
              <Input
                errors={errors}
                register={register}
                field="devise"
                name="Devise"
                type="text"
                loading={loading}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end px-8 gap-5">
        <button
          className="px-4 text-sm rounded-md bg-gray-800 text-white hover:bg-white hover:text-gray-800 flex flex-row border hover:border-gray-800 items-center gap-2 transition-all"
          type="submit"
        >
          <span>submit</span>
          <SaveAdd size={14} />
        </button>
        <input
          type="button"
          value="annuler"
          className="border border-gray-800 px-4 text-sm rounded-md cursor-pointer"
          onClick={() => router.back()}
        />
      </div>
    </form>
  );
}
