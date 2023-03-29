'use client'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Joueur, JoueurSchema } from '@/schema/joueur'
import { editJoueur, getJoueurById } from '@/services/joueurs'
import { useRouter } from 'next/navigation'
import PlayerForm from '@/app/components/PlayerForm'

type props = {
  searchParams: {
    [key: string]: string
  }
}

export default function Page({ searchParams }: props) {
  const { id } = searchParams
  const [message, setMessage] = React.useState<string | null>(null)
  const [PlayerData, setPlayerData] = React.useState<Joueur | undefined>(
    undefined,
  )
  const [image, setImage] = React.useState<File | string>(
    PlayerData?.pictureURl || '',
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Joueur>({
    resolver: zodResolver(JoueurSchema),
  })

  const router = useRouter()
  const onSubmit = (data: Joueur) => {
    console.log(image)
    editJoueur({
      id: Number(id),
      pictureURl: image as string,
      ...data,
    })
      .then(() => {
        router.push('/')
      })
      .catch(err => {
        console.log(err)
        setMessage('Une erreur est survenue')
      })
  }

  useEffect(() => {
    getJoueurById(id)
      .then(res => {
        setPlayerData(res.data)
        setImage(res.data.pictureURl)
        reset(res.data)
      })
      .catch(err => {
        console.log(err)
        setMessage('Une erreur est survenue')
      })
    return () => setPlayerData(undefined)
  }, [id, reset])
  return (
    <PlayerForm
      errors={errors}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      register={register}
      message={message}
      defaultValues={PlayerData}
      image={image}
      setImage={setImage}
    />
  )
}
