"use client";

import { useState } from "react";

import CVContentEditor from "./CVContentEditor/CVContentEditor";
import CVThemeEditor from "./CVThemeEditor/CVThemeEditor";
import CVActionButtons from "./CVActionButtons";
import EditorTabs from "./EditorTabs";

export type CardName = "education" | "experience" | null;
export type EditorTabsType = "content" | "customize";

type Props = {};
export default function Sidebar({}: Props) {
  const [activeTab, setActiveTab] = useState<EditorTabsType>("customize");

  const handleTabSwitch = (tabName: EditorTabsType) => setActiveTab(tabName);

  return (
    <aside className="col-span-2 flex flex-col gap-4 md:col-span-1">
      <EditorTabs activeTab={activeTab} handleTabSwitch={handleTabSwitch} />
      <CVActionButtons handleLoadExample={() => {}} handleRestCV={() => {}} />
      {activeTab === "content" && <CVContentEditor />}
      {activeTab === "customize" && <CVThemeEditor />}
    </aside>
  );
}
