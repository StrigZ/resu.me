import { cn } from "~/utils/utils";
import Card from "../../Card";
import { ThemeLayout } from "~/app/page";

type LayoutButton = {
  spanStyles: string;
  name: ThemeLayout;
};

const layoutButtons: LayoutButton[] = [
  {
    name: "top",
    spanStyles: "after:left-0 after:top-0 after:h-1/2 after:w-full",
  },
  {
    name: "left",
    spanStyles: "after:left-0 after:top-0 after:h-full after:w-1/2",
  },
  {
    name: "right",
    spanStyles: "after:right-0 after:top-0 after:h-full after:w-1/2",
  },
];

type Props = {
  activeLayout: ThemeLayout;
  handleLayoutChange: (ThemeLayout: ThemeLayout) => void;
};
export default function ThemeLayoutPicker({
  activeLayout,
  handleLayoutChange,
}: Props) {
  console.log(activeLayout);

  return (
    <Card title="Layout">
      <div className="flex flex-wrap justify-center gap-4 p-4 pt-0 lg:justify-start">
        {layoutButtons.map(({ name, spanStyles }) => (
          <button
            key={name}
            className={cn(
              "flex flex-col items-center p-2 transition-transform active:scale-95 md:w-full lg:w-fit",
              {
                "rounded-md bg-gray-200": activeLayout === name,
              },
            )}
            onClick={() => handleLayoutChange(name)}
          >
            <span
              className={cn(
                spanStyles,
                "relative block h-16 w-16 rounded-md border border-indigo-900 after:absolute after:bg-indigo-900",
              )}
            ></span>
            {name.toUpperCase()[0] + name.slice(1)}
          </button>
        ))}
      </div>
    </Card>
  );
}
