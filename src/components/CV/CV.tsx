import CVSection from "./CVSection";
import CVHeader from "./CVHeader";
import { useCVContext } from "../../context/CVContextProvider";
import {
  ThemeLayoutStyles,
  useThemeContext,
} from "~/context/ThemeContextProvider";
import { cn } from "~/utils/utils";
import { type MutableRefObject } from "react";

type Props = { mainRef: MutableRefObject<null> };
export default function CV({ mainRef }: Props) {
  const {
    cvData: { qualifications },
  } = useCVContext();

  const {
    theme: { colors, layout },
  } = useThemeContext();

  const education = qualifications.filter((q) => q.type === "education");
  const experience = qualifications.filter((q) => q.type === "experience");

  return (
    <main
      className={cn(
        "col-span-2 h-fit bg-white shadow-md",
        ThemeLayoutStyles[layout],
      )}
      ref={mainRef}
    >
      <CVHeader />
      <div
        className="space-y-8 pb-4"
        style={{
          backgroundColor: colors["body-bg"],
          color: colors["body-text"],
        }}
      >
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
