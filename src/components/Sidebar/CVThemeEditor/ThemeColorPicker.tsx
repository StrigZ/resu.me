import { ThemeColorsProperties, ThemeColors } from "~/app/page";
import Card from "~/components/Card";

const PropertyDisplayText: Record<ThemeColorsProperties, string> = {
  "header-bg": "Header Background",
  "header-text": "Header Text",
  "body-bg": "Body Background",
  "body-text": "Body Text",
  "separators-bg": "Separators Background",
};

type Props = {
  activeColors: ThemeColors;
  handleColorChange: (property: ThemeColorsProperties, color: string) => void;
};
export default function ThemeColorPicker({
  activeColors,
  handleColorChange,
}: Props) {
  const colorButtons = Object.entries(activeColors).map(
    ([property, color]) => ({
      property,
      color,
      displayText: PropertyDisplayText[property as ThemeColorsProperties],
    }),
  );

  return (
    <Card title="Colors">
      <ul className="space-y-2">
        {colorButtons.map(({ color, displayText, property }) => (
          <li key={`${property}-color-picker`}>
            <label
              className="flex cursor-pointer items-center justify-between gap-2"
              htmlFor={`${property}-color-picker`}
            >
              {displayText}
              <span
                className="block h-10 w-10 rounded-full border-2 border-gray-400 shadow-lg"
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
    </Card>
  );
}
