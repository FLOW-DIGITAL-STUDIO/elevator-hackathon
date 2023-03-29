'use client'
import React from 'react'
import ImageUploader from './ImageUploader'

type Props = {
  image: string | File
  setImage: React.Dispatch<React.SetStateAction<string | File>>
}

export default function ImageComponent({ image, setImage }: Props) {
  return (
    <div className={'w-1/3'}>
      <ImageUploader image={image} setImage={setImage} />
    </div>
  )
}
