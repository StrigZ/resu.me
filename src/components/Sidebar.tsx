"use client";

import { useState } from "react";
import EducationCard from "./EducationCard";
import PersonalDetailsCard from "./PersonalDetails";

type Props = {};
function Sidebar({}: Props) {
  const [visibleCardIndex, setVisibleCardIndex] = useState<
    "education" | "experience" | null
  >(null);
  return (
    <aside className="col-start-1 col-end-2 flex flex-col gap-4">
      <PersonalDetailsCard />
      <EducationCard
        isCollapsed={visibleCardIndex === "education"}
        onCollapse={() =>
          setVisibleCardIndex((prev) =>
            prev === "education" ? null : "education",
          )
        }
      />
    </aside>
  );
}
export default Sidebar;
