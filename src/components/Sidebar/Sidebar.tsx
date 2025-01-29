"use client";

import { Dispatch, SetStateAction, useState } from "react";

import CVContentEditor from "./CVContentEditor/CVContentEditor";
import CVThemeEditor from "./CVThemeEditor/CVThemeEditor";
import CVActionButtons from "./CVActionButtons";
import EditorTabs from "./EditorTabs";
import { LayoutType, ThemeType } from "~/app/page";

export type CardName = "education" | "experience" | null;
export type EditorTabsType = "content" | "customize";

type Props = {
  activeLayout: LayoutType;
  activeAccentColor: string;
  activeFont: string;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
};
export default function Sidebar({
  setTheme,
  activeAccentColor: activeColor,
  activeFont,
  activeLayout,
}: Props) {
  const [activeTab, setActiveTab] = useState<EditorTabsType>("customize");

  const handleTabSwitch = (tabName: EditorTabsType) => setActiveTab(tabName);

  return (
    <aside className="col-span-2 flex flex-col gap-4 md:col-span-1">
      <EditorTabs activeTab={activeTab} handleTabSwitch={handleTabSwitch} />
      <CVActionButtons handleLoadExample={() => {}} handleRestCV={() => {}} />
      {activeTab === "content" && <CVContentEditor />}
      {activeTab === "customize" && (
        <CVThemeEditor
          setTheme={setTheme}
          activeLayout={activeLayout}
          activeColor={activeColor}
          activeFont={activeFont}
        />
      )}
    </aside>
  );
}
