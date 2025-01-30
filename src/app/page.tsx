"use client";

import CV from "~/components/CV/CV";
import Sidebar from "~/components/Sidebar/Sidebar";
import CVContextProvider from "~/context/CVContextProvider";
import ThemeContextProvider from "~/context/ThemeContextProvider";

export default function HomePage() {
  return (
    <ThemeContextProvider>
      <CVContextProvider>
        <Sidebar />
        <CV />
      </CVContextProvider>
    </ThemeContextProvider>
  );
}
