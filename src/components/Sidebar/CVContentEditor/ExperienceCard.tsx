import Card from "../../Card";
import Input from "../../Input";
import { FaBriefcase } from "react-icons/fa";

type Props = {
  isCollapsed: boolean;
  onCollapse: () => void;
};
export default function ExperienceCard({ isCollapsed, onCollapse }: Props) {
  return (
    <Card
      title="Experience"
      titleIcon={<FaBriefcase />}
      isCollapsable
      isCollapsed={isCollapsed}
      onCollapse={onCollapse}
    >
      <div className="space-y-2 p-6 pt-0">
        <Input labelText="Company Name" type="text" placeholder="Nvidia" />
        <Input
          labelText="Position Title"
          type="text"
          placeholder="AI Engineer"
        />
        <Input labelText="Start Date" type="date" />
        <Input
          labelText="Location"
          type="text"
          placeholder="351 Elizabeth Avenue, Louisiana"
        />
        <div className="flex flex-col gap-1">
          <label
            htmlFor="experience-description"
            className="text-lg font-semibold"
          >
            Description
          </label>
          <textarea
            className="w-full resize-y rounded-md bg-gray-200 p-2"
            name="experience-description"
            id="experience-description"
          ></textarea>
        </div>
      </div>
    </Card>
  );
}
