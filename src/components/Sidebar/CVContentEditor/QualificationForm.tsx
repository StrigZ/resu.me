import { useCVContext } from "~/context/CVContextProvider";
import EducationInputs from "./EducationInputs";
import { EducationOrExperience } from "~/types";

type Props = {
  onBack: () => void;
  editedEducation: EducationOrExperience;
};
export default function QualificationForm({ onBack, editedEducation }: Props) {
  const { deleteEducation } = useCVContext();
  return (
    <>
      <EducationInputs {...editedEducation} />
      <div className="flex">
        <button
          className="flex-1 justify-center bg-gray-200 p-1.5 font-semibold transition-colors hover:bg-gray-300 active:scale-95"
          onClick={() => onBack()}
        >
          Back
        </button>
        <button
          className="flex-1 justify-center bg-red-300 p-1.5 font-semibold text-red-800 transition-colors active:scale-95"
          onClick={() => deleteEducation(editedEducation.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
}
