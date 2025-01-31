"use client";

import { useRef, useState } from "react";

import CV from "~/components/CV/CV";
import Sidebar from "~/components/Sidebar/Sidebar";

export default function App() {
  const [isPdfLoading, setIsPdfLoading] = useState(false);
  const mainRef = useRef(null);

  const handlePDFDownload = async () => {
    if (typeof window === "undefined") return;

    const html2pdf = (await import("html2pdf.js")).default;

    setIsPdfLoading(true);

    /* eslint-disable  @typescript-eslint/no-unsafe-member-access */
    const options = {
      filename: "resu.me-cv.pdf",
      html2canvas: { scale: 4 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    /* eslint-disable  @typescript-eslint/no-unsafe-call */
    html2pdf()
      .from(mainRef.current)
      .set(options)
      .save()
      .then(() => {
        setIsPdfLoading(false);
      });
  };
  return (
    <>
      <Sidebar
        handlePDFDownload={handlePDFDownload}
        isPdfLoading={isPdfLoading}
      />
      <CV mainRef={mainRef} />
    </>
  );
}
