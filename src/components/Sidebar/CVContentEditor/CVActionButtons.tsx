import { FaTrashCan } from "react-icons/fa6";
import { cn } from "~/utils/utils";
import { useCVContext } from "~/context/CVContextProvider";
import Card from "~/components/Card";

const BUTTON_STYLES =
  "flex-1 justify-center rounded-md p-1.5 font-semibold transition-colors active:scale-95";

export default function CVActionButtons() {
  const { clearCV, loadDefaults } = useCVContext();

  return (
    <Card className="flex flex-col gap-1 p-4 text-sm sm:flex-row">
      <button
        className={cn(
          "flex items-center gap-1 text-red-500 hover:bg-red-300 hover:text-red-800",
          BUTTON_STYLES,
        )}
        onClick={() => clearCV()}
      >
        <FaTrashCan />
        Clear Resume
      </button>
      <button
        className={cn("bg-gray-200 hover:bg-gray-300", BUTTON_STYLES)}
        onClick={() => loadDefaults()}
      >
        Load Example
      </button>
    </Card>
  );
}
