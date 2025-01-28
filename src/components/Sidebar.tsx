"use client";

import { useState } from "react";

import EditorTabs from "./EditorTabs";
import CVContentEditor from "./CVContentEditor";
import CVThemeEditor from "./CVThemeEditor";
import CVActionButtons from "./CVActionButtons";

export type CardName = "education" | "experience" | null;
export type EditorTabsType = "content" | "customize";

type Props = {};
export default function Sidebar({}: Props) {
  const [visibleCardName, setVisibleCardName] = useState<CardName>(null);
  const [activeTab, setActiveTab] = useState<EditorTabsType>("content");

  const handleCardCollapse = (cardName: CardName) =>
    setVisibleCardName((prev) => (prev === cardName ? null : cardName));
  const handleTabSwitch = (tabName: EditorTabsType) => setActiveTab(tabName);

  return (
    <aside className="col-span-2 flex flex-col gap-4 md:col-span-1">
      <EditorTabs activeTab={activeTab} handleTabSwitch={handleTabSwitch} />
      <CVActionButtons handleLoadExample={() => {}} handleRestCV={() => {}} />
      {activeTab === "content" && (
        <CVContentEditor
          handleCardCollapse={handleCardCollapse}
          visibleCardName={visibleCardName}
        />
      )}
      {activeTab === "customize" && <CVThemeEditor />}
    </aside>
  );
}
