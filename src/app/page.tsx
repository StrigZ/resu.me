"use client";

import { useRef, useState } from "react";
// @ts-expect-error
import html2pdf from "html2pdf.js";

import CV from "~/components/CV/CV";
import Sidebar from "~/components/Sidebar/Sidebar";
import CVContextProvider from "~/context/CVContextProvider";
import ThemeContextProvider from "~/context/ThemeContextProvider";

export default function HomePage() {
  const [isPdfLoading, setIsPdfLoading] = useState(false);
  const mainRef = useRef(null);
  const handlePDFDownload = () => {
    setIsPdfLoading(true);
    const options = {
      filename: "resu.me-cv.pdf",
      html2canvas: { scale: 4 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf()
      .from(mainRef.current)
      .set(options)
      .save()
      .then(() => {
        setIsPdfLoading(false);
      });
  };

  return (
    <ThemeContextProvider>
      <CVContextProvider>
        <Sidebar
          handlePDFDownload={handlePDFDownload}
          isPdfLoading={isPdfLoading}
        />
        <CV mainRef={mainRef} />
      </CVContextProvider>
    </ThemeContextProvider>
  );
}
