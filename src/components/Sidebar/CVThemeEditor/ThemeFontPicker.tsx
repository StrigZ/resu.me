import Card from "~/components/Card";

import { type ThemeFontFamilies, type ThemeFontsProperties } from "~/types";
import {
  ThemeFontFamiliesArray,
  useThemeContext,
} from "~/context/ThemeContextProvider";
import { cn } from "~/utils/utils";
import ThemeResetButton from "./ThemeResetButton";

const FontFamilyDisplayText: Record<ThemeFontFamilies, string> = {
  "sans-serif": "sans",
  monospace: "mono",
  serif: "serif",
};

export default function ThemeFontPicker() {
  const {
    theme: { fonts, colors },
    handleFontChange,
    resetTheme,
  } = useThemeContext();

  const fontButtons = Object.entries(fonts).map(([property, fontFamily]) => ({
    property,
    fontFamily,
    displayText: property[0]?.toUpperCase() + property.slice(1),
  }));

  return (
    <Card title="Fonts">
      <ul className="space-y-4 p-4 pt-0">
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
                    key={fontFamily}
                    className={cn(
                      "flex flex-1 flex-col rounded-md border-2 p-2",
                      {
                        "text-white": fontFamily === activeFontFamily,
                      },
                    )}
                    style={{
                      backgroundColor:
                        fontFamily === activeFontFamily
                          ? colors["header-bg"]
                          : undefined,
                    }}
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
                    {FontFamilyDisplayText[fontFamily]}
                  </button>
                ))}
              </div>
            </li>
          ),
        )}
      </ul>
      <ThemeResetButton handleThemeReset={() => resetTheme("fonts")} />
    </Card>
  );
}
