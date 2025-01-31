import type { ThemeFontFamiliesArray } from "./context/ThemeContextProvider";

export type Theme = {
  layout: ThemeLayout;
  colors: ThemeColors;
  fonts: ThemeFonts;
};
export type QualificationType = "education" | "experience";
export type Qualification = {
  id: string;
  type: QualificationType;
  location?: string;
  startDate?: Date;
  endDate?: Date | null;
  name?: string;
  degreeOrRole?: string;
  description?: string;
};

export type CV = {
  fullName: string;
  email?: string;
  phone?: string;
  location?: string;
  qualifications: Qualification[];
};

export type ThemeColorsProperties =
  | "header-bg"
  | "header-text"
  | "body-bg"
  | "body-text"
  | "separators-bg";
export type ThemeColors = Record<ThemeColorsProperties, string>;

export type ThemeLayout = "top" | "left" | "right";

export type ThemeFontsProperties = "headings" | "text";
export type ThemeFontFamilies = (typeof ThemeFontFamiliesArray)[number];
export type ThemeFonts = Record<ThemeFontsProperties, ThemeFontFamilies>;
