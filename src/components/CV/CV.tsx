import CVSection from "./CVSection";
import CVHeader from "./CVHeader";
import { useCVContext } from "../../context/CVContextProvider";

type Props = {};
export default function CV({}: Props) {
  const {
    cvData: { education, experience },
  } = useCVContext();

  return (
    <main className="col-span-2 h-fit bg-white shadow-md">
      <CVHeader />
      <div className="space-y-8 p-12">
        {education && education.length > 0 && (
          <CVSection title="Education" fields={education} />
        )}
        {experience && experience.length > 0 && (
          <CVSection title="Professional Experience" fields={experience} />
        )}
      </div>
    </main>
  );
}
