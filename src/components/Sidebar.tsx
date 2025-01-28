"use client";

import { useState } from "react";
import EducationCard from "./EducationCard";
import PersonalDetailsCard from "./PersonalDetails";
import ExperienceCard from "./ExperienceCard";

type CardName = "education" | "experience" | null;

type Props = {};
function Sidebar({}: Props) {
  const [visibleCardName, setVisibleCardName] = useState<CardName>(null);

  const handleCardCollapse = (cardName: CardName) =>
    setVisibleCardName((prev) => (prev === cardName ? null : cardName));

  return (
    <aside className="col-start-1 col-end-2 flex flex-col gap-4">
      <PersonalDetailsCard />
      <EducationCard
        isCollapsed={visibleCardName !== "education"}
        onCollapse={() => handleCardCollapse("education")}
      />
      <ExperienceCard
        isCollapsed={visibleCardName !== "experience"}
        onCollapse={() => handleCardCollapse("experience")}
      />
    </aside>
  );
}
export default Sidebar;
