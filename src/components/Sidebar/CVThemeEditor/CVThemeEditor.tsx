import {
  ThemeLayout,
  ThemeColorsProperties,
  ThemeColors,
  Theme,
  ThemeFonts,
  ThemeFontsProperties,
  ThemeFontFamilies,
} from "~/app/page";
import ThemeLayoutPicker from "./ThemeLayoutPicker";
import { Dispatch, SetStateAction } from "react";
import ThemeColorPicker from "./ThemeColorPicker";
import ThemeFontPicker from "./ThemeFontPicker";

type Props = {
  activeLayout: ThemeLayout;
  activeColors: ThemeColors;
  activeFonts: ThemeFonts;
  setTheme: Dispatch<SetStateAction<Theme>>;
};
export default function CVThemeEditor({
  activeLayout,
  setTheme,
  activeColors,
  activeFonts,
}: Props) {
  const handleLayoutChange = (layout: ThemeLayout) =>
    setTheme((theme) => ({ ...theme, layout }));
  const handleColorChange = (property: ThemeColorsProperties, color: string) =>
    setTheme((theme) => ({
      ...theme,
      colors: { ...theme.colors, [property]: color },
    }));
  const handleFontChange = (
    property: ThemeFontsProperties,
    fontFamily: ThemeFontFamilies,
  ) =>
    setTheme((theme) => ({
      ...theme,
      fonts: { ...theme.fonts, [property]: fontFamily },
    }));

  return (
    <>
      <ThemeLayoutPicker
        activeLayout={activeLayout}
        handleLayoutChange={handleLayoutChange}
      />
      <ThemeColorPicker
        activeColors={activeColors}
        handleColorChange={handleColorChange}
      />
      <ThemeFontPicker
        activeFonts={activeFonts}
        handleFontChange={handleFontChange}
      />
    </>
  );
}
