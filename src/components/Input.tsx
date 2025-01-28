import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}
export default function Input({ labelText, ...inputProps }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-lg font-semibold" htmlFor={inputProps.id}>
        {labelText}
      </label>
      <input className="rounded-md bg-gray-200 p-2" {...inputProps} />
    </div>
  );
}
