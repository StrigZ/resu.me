"use client";

import { useState } from "react";
import CV from "~/components/CV/CV";
import Sidebar from "~/components/Sidebar/Sidebar";

export type LayoutType = "top" | "left" | "right";

export type ThemeType = {
  layout: LayoutType;
  accentColor: string;
  font: string;
};

export default function HomePage() {
  const [theme, setTheme] = useState<ThemeType>({
    layout: "top",
    accentColor: "#312e81",
    font: "",
  });

  return (
    <>
      <Sidebar
        setTheme={setTheme}
        activeAccentColor={theme.accentColor}
        activeFont={theme.font}
        activeLayout={theme.layout}
      />
      <CV theme={theme} />
    </>
  );
}
