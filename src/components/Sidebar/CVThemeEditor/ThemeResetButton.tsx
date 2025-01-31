import { RiResetLeftFill } from "react-icons/ri";
import type { Theme } from "~/types";

type Props = {
  handleThemeReset: (type: keyof Theme | "all") => void;
};
export default function ThemeResetButton({ handleThemeReset }: Props) {
  return (
    <button
      className="mt-4 flex w-full items-center justify-center gap-2 bg-gray-200 p-4 text-xl font-semibold leading-none transition-colors hover:bg-gray-300 active:scale-95"
      type="button"
      onClick={() => handleThemeReset("colors")}
    >
      Reset
      <RiResetLeftFill />
    </button>
  );
}
