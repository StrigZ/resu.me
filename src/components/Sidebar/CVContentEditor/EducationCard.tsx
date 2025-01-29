import { GiGraduateCap } from "react-icons/gi";
import Card from "../../Card";
import Input from "../../Input";

type Props = {
  isCollapsed: boolean;
  onCollapse: () => void;
};
export default function EducationCard({ isCollapsed, onCollapse }: Props) {
  return (
    <Card
      title="Education"
      titleIcon={<GiGraduateCap />}
      isCollapsable
      isCollapsed={isCollapsed}
      onCollapse={onCollapse}
    >
      <div className="space-y-2 p-6 pt-0">
        <Input
          labelText="School"
          type="text"
          placeholder="Academy of the Sacred Heart"
        />
        <Input labelText="Degree" type="text" placeholder="PhD" />
        <Input labelText="End Date" type="date" />
        <Input
          labelText="Location"
          type="text"
          placeholder="351 Elizabeth Avenue, Louisiana"
        />
      </div>
    </Card>
  );
}
