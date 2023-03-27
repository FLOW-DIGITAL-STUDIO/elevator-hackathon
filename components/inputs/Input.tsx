import React from "react";
import type {
  FieldErrors,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { default as cn } from "classnames";

interface InputProps {
  errors: FieldErrors<FieldValues>;
  loading: boolean;
  register: UseFormRegister<FieldValues>;
  field: string;
  name: string;
  type: string;
}

export default function Input(props: InputProps): JSX.Element {
  const { errors, register, loading, field, name, type } = props;
  return (
    <div className="flex flex-col">
      <label className="text-xs text-gray-400" htmlFor="nom">
        {name}
      </label>
      <input
        id="nom"
        placeholder={name}
        className={cn(
          "text-md outline-none border border-gray-200 rounded-md px-2"
        )}
        type={type}
        disabled={loading}
        {...register(field, {
          setValueAs(value) {
            if (type === "number") {
              return value ? parseInt(value, 10) : 0;
            }
            return value;
          },
        })}
      />
      <ErrorMessage
        errors={errors}
        name={field}
        render={({ message }) =>
          message && <span className="text-[10px] text-red-500">{message}</span>
        }
      />
    </div>
  );
}
