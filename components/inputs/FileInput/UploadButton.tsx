import React from "react";
import { Slash, DocumentUpload } from "iconsax-react";
import { default as cn } from "classnames";
import { TUploadButton } from "./types.d";

export default function UploadButton(props: TUploadButton) {
  const { preview, handleUpload, uploading } = props;
  return (
    <button
      type="button"
      className={cn(
        "border border-gray-800 rounded-md text-sm hover:bg-gray-800 transition-all hover:text-white flex flex-row items-center justify-center gap-2 w-full",
        !preview || uploading ? "cursor-not-allowed" : "cursor-cursor"
      )}
      onClick={handleUpload}
    >
      {uploading ? "Loading..." : "Upload"}
      {!preview || uploading ? (
        <Slash size={16} />
      ) : (
        <DocumentUpload size={16} />
      )}
    </button>
  );
}
