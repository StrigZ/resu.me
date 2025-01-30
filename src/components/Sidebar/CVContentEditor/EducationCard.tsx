"use client";

import { GiGraduateCap } from "react-icons/gi";
import Card from "../../Card";
import { useCVContext } from "~/context/CVContextProvider";
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import QualificationItemsList from "./QualificationItemsList";
import QualificationForm from "./QualificationForm";

type Props = {
  isCollapsed: boolean;
  onCollapse: () => void;
};
export default function EducationCard({ isCollapsed, onCollapse }: Props) {
  const {
    cvData: { education },
    addEducation,
    deleteEducation,
  } = useCVContext();

  const [editedEducationId, setEditedEducationId] = useState<string | null>(
    null,
  );

  const handleCollapse = () => {
    setEditedEducationId(null);
    onCollapse();
  };

  const editedEducation = education.find(({ id }) => id === editedEducationId);

  const handleAddNewEducation = () => {
    const newEducationId = crypto.randomUUID();
    addEducation({ id: newEducationId });
    setEditedEducationId(newEducationId);
  };

  const handleBack = () => {
    if (!editedEducation?.name && editedEducationId) {
      deleteEducation(editedEducationId);
    }
    setEditedEducationId(null);
  };

  return (
    <Card
      title="Education"
      titleIcon={<GiGraduateCap />}
      isCollapsable
      isCollapsed={isCollapsed}
      onCollapse={handleCollapse}
    >
      {editedEducation && editedEducationId ? (
        <>
          <QualificationForm
            onBack={handleBack}
            editedEducation={editedEducation}
          />
        </>
      ) : (
        <>
          <QualificationItemsList
            items={education}
            handleEdit={setEditedEducationId}
          />
          <button
            className="mt-4 flex w-full items-center justify-center gap-2 bg-gray-200 p-4 text-3xl font-semibold leading-none transition-colors hover:bg-gray-300 active:scale-95"
            onClick={handleAddNewEducation}
            type="button"
          >
            New <IoIosAddCircleOutline />
          </button>
        </>
      )}
    </Card>
  );
}
