import EducationCard from "./EducationCard";
import PersonalDetailsCard from "./PersonalDetails";
import ExperienceCard from "./ExperienceCard";
import { CardName } from "./Sidebar";

type Props = {
  visibleCardName: CardName;
  handleCardCollapse: (cardName: CardName) => void;
};
export default function CVContentEditor({
  visibleCardName,
  handleCardCollapse,
}: Props) {
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
