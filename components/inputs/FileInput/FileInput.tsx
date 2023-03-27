import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import UploadButton from "./UploadButton";
import { default as cn } from "classnames";
import FilePreview from "./FilePreview";
import { TFileInutProps } from "./types.d";
import { ErrorMessage } from "@hookform/error-message";

export default function FileInput(props: TFileInutProps) {
  const { setValue, watch, errors } = props;
  const ref = useRef<HTMLInputElement>(null);
  const watchShowImage = watch("pictureURL");
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<number>();
  const [preview, setPreview] = useState<File>();

  const handleClick = () => {
    ref.current?.click();
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];
    const formData = new FormData();

    if (file) {
      formData.append("picture", file);
      setPreview(file);
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();

    if (!preview) {
      return;
    }

    formData.append("file", preview);
    formData.append("api_key", "852834281929859");
    formData.append("public_id", "sample_image");
    formData.append("upload_preset", "ml_default");

    try {
      setUploading(true);
      const result = await fetch(
        "https://api.cloudinary.com/v1_1/dmntdw6z3/raw/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      if (result.ok) {
        const data = await result.json();

        setValue("pictureURL", data?.secure_url);
        setStatus(200);
      }
      setUploading(false);
    } catch (error) {
      setStatus(400);
    }
  };

  return (
    <div className="w-[30%] flex flex-col items-center ">
      <FilePreview
        handleClick={handleClick}
        preview={preview}
        status={status}
        uploading={uploading}
        watchShowImage={watchShowImage}
      />
      <div className="w-full py-1">
        <input
          ref={ref}
          id="imageFile"
          type="file"
          className="absolute opacity-0 -z-10"
          onChange={handleOnChange}
        />
        <div className="flex flex-col w-full">
          <ErrorMessage
            name="pictureURL"
            errors={errors}
            render={({ message }) => (
              <span
                className={cn(
                  "text-xs text-red-500 py-1",
                  message ? "opacity-100" : "opacity-0"
                )}
              >{`${message || "empty"}`}</span>
            )}
          />
          <UploadButton
            handleUpload={handleUpload}
            preview={preview}
            uploading={uploading}
          />
        </div>
      </div>
    </div>
  );
}
