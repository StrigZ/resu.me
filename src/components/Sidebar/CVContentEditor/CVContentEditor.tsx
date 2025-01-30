"use client";

import EducationCard from "./EducationCard";
import PersonalDetailsCard from "./PersonalDetails";
import ExperienceCard from "./ExperienceCard";
import { CardName } from "../Sidebar";
import { useState } from "react";

type Props = {};
export default function CVContentEditor({}: Props) {
  const [visibleCardName, setVisibleCardName] = useState<CardName>(null);
  const handleCardCollapse = (cardName: CardName) =>
    setVisibleCardName((prev) => (prev === cardName ? null : cardName));

  return (
    <>
      <PersonalDetailsCard />
      <EducationCard
        isCollapsed={visibleCardName !== "education"}
        onCollapse={() => handleCardCollapse("education")}
      />
      <ExperienceCard
        isCollapsed={visibleCardName !== "experience"}
        onCollapse={() => handleCardCollapse("experience")}
      />
    </>
  );
}
