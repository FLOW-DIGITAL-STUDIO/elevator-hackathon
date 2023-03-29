"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Joueur, JoueurSchema } from "@/schema/joueur";
import { createJoueur } from "@/services/joueurs";
import { useRouter } from "next/navigation";
import PlayerForm from "@/app/components/PlayerForm";
type Props = {};

export default function Page({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Joueur>({
    resolver: zodResolver(JoueurSchema),
  });

  const [message, setMessage] = React.useState<string | null>(null);
  const [image, setImage] = React.useState<File | string>("");
  const router = useRouter();
  const onSubmit = (data: Joueur) => {
    setMessage(null);
    createJoueur({
      pictureURl: image as string,
      ...data,
    })
      .then((res) => {
        if (res.error) setMessage(res.error);
        else router.push("/?page=1");
      })
      .catch((err) => {
        console.log(err);
        setMessage("Une erreur est survenue");
      });
  };

  return (
    <PlayerForm
      errors={errors}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      message={message}
      image={image}
      setImage={setImage}
    />
  );
}
