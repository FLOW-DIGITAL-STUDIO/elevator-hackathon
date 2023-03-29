import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase/firebase-config";
import Image from "next/image";
import { IconPencil } from "@tabler/icons";

type FileWithPreview = File & {
  preview: string;
};

const uploadImageToFirebaseStorage = async (
  file: FileWithPreview,
  folderPath: string,
    setProgress: React.Dispatch<React.SetStateAction<number>>
): Promise<string> => {
  const storageRef = ref(storage, `${folderPath}/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload is " + progress + "% done");
        setProgress(progress);
    },
    (error) => {
      console.log(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
      });
    }
  );

  return await getDownloadURL(uploadTask.snapshot.ref);
};

const ImageUploader = ({
  image,
  setImage,
}: {
  image: string | File;
  setImage: React.Dispatch<React.SetStateAction<string | File>>;
}) => {
  const [selectedFile, setSelectedFile] = useState<FileWithPreview | null>(
    null
  );
  const [progress, setProgress] = useState<number>(0);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        const fileWithPreview: FileWithPreview = Object.assign(file, {
          preview: reader.result as string,
        });
        setSelectedFile(fileWithPreview);
      };
    }
  };

  const handleUploadClick = async () => {
    if (selectedFile) {
      uploadImageToFirebaseStorage(
        selectedFile,
        "images",
        setProgress
      ).then((downloadURL) => {
        console.log(downloadURL);
        setImage(downloadURL);
      }).catch((error) => {
        console.log(error);
      });
    }
  };
  const getImageSrc = () => {
    if (selectedFile) return selectedFile.preview;
    if (image !== "") return image;
    return "https://www.grouphealth.ca/wp-content/uploads/2018/05/placeholder-image.png";
  };
  return (
    <div className="relative">
      <label
        htmlFor="image-upload"
        className="absolute top-2 right-2 cursor-pointer bg-slate-100 rounded-sm p-1 "
      >
        <IconPencil size={20} />
      </label>
      <input
        id="image-upload"
        type="file"
        name="image"
        className="hidden"
        accept="image/*"
        onChange={handleFileChange}
      />

      <Image
        src={getImageSrc()}
        alt="player"
        width={200}
        height={200}
        className="w-full h-full object-cover rounded-md shadow-md border-solid border-2 border-cyan-600"
      />
      <button
        className="bg-cyan-900 text-white px-2 py-2 rounded-md mt-4 "
        onClick={handleUploadClick}
      >
        Upload
      </button>
        {progress > 0 && (
            <>
                <div className="w-full h-2 bg-gray-300 rounded-full mt-2">
            <div
                className="h-full bg-cyan-900 rounded-full"
                style={{ width: `${progress}%` }}
            />
        </div>
        {progress === 100 && (
            <div className="text-cyan-900 text-sm">Upload Complete</div>
        )}
            </>
        )}
    </div>
  );
};

export default ImageUploader;
