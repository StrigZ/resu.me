import { cn } from "~/utils/utils";
import Card from "~/components/Card";
import { useThemeContext } from "~/context/ThemeContextProvider";
import { RiResetLeftFill } from "react-icons/ri";

const BUTTON_STYLES =
  "flex-1 justify-center rounded-md p-1.5 font-semibold transition-colors active:scale-95";

type Props = {};
export default function ThemeActionButtons({}: Props) {
  const { resetTheme } = useThemeContext();

  return (
    <Card className="flex flex-col gap-1 p-4 text-sm sm:flex-row">
      <button
        className={cn(
          "flex items-center gap-1 text-red-500 hover:bg-red-300 hover:text-red-800",
          BUTTON_STYLES,
        )}
        onClick={() => resetTheme("all")}
      >
        <RiResetLeftFill />
        Reset Theme
      </button>
    </Card>
  );
}
