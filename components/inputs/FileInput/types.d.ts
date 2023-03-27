import {
  FieldValues,
  UseFormWatch,
  UseFormSetValue,
  FieldErrors,
} from "react-hook-form";

export type TFileInutProps = {
  setValue: UseFormSetValue<FieldValues>;
  watch: UseFormWatch<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

export type TFilePreviewProps = {
  handleClick: () => void;
  watchShowImage: string;
  status: number | undefined;
  uploading: boolean;
  preview: File | undefined;
};

export type TUploadButton = {
  preview: File | undefined;
  uploading: boolean;
  handleUpload: () => void;
};
