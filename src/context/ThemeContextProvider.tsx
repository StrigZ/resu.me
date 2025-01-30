"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import {
  Theme,
  ThemeColorsProperties,
  ThemeFontFamilies,
  ThemeFontsProperties,
  ThemeLayout,
} from "~/types";
import { defaultTheme } from "~/utils/defaultValues";

export const ThemeFontFamiliesArray = [
  "sans-serif",
  "serif",
  "monospace",
] as const;

type ThemeContext = {
  theme: Theme;
  handleLayoutChange: (value: ThemeLayout) => void;
  handleColorChange: (property: ThemeColorsProperties, value: string) => void;
  handleFontChange: (
    property: ThemeFontsProperties,
    value: ThemeFontFamilies,
  ) => void;
};

const ThemeContext = createContext<ThemeContext>({
  theme: defaultTheme,
  handleFontChange() {},
  handleColorChange() {},
  handleLayoutChange() {},
});

export const useThemeContext = () => useContext(ThemeContext);

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const handleLayoutChange = (value: ThemeLayout) =>
    setTheme((prev) => ({ ...prev, layout: value }));
  const handleColorChange = (property: ThemeColorsProperties, value: string) =>
    setTheme((prev) => ({
      ...prev,
      colors: { ...prev.colors, [property]: value },
    }));
  const handleFontChange = (
    property: ThemeFontsProperties,
    value: ThemeFontFamilies,
  ) =>
    setTheme((prev) => ({
      ...prev,
      fonts: { ...prev.fonts, [property]: value },
    }));

  const value: ThemeContext = {
    theme,
    handleColorChange,
    handleFontChange,
    handleLayoutChange,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
