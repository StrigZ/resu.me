"use client";

import { Dispatch, SetStateAction, useState } from "react";

import CVContentEditor from "./CVContentEditor/CVContentEditor";
import CVThemeEditor from "./CVThemeEditor/CVThemeEditor";
import CVActionButtons from "./CVActionButtons";
import EditorTabs from "./EditorTabs";
import { ThemeLayout, ThemeColors, Theme, ThemeFonts } from "~/app/page";

export type CardName = "education" | "experience" | null;
export type EditorTabsType = "content" | "customize";

type Props = {
  activeLayout: ThemeLayout;
  activeColors: ThemeColors;
  activeFonts: ThemeFonts;
  setTheme: Dispatch<SetStateAction<Theme>>;
};
export default function Sidebar({
  setTheme,
  activeColors,
  activeFonts,
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
          activeColors={activeColors}
          activeFonts={activeFonts}
        />
      )}
    </aside>
  );
}
