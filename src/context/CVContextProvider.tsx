"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { CV, EducationOrExperience } from "../types";
import { defaultCvData } from "~/utils/defaultValues";

type CVContext = {
  cvData: CV;
  handleCVChange: <T extends keyof CV>(property: T, value: CV[T]) => void;
  addEducation: (
    newEducation: Pick<EducationOrExperience, "id"> &
      Partial<Omit<EducationOrExperience, "id">>,
  ) => void;
  addExperience: (
    newExperience: Pick<EducationOrExperience, "id"> &
      Partial<Omit<EducationOrExperience, "id">>,
  ) => void;
  editEducation: (id: string, editedEducation: EducationOrExperience) => void;
  editExperience: (id: string, editedEducation: EducationOrExperience) => void;
  deleteEducation: (educationId: string) => void;
  deleteExperience: (experienceId: string) => void;
};

const CVContext = createContext<CVContext>({
  cvData: defaultCvData,
  handleCVChange(property, value) {},
  addEducation(newEducation) {},
  addExperience(newExperience) {},
  editEducation(id, editedEducation) {},
  editExperience(id, editedEducation) {},
  deleteEducation(educationId) {},
  deleteExperience(experienceId) {},
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

  const addEducation: CVContext["addEducation"] = (newEducation) =>
    setCvData((prev) => ({
      ...prev,
      education: [...prev.education, newEducation],
    }));

  const addExperience: CVContext["addExperience"] = (newExperience) =>
    setCvData((prev) => ({
      ...prev,
      experience: [...prev.experience, newExperience],
    }));

  const editEducation: CVContext["editEducation"] = (id, editedEducation) =>
    setCvData((prev) => {
      const editedEducations = [...prev.education].map((education) =>
        education.id === id ? editedEducation : education,
      );

      return {
        ...prev,
        education: editedEducations,
      };
    });

  const editExperience: CVContext["editExperience"] = (id, editedExperience) =>
    setCvData((prev) => {
      const editedExperiences = [...prev.education].map((experience) =>
        experience.id === id ? editedExperience : experience,
      );

      return {
        ...prev,
        education: editedExperiences,
      };
    });

  const deleteEducation: CVContext["deleteEducation"] = (educationId) =>
    setCvData((prev) => {
      const education = [
        ...prev.education.filter(({ id }) => id !== educationId),
      ];
      return { ...prev, education };
    });

  const deleteExperience: CVContext["deleteExperience"] = (experienceId) =>
    setCvData((prev) => {
      const experience = [
        ...prev.education.filter(({ id }) => id !== experienceId),
      ];
      return { ...prev, experience };
    });

  const value: CVContext = {
    cvData: cvData,
    handleCVChange,
    addEducation,
    addExperience,
    editEducation,
    editExperience,
    deleteEducation,
    deleteExperience,
  };

  return <CVContext.Provider value={value}>{children}</CVContext.Provider>;
}
