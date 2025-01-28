import { ReactNode } from "react";
import { GoChevronDown } from "react-icons/go";
import { cn } from "~/utils/utils";

type Props = {
  children: ReactNode;
  title?: string;
  titleIcon?: ReactNode;
  isCollapsable?: boolean;
  className?: string;
} & (
  | { isCollapsable?: false; isCollapsed?: never; onCollapse?: never }
  | { isCollapsable: true; isCollapsed: boolean; onCollapse: () => void }
);
export default function Card({
  children,
  title,
  titleIcon,
  className,
  isCollapsable = false,
  isCollapsed,
  onCollapse,
}: Props) {
  return (
    <div
      className={cn(
        "rounded-md bg-white text-black shadow-md",
        {
          "space-y-2 p-6": !className,
        },
        className,
      )}
    >
      {title && (
        <button
          type="button"
          className="flex w-full items-center justify-between text-xl"
          onClick={onCollapse}
          disabled={!isCollapsable}
        >
          <h2 className="flex items-center gap-2 text-2xl font-bold">
            {titleIcon && <span className="text-3xl">{titleIcon}</span>} {title}
          </h2>
          {isCollapsable && (
            <GoChevronDown
              style={{
                transition: "0.3s ease transform",
                transform: isCollapsed ? "rotateZ(180deg)" : "",
              }}
            />
          )}
        </button>
      )}

      {!isCollapsed && children}
    </div>
  );
}
