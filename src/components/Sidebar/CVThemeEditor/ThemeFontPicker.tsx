import {
  ThemeFontFamilies,
  ThemeFontFamiliesArray,
  ThemeFonts,
  ThemeFontsProperties,
} from "~/app/page";
import Card from "~/components/Card";
import { cn } from "~/utils/utils";

const FontFamilyDisplayText: Record<ThemeFontFamilies, string> = {
  "sans-serif": "sans",
  monospace: "mono",
  serif: "serif",
};

type Props = {
  activeFonts: ThemeFonts;
  handleFontChange: (
    property: ThemeFontsProperties,
    fontFamily: ThemeFontFamilies,
  ) => void;
};
export default function ThemeFontPicker({
  activeFonts,
  handleFontChange,
}: Props) {
  const fontButtons = Object.entries(activeFonts).map(
    ([property, fontFamily]) => ({
      property,
      fontFamily,
      displayText: property[0]?.toUpperCase() + property.slice(1),
    }),
  );

  return (
    <Card title="Fonts">
      <ul className="space-y-4">
        {fontButtons.map(
          ({ fontFamily: activeFontFamily, displayText, property }) => (
            <li
              key={`${property}-font-family-picker`}
              className="flex flex-col gap-2"
            >
              <p className="text-lg">{displayText}</p>
              <div className="flex gap-2">
                {ThemeFontFamiliesArray.map((fontFamily) => (
                  <button
                    className={cn(
                      "flex flex-1 flex-col rounded-md border-2 p-2",
                      {
                        "bg-indigo-900 text-white":
                          (fontFamily as ThemeFontFamilies) ===
                          activeFontFamily,
                      },
                    )}
                    onClick={() =>
                      handleFontChange(
                        property as ThemeFontsProperties,
                        fontFamily,
                      )
                    }
                  >
                    <span
                      className="text-xl font-bold"
                      style={{ fontFamily: fontFamily }}
                    >
                      Aa
                    </span>
                    {FontFamilyDisplayText[fontFamily as ThemeFontFamilies]}
                  </button>
                ))}
              </div>
            </li>
          ),
        )}
      </ul>
    </Card>
  );
}
