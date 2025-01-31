"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { CV, Qualification } from "../types";
import { defaultCvData } from "~/utils/defaultValues";

type CVContext = {
  cvData: CV;
  handleCVChange: <T extends keyof CV>(property: T, value: CV[T]) => void;
  addQualification: (
    newQualification: Pick<Qualification, "id" | "type"> &
      Partial<Omit<Qualification, "id">>,
  ) => void;
  editQualification: (id: string, editedQualification: Qualification) => void;
  deleteQualification: (QualificationId: string) => void;
  clearCV: () => void;
  loadDefaults: () => void;
};

const CVContext = createContext<CVContext>({
  cvData: defaultCvData,
  handleCVChange(property, value) {},
  addQualification(newQualification) {},
  deleteQualification(QualificationId) {},
  editQualification(id, editedQualification) {},
  clearCV() {},
  loadDefaults() {},
});
export const useCVContext = () => useContext(CVContext);

export default function CVContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cvData, setCvData] = useState<CV>(defaultCvData);

  const handleCVChange = <T extends keyof CV>(property: T, value: CV[T]) =>
    setCvData((prev) => ({ ...prev, [property]: value }));

  const addQualification: CVContext["addQualification"] = (newQualification) =>
    setCvData((prev) => ({
      ...prev,
      qualifications: [...prev.qualifications, newQualification],
    }));

  const editQualification: CVContext["editQualification"] = (
    id,
    editedQualification,
  ) =>
    setCvData((prev) => {
      const editedQualifications = [...prev.qualifications].map(
        (qualification) =>
          qualification.id === id ? editedQualification : qualification,
      );

      return {
        ...prev,
        qualifications: editedQualifications,
      };
    });

  const deleteQualification: CVContext["deleteQualification"] = (
    qualificationId,
  ) =>
    setCvData((prev) => {
      const qualifications = [
        ...prev.qualifications.filter(({ id }) => id !== qualificationId),
      ];
      return { ...prev, qualifications };
    });

  const clearCV: CVContext["clearCV"] = () =>
    setCvData({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      qualifications: [],
    });
  const loadDefaults: CVContext["loadDefaults"] = () =>
    setCvData(defaultCvData);

  const value: CVContext = {
    cvData,
    handleCVChange,
    addQualification,
    editQualification,
    deleteQualification,
    clearCV,
    loadDefaults,
  };

  return <CVContext.Provider value={value}>{children}</CVContext.Provider>;
}
