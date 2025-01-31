import Card from "~/components/Card";
import { type ThemeColorsProperties } from "~/types";
import { useThemeContext } from "~/context/ThemeContextProvider";
import ThemeResetButton from "./ThemeResetButton";

const PropertyDisplayText: Record<ThemeColorsProperties, string> = {
  "header-bg": "Header Background",
  "header-text": "Header Text",
  "body-bg": "Body Background",
  "body-text": "Body Text",
  "separators-bg": "Separators Background",
};

export default function ThemeColorPicker() {
  const {
    theme: { colors },
    handleColorChange,
    resetTheme,
  } = useThemeContext();

  const colorButtons = Object.entries(colors).map(([property, color]) => ({
    property,
    color,
    displayText: PropertyDisplayText[property as ThemeColorsProperties],
  }));

  return (
    <Card title="Colors">
      <ul className="space-y-2 p-4 pt-0">
        {colorButtons.map(({ color, displayText, property }) => (
          <li key={`${property}-color-picker`}>
            <label
              className="flex cursor-pointer items-center justify-between gap-2 text-lg"
              htmlFor={`${property}-color-picker`}
            >
              {displayText}
              <span
                className="block h-10 w-10 shrink-0 rounded-full border-2 border-gray-400 shadow-lg"
                style={{ backgroundColor: color }}
              />
            </label>
            <input
              className="hidden"
              type="color"
              id={`${property}-color-picker`}
              onChange={(e) =>
                handleColorChange(
                  property as ThemeColorsProperties,
                  e.target.value,
                )
              }
            />
          </li>
        ))}
      </ul>
      <ThemeResetButton handleThemeReset={() => resetTheme("colors")} />
    </Card>
  );
}
