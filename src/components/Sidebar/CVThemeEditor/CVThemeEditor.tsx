import ThemeLayoutPicker from "./ThemeLayoutPicker";
import ThemeColorPicker from "./ThemeColorPicker";
import ThemeFontPicker from "./ThemeFontPicker";

type Props = {};
export default function CVThemeEditor({}: Props) {
  return (
    <>
      <ThemeLayoutPicker />
      <ThemeColorPicker />
      <ThemeFontPicker />
    </>
  );
}
