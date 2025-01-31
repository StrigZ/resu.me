import Card from "../Card";
import { cn } from "~/utils/utils";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaPaintbrush } from "react-icons/fa6";
import type { EditorTabsType } from "./Sidebar";

const BUTTON_STYLES =
  "flex flex-col items-center gap-1 flex-1 text-lg justify-center rounded-md p-1.5 font-semibold transition-colors active:scale-95";

const ACTIVE_STYLES = "bg-gray-200 hover:bg-gray-300";

type Props = {
  activeTab: EditorTabsType;
  handleTabSwitch: (tabName: EditorTabsType) => void;
};
export default function EditorTabs({ handleTabSwitch, activeTab }: Props) {
  return (
    <Card className="flex flex-col gap-1 p-2 text-sm sm:flex-row">
      <button
        className={cn(BUTTON_STYLES, {
          [ACTIVE_STYLES]: activeTab === "content",
        })}
        onClick={() => handleTabSwitch("content")}
      >
        <IoDocumentTextOutline />
        Content
      </button>
      <button
        className={cn(BUTTON_STYLES, {
          [ACTIVE_STYLES]: activeTab === "customize",
        })}
        onClick={() => handleTabSwitch("customize")}
      >
        <FaPaintbrush />
        Customize
      </button>
    </Card>
  );
}
