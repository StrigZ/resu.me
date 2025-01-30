"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import { CV } from "../types";
import { defaultCvData } from "~/utils/defaultValues";

type CVContext = {
  cvData: CV;
  handleCVChange: <T extends keyof CV>(property: T, value: CV[T]) => void;
};

const CVContext = createContext<CVContext>({
  cvData: defaultCvData,
  handleCVChange() {},
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

  const value: CVContext = {
    cvData: cvData,
    handleCVChange,
  };

  return <CVContext.Provider value={value}>{children}</CVContext.Provider>;
}
