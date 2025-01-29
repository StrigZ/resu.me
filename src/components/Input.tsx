import { InputHTMLAttributes } from "react";
import { cn } from "~/utils/utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  classNames: string;
}
export default function Input({ labelText, classNames, ...inputProps }: Props) {
  return (
    <div className={cn("flex flex-col gap-1", classNames)}>
      <label className="text-lg font-semibold" htmlFor={inputProps.id}>
        {labelText}
      </label>
      <input className="rounded-md bg-gray-200 p-2" {...inputProps} />
    </div>
  );
}
