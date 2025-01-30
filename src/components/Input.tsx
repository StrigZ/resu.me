import { InputHTMLAttributes } from "react";
import { cn } from "~/utils/utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  className?: string;
}
export default function Input({ labelText, className, ...inputProps }: Props) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label className="text-lg font-semibold" htmlFor={inputProps.id}>
        {labelText}
      </label>
      <input className="rounded-md bg-gray-200 p-2" {...inputProps} />
    </div>
  );
}
