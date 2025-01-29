import CVSection from "./CVSection";
import CVHeader from "./CVHeader";
import { Theme } from "~/app/page";

const mockFields: {
  id: string;
  location: string;
  startDate: Date;
  endDate: Date | null;
  name: string;
  degreeOrRole: string;
  description?: string;
}[] = [
  {
    id: crypto.randomUUID(),
    name: "London City University",
    degreeOrRole: "Bachelors in Economics",
    location: "New York City, US",
    startDate: new Date("12/12/2022"),
    endDate: new Date("12/12/2023"),
  },
  {
    id: crypto.randomUUID(),
    name: "London City University",
    degreeOrRole: "Bachelors in Economics",
    location: "New York City, US",
    startDate: new Date("12/12/2022"),
    endDate: new Date("12/12/2023"),
    description:
      "Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
  },
];

type Props = { theme: Theme };
export default function CV({ theme }: Props) {
  return (
    <main className="col-span-2 h-fit bg-white shadow-md">
      <CVHeader />
      <div className="space-y-8 p-12">
        {mockFields && mockFields.length > 0 && (
          <CVSection title="Education" fields={mockFields} />
        )}
        {mockFields && mockFields.length > 0 && (
          <CVSection title="Professional Experience" fields={mockFields} />
        )}
      </div>
    </main>
  );
}
