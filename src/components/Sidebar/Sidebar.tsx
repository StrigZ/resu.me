"use client";

import { useState } from "react";

import CVContentEditor from "./CVContentEditor/CVContentEditor";
import CVThemeEditor from "./CVThemeEditor/CVThemeEditor";
import EditorTabs from "./EditorTabs";
import CVActionButtons from "./CVContentEditor/CVActionButtons";
import ThemeActionButtons from "./CVThemeEditor/ThemeActionButtons";
import { MdDownload } from "react-icons/md";
import { FaSpinner } from "react-icons/fa";

export type CardName = "education" | "experience" | null;
export type EditorTabsType = "content" | "customize";

type Props = { handlePDFDownload: () => void; isPdfLoading: boolean };
export default function Sidebar({ handlePDFDownload, isPdfLoading }: Props) {
  const [activeTab, setActiveTab] = useState<EditorTabsType>("customize");

  const handleTabSwitch = (tabName: EditorTabsType) => setActiveTab(tabName);

  return (
    <aside className="col-span-2 flex flex-col gap-4 md:col-span-1">
      <button
        className="flex items-center justify-center gap-1 rounded-md bg-white p-2 text-xl transition-colors hover:bg-gray-200 active:scale-95"
        onClick={handlePDFDownload}
      >
        {isPdfLoading ? (
          <FaSpinner className="animate-spin" />
        ) : (
          <>
            <MdDownload />
            Download PDF
          </>
        )}
      </button>
      <EditorTabs activeTab={activeTab} handleTabSwitch={handleTabSwitch} />

      {activeTab === "content" && (
        <>
          <CVActionButtons />
          <CVContentEditor />
        </>
      )}
      {activeTab === "customize" && (
        <>
          <ThemeActionButtons />
          <CVThemeEditor />
        </>
      )}
    </aside>
  );
}
