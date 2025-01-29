import { LayoutType, ThemeType } from "~/app/page";
import Card from "../../Card";
import LayoutButtons from "./LayoutButtons";
import { Dispatch, SetStateAction } from "react";

type Props = {
  activeLayout: LayoutType;
  activeColor: string;
  activeFont: string;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
};
export default function CVThemeEditor({ activeLayout, setTheme }: Props) {
  const handleLayoutChange = (layout: LayoutType) =>
    setTheme((theme) => ({ ...theme, layout }));
  const handleAccentColorChange = (accentColor: string) =>
    setTheme((theme) => ({ ...theme, accentColor }));
  const handleFontChange = (font: string) =>
    setTheme((theme) => ({ ...theme, font }));

  return (
    <>
      <LayoutButtons
        activeLayout={activeLayout}
        handleLayoutChange={handleLayoutChange}
      />
      <Card title="Color">Colors</Card>
      <Card title="Fonts">Fonts</Card>
    </>
  );
}
