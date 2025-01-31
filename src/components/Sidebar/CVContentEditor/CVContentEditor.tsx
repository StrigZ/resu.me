"use client";

import PersonalDetailsCard from "./PersonalDetails";
import { CardName } from "../Sidebar";
import { useState } from "react";
import QualificationCard from "./QualificationCard";

type Props = {};
export default function CVContentEditor({}: Props) {
  const [visibleCardName, setVisibleCardName] = useState<CardName>(null);
  const handleCardCollapse = (cardName: CardName) =>
    setVisibleCardName((prev) => (prev === cardName ? null : cardName));

  return (
    <>
      <PersonalDetailsCard />
      <QualificationCard
        type="education"
        isCollapsed={visibleCardName !== "education"}
        onCollapse={() => handleCardCollapse("education")}
      />
      <QualificationCard
        type="experience"
        isCollapsed={visibleCardName !== "experience"}
        onCollapse={() => handleCardCollapse("experience")}
      />
    </>
  );
}
