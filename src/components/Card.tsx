"use client";
import { ReactNode, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { cn } from "~/utils/utils";

type Props = {
  children: ReactNode;
  title: string;
  titleIcon?: ReactNode;
  collapsable?: boolean;
  className?: string;
  isCollapsed?: boolean;
  onCollapse?: () => void;
};
export default function Card({
  children,
  title,
  titleIcon,
  className,
  collapsable = false,
  isCollapsed,
  onCollapse,
}: Props) {
  return (
    <div
      className={cn(
        "space-y-2 rounded-md bg-white p-6 text-black shadow-md",
        className,
      )}
    >
      <div className="flex items-center gap-4">
        <h2 className="flex items-center gap-2 text-2xl font-bold">
          <span className="text-3xl">{titleIcon}</span> {title}
        </h2>
        {collapsable && (
          <button type="button" className="text-xl" onClick={onCollapse}>
            {
              <GoChevronDown
                style={{
                  transition: "0.3s ease transform",
                  transform: isCollapsed ? "rotateZ(180deg)" : "",
                }}
              />
            }
          </button>
        )}
      </div>
      {!isCollapsed && children}
    </div>
  );
}
