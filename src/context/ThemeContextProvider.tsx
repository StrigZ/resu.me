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

export const ThemeLayoutStyles: Record<ThemeLayout, string> = {
  top: "",
  left: "grid grid-cols-[min-content,1fr] [&>header]:col-start-1 ",
  right:
    "grid grid-cols-[1fr,min-content] [&>header]:col-start-2 [&>header]:row-span-2",
};

type ThemeContext = {
  theme: Theme;
  handleLayoutChange: (value: ThemeLayout) => void;
  handleColorChange: (property: ThemeColorsProperties, value: string) => void;
  handleFontChange: (
    property: ThemeFontsProperties,
    value: ThemeFontFamilies,
  ) => void;
  resetTheme: (type: keyof Theme | "all") => void;
};

const ThemeContext = createContext<ThemeContext>({
  theme: defaultTheme,
  handleFontChange() {},
  handleColorChange() {},
  handleLayoutChange() {},
  resetTheme(type) {},
});

export const useThemeContext = () => useContext(ThemeContext);

export default function ThemeContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const handleLayoutChange: ThemeContext["handleLayoutChange"] = (value) =>
    setTheme((prev) => ({ ...prev, layout: value }));
  const handleColorChange: ThemeContext["handleColorChange"] = (
    property,
    value,
  ) =>
    setTheme((prev) => ({
      ...prev,
      colors: { ...prev.colors, [property]: value },
    }));
  const handleFontChange: ThemeContext["handleFontChange"] = (
    property,
    value,
  ) =>
    setTheme((prev) => ({
      ...prev,
      fonts: { ...prev.fonts, [property]: value },
    }));

  const resetTheme: ThemeContext["resetTheme"] = (type) =>
    setTheme((prev) => {
      if (type === "all") {
        return defaultTheme;
      }
      return { ...prev, [type]: defaultTheme[type] };
    });

  const value: ThemeContext = {
    theme,
    handleColorChange,
    handleFontChange,
    handleLayoutChange,
    resetTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
