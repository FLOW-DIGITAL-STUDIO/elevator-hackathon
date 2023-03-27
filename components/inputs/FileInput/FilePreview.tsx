import React from "react";
import { DocumentUpload } from "iconsax-react";
import { TFilePreviewProps } from "./types.d";

export default function FilePreview(props: TFilePreviewProps) {
  const { handleClick, watchShowImage, preview, uploading, status } = props;
  return (
    <button
      className="w-[220px] h-[220px] flex flex-row justify-center itemss-center border-dashed border rounded-md relative"
      onClick={handleClick}
      type="button"
    >
      {watchShowImage && (
        <img
          alt="selected picture"
          width={100}
          height={100}
          src={preview ? URL.createObjectURL(preview) : watchShowImage}
          className="absolute bottom-0 rounded-md"
        />
      )}
      <div className="flex flex-col self-center w-full h-fit items-center justify-center bg-white overflow-hidden">
        <DocumentUpload size={48} className="text-gray-800" />
        <div className="text-xs font-light flex flex-col">
          <span>{uploading ? "Uploading..." : "Upload files"}</span>
          {status === 200 && <span className="text-green-500">success</span>}
        </div>
      </div>
    </button>
  );
}
