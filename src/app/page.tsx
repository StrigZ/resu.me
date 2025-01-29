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
export type ThemeColors = Record<ThemeColorsProperties, string>;

export type ThemeLayout = "top" | "left" | "right";

export type ThemeFontsProperties = "headings" | "text";
export const ThemeFontFamiliesArray = [
  "sans-serif",
  "serif",
  "monospace",
] as const;
export type ThemeFontFamilies = (typeof ThemeFontFamiliesArray)[number];
export type ThemeFonts = Record<ThemeFontsProperties, ThemeFontFamilies>;

export type Theme = {
  layout: ThemeLayout;
  colors: ThemeColors;
  fonts: ThemeFonts;
};

export default function HomePage() {
  const [theme, setTheme] = useState<Theme>({
    layout: "top",
    colors: {
      "header-bg": "#312e81",
      "header-text": "#fff",
      "body-bg": "#fff",
      "body-text": "#000",
      "separators-bg": "#f3f4f6",
    },
    fonts: {
      headings: "sans-serif",
      text: "sans-serif",
    },
  });

  return (
    <>
      <Sidebar
        setTheme={setTheme}
        activeColors={theme.colors}
        activeFonts={theme.fonts}
        activeLayout={theme.layout}
      />
      <CV theme={theme} />
    </>
  );
}
