import { cn } from "~/utils/utils";
import Card from "../../Card";
import type { ThemeLayout } from "~/types";
import { useThemeContext } from "~/context/ThemeContextProvider";
import ThemeResetButton from "./ThemeResetButton";

type LayoutButton = {
  spanStyles: string;
  name: ThemeLayout;
};

const layoutButtons: LayoutButton[] = [
  {
    name: "top",
    spanStyles: "left-0 top-0 h-1/2 w-full",
  },
  {
    name: "left",
    spanStyles: "left-0 top-0 h-full w-1/2",
  },
  {
    name: "right",
    spanStyles: "right-0 top-0 h-full w-1/2",
  },
];

export default function ThemeLayoutPicker() {
  const {
    theme: { layout, colors },
    handleLayoutChange,
    resetTheme,
  } = useThemeContext();

  return (
    <Card title="Layout">
      <div className="flex flex-wrap justify-center gap-4 p-4 pt-0 lg:justify-start">
        {layoutButtons.map(({ name, spanStyles }) => (
          <button
            key={name}
            className={cn(
              "flex flex-col items-center p-2 transition-transform active:scale-95 md:w-full lg:w-fit",
              {
                "rounded-md bg-gray-200": layout === name,
              },
            )}
            onClick={() => handleLayoutChange(name)}
          >
            <span
              className="relative block h-16 w-16 rounded-md border"
              style={{
                borderColor: colors["header-bg"],
              }}
            >
              <span
                className={cn("absolute", spanStyles)}
                style={{ backgroundColor: colors["header-bg"] }}
              />
            </span>
            {name.toUpperCase()[0] + name.slice(1)}
          </button>
        ))}
      </div>
      <ThemeResetButton handleThemeReset={() => resetTheme("layout")} />
    </Card>
  );
}
