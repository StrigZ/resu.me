import {
  LayoutType,
  ThemeColorsProperties,
  ThemeColors,
  ThemeType,
} from "~/app/page";
import Card from "../../Card";
import ThemeLayoutPicker from "./ThemeLayoutPicker";
import { Dispatch, SetStateAction } from "react";
import ThemeColorPicker from "./ThemeColorPicker";

type Props = {
  activeLayout: LayoutType;
  activeColors: ThemeColors;
  activeFont: string;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
};
export default function CVThemeEditor({
  activeLayout,
  setTheme,
  activeColors,
  activeFont,
}: Props) {
  const handleLayoutChange = (layout: LayoutType) =>
    setTheme((theme) => ({ ...theme, layout }));
  const handleColorChange = (property: ThemeColorsProperties, color: string) =>
    setTheme((theme) => ({
      ...theme,
      colors: { ...theme.colors, [property]: color },
    }));
  const handleFontChange = (font: string) =>
    setTheme((theme) => ({ ...theme, font }));

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
      <Card title="Fonts">Fonts</Card>
    </>
  );
}
