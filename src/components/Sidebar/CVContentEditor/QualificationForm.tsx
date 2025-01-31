import { useCVContext } from "~/context/CVContextProvider";
import QualificationFormInputs from "./QualificationFormInputs";
import { Qualification, QualificationType } from "~/types";

type Props = {
  onBack: () => void;
  editedQualification: Qualification;
};
export default function QualificationForm({
  onBack,
  editedQualification,
}: Props) {
  const { deleteQualification } = useCVContext();

  return (
    <>
      <QualificationFormInputs {...editedQualification} />
      <div className="flex">
        <button
          className="flex-1 justify-center bg-gray-200 p-1.5 font-semibold transition-colors hover:bg-gray-300 active:scale-95"
          onClick={() => onBack()}
        >
          Back
        </button>
        <button
          className="flex-1 justify-center bg-red-300 p-1.5 font-semibold text-red-800 transition-colors active:scale-95"
          onClick={() => deleteQualification(editedQualification.id)}
        >
          Delete
        </button>
      </div>
    </>
  );
}
