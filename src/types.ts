import { ThemeFontFamiliesArray } from "./context/ThemeContextProvider";

export type Theme = {
  layout: ThemeLayout;
  colors: ThemeColors;
  fonts: ThemeFonts;
};

export type EducationOrExperience = {
  id: string;
  location: string;
  startDate: Date;
  endDate: Date | null;
  name: string;
  degreeOrRole: string;
  description?: string;
};

export type CV = {
  fullName: string;
  email?: string;
  phone?: string;
  location?: string;
  education?: EducationOrExperience[];
  experience?: EducationOrExperience[];
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
