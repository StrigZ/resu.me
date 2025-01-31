"use client";

import { GiGraduateCap } from "react-icons/gi";
import Card from "../../Card";
import { useCVContext } from "~/context/CVContextProvider";
import { ReactNode, useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import QualificationItemsList from "./QualificationItemsList";
import QualificationForm from "./QualificationForm";
import { QualificationType } from "~/types";
import { FaBriefcase } from "react-icons/fa";

const icons: Record<QualificationType, ReactNode> = {
  education: <GiGraduateCap />,
  experience: <FaBriefcase />,
};

type Props = {
  type: QualificationType;
  isCollapsed: boolean;
  onCollapse: () => void;
};
export default function QualificationCard({
  isCollapsed,
  onCollapse,
  type,
}: Props) {
  const {
    cvData: { qualifications },
    addQualification,
    deleteQualification,
  } = useCVContext();

  const [editedQualificationId, setEditedQualificationId] = useState<
    string | null
  >(null);

  const handleCollapse = () => {
    if (!editedQualification?.name && editedQualificationId) {
      deleteQualification(editedQualificationId);
    }
    setEditedQualificationId(null);
    onCollapse();
  };

  const editedQualification = qualifications.find(
    ({ id }) => id === editedQualificationId,
  );

  const handleAddNewQualification = () => {
    const newQualificationId = crypto.randomUUID();
    addQualification({ id: newQualificationId, type });
    setEditedQualificationId(newQualificationId);
  };

  const handleBack = () => {
    if (!editedQualification?.name && editedQualificationId) {
      deleteQualification(editedQualificationId);
    }
    setEditedQualificationId(null);
  };

  const handleEdit = (id: string) => setEditedQualificationId(id);

  return (
    <Card
      title={type[0]?.toUpperCase() + type.slice(1)}
      titleIcon={icons[type]}
      isCollapsable
      isCollapsed={isCollapsed}
      onCollapse={handleCollapse}
    >
      {editedQualification && editedQualificationId ? (
        <QualificationForm
          onBack={handleBack}
          editedQualification={editedQualification}
        />
      ) : (
        <>
          <QualificationItemsList
            items={qualifications.filter(
              (qualification) => qualification.type === type,
            )}
            handleEdit={handleEdit}
          />
          <button
            className="mt-4 flex w-full items-center justify-center gap-2 bg-gray-200 p-4 text-3xl font-semibold leading-none transition-colors hover:bg-gray-300 active:scale-95"
            onClick={handleAddNewQualification}
            type="button"
          >
            New <IoIosAddCircleOutline />
          </button>
        </>
      )}
    </Card>
  );
}
