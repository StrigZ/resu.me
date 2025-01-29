"use client";

import { useState } from "react";
import CV from "~/components/CV/CV";
import Sidebar from "~/components/Sidebar/Sidebar";

export type ThemeColorsProperties =
  | "header-bg"
  | "header-text"
  | "body-bg"
  | "body-text"
  | "separators-bg";
export type LayoutType = "top" | "left" | "right";
export type ThemeColors = Record<ThemeColorsProperties, string>;

export type ThemeType = {
  layout: LayoutType;
  colors: ThemeColors;
  font: string;
};

export default function HomePage() {
  const [theme, setTheme] = useState<ThemeType>({
    layout: "top",
    colors: {
      "header-bg": "#312e81",
      "header-text": "#fff",
      "body-bg": "#fff",
      "body-text": "#000",
      "separators-bg": "#f3f4f6",
    },
    font: "",
  });

  return (
    <>
      <Sidebar
        setTheme={setTheme}
        activeColors={theme.colors}
        activeFont={theme.font}
        activeLayout={theme.layout}
      />
      <CV theme={theme} />
    </>
  );
}
