"use client";

import { useState } from "react";

import CVContentEditor from "./CVContentEditor/CVContentEditor";
import CVThemeEditor from "./CVThemeEditor/CVThemeEditor";
import EditorTabs from "./EditorTabs";
import CVActionButtons from "./CVContentEditor/CVActionButtons";
import ThemeActionButtons from "./CVThemeEditor/ThemeActionButtons";

export type CardName = "education" | "experience" | null;
export type EditorTabsType = "content" | "customize";

type Props = {};
export default function Sidebar({}: Props) {
  const [activeTab, setActiveTab] = useState<EditorTabsType>("customize");

  const handleTabSwitch = (tabName: EditorTabsType) => setActiveTab(tabName);

  return (
    <aside className="col-span-2 flex flex-col gap-4 md:col-span-1">
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
